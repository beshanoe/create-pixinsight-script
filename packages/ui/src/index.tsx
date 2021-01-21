/// <reference types="@pixinsight/core/types/controls" />

import * as React from "react";

type Props<Base> = Partial<Omit<Base, "constructor">> & {
  constructorProps?: any[];
};

type SizerChildProps<Base> = Props<Base> & {
  stretchFactor?: number;
  alignment?: number;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      picontrol: { [key: string]: any; type: string };
    }
  }
}

export function CheckBox(props: SizerChildProps<CheckBox>) {
  return <picontrol type="CheckBox" {...props} />;
}
export function ComboBox(props: SizerChildProps<ComboBox>) {
  return <picontrol type="ComboBox" {...props} />;
}
export function Dialog(props: Props<Dialog>) {
  return <picontrol type="Dialog" {...props} />;
}
export function Edit(props: SizerChildProps<Edit>) {
  return <picontrol type="Edit" {...props} />;
}
export function Frame(props: SizerChildProps<Frame>) {
  return <picontrol type="Frame" {...props} />;
}
export function GroupBox(props: SizerChildProps<GroupBox>) {
  return <picontrol type="GroupBox" {...props} />;
}
export function Label(props: SizerChildProps<Label>) {
  return <picontrol type="Label" {...props} />;
}
export function PushButton(props: SizerChildProps<PushButton>) {
  return <picontrol type="PushButton" {...props} />;
}
export function RadioButton(props: SizerChildProps<RadioButton>) {
  return <picontrol type="RadioButton" {...props} />;
}
export function ScrollBox(props: SizerChildProps<ScrollBox>) {
  return <picontrol type="ScrollBox" {...props} />;
}
export function Slider(props: SizerChildProps<Slider>) {
  return <picontrol type="Slider" {...props} />;
}
export function SpinBox(props: SizerChildProps<SpinBox>) {
  return <picontrol type="SpinBox" {...props} />;
}
export function TabBox(props: SizerChildProps<TabBox>) {
  return <picontrol type="TabBox" {...props} />;
}
export function TextBox(props: SizerChildProps<TextBox>) {
  return <picontrol type="TextBox" {...props} />;
}
export function ToolButton(props: SizerChildProps<ToolButton>) {
  return <picontrol type="ToolButton" {...props} />;
}
export function TreeBox(props: SizerChildProps<TreeBox>) {
  return <picontrol type="TreeBox" {...props} />;
}
export function ViewList({
  mode,
  ...props
}: Props<ViewList> & { mode?: `all` | `main` | `preview` }) {
  const viewListRef = React.useRef<ViewList>();
  React.useEffect(() => {
    if (mode === "main") {
      viewListRef.current?.getMainViews();
    } else if (mode === "preview") {
      viewListRef.current?.getPreviews();
    } else {
      viewListRef.current?.getAll();
    }
  }, [mode]);

  return <picontrol type="ViewList" ref={viewListRef} {...props} />;
}
export function WebView(props: SizerChildProps<WebView>) {
  return <picontrol type="WebView" {...props} />;
}

export function Sizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" {...props} />;
}
export function HorizontalSizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" {...props} />;
}
export function VerticalSizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" constructorProps={[true]} {...props} />;
}
export function Spacing({ size }: { size: number }) {
  return <picontrol type="Sizer" spacing={size}>0</picontrol>;
}
export function Stretch(props: { stretchFactor?: number }) {
  return <picontrol type="Sizer" {...props}></picontrol>;
}