import { UIControl, UIVerticalSizer } from "@pixinsight/ui";
import React, { useEffect, useMemo, useRef, useState } from "react";

export function ImagePreview({
  image,
  children,
}: { image?: Image } & React.ComponentProps<typeof UIControl>) {
  const controlRef = useRef<Control>(null);
  const [zoom, setZoom] = useState(1);
  const [isDrag, setIsDrag] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [rect, setRect] = useState<Rect>(new Rect());

  const [
    bmp,
    defaultRectSize,
    scaleX,
    scaleY,
    offsetX,
    offsetY,
  ] = useMemo(() => {
    const ratio = image?.width / image?.height;
    const [sw, sh, rectSize] =
      ratio > 1
        ? [size.w, size.w / ratio, image?.height]
        : [ratio * size.h, size.h, image?.width];
    const bmp = image?.render().scaledTo(sw, sh);
    return [
      bmp,
      rectSize,
      bmp?.width / image?.width,
      bmp?.height / image?.height,
      size.w / 2 - bmp?.width / 2,
      size.h / 2 - bmp?.height / 2,
    ];
  }, [image, size]);

  useEffect(() => {
    if (!image) {
      return;
    }
    const newRect = new Rect(defaultRectSize, defaultRectSize);
    newRect.moveTo(
      (image.width - newRect.width) / 2,
      (image.height - newRect.height) / 2
    );
    setRect(newRect);
  }, [image]);

  useEffect(() => {
    if (!image) {
      return;
    }
    const oldCenter = new Point(rect.center);
    const newRect = new Rect(rect);
    newRect.resizeTo(defaultRectSize / zoom, defaultRectSize / zoom);
    newRect.center = oldCenter;
    constrainRect(newRect);
    setRect(newRect);
  }, [zoom]);

  function onPaint() {
    if (!controlRef.current || !bmp) {
      return;
    }
    const control = controlRef.current;
    const G = new Graphics(control);

    G.drawBitmap(offsetX, offsetY, bmp);
    G.pen = new Pen(0xff00ff00); //Green
    const greenRect = new Rect(
      offsetX + rect.x0 * scaleX,
      offsetY + rect.y0 * scaleY,
      offsetX + rect.x1 * scaleX,
      offsetY + rect.y1 * scaleY
    );
    G.drawRect(greenRect);
    G.end();

    gc();
  }

  function onResize(w: number, h: number) {
    setSize({ w, h });
  }

  function onMouseWheel(
    x: number,
    y: number,
    delta: number,
    buttonState: number,
    modifiers: any
  ) {
    if (Math.abs(scrollAmount) > 50) {
      const operand = scrollAmount / Math.abs(scrollAmount);
      if (operand > 0) {
        setZoom(zoom + 1 > 100 ? 100 : zoom + 1);
      } else {
        setZoom(zoom - 1 < 1 ? 1 : zoom - 1);
      }
      setScrollAmount(0);
    } else {
      setScrollAmount(scrollAmount + delta);
    }
  }

  function constrainRect(rect: Rect) {
    const [w, h] = [rect.width, rect.height];
    if (rect.left < 0) {
      rect.left = 0;
    }
    if (rect.right > image?.width) {
      rect.left = image?.width - rect.width;
    }
    if (rect.top < 0) {
      rect.top = 0;
    }
    if (rect.bottom > image?.height) {
      rect.top = image?.height - rect.height;
    }
    rect.width = w;
    rect.height = h;
  }

  function updateRectPosition(x: number, y: number) {
    const newRect = new Rect(rect);
    newRect.center = new Point((x - offsetX) / scaleX, (y - offsetY) / scaleY);
    constrainRect(newRect);
    setRect(newRect);
  }

  function onMousePress(x: number, y: number) {
    updateRectPosition(x, y);
    setIsDrag(true);
  }

  function onMouseRelease() {
    setIsDrag(false);
  }

  function onMouseMove(x: number, y: number) {
    updateRectPosition(x, y);
  }

  return (
    <UIVerticalSizer>
      <UIControl
        ref={controlRef}
        onPaint={onPaint}
        onMouseWheel={onMouseWheel}
        onMousePress={onMousePress}
        onMouseRelease={onMouseRelease}
        onMouseMove={onMouseMove}
        onResize={onResize}
        minHeight={300}
      >
        {children}
      </UIControl>
    </UIVerticalSizer>
  );
}