/// <reference types="./typed-processes" />

declare class ProcessInstance {
  constructor();
  assign: any;
  canExecuteGlobal: any;
  canExecuteOn: any;
  canLaunchInterface: any;
  canProcessGlobal: any;
  canProcessImages: any;
  canProcessViews: any;
  description: any;
  executeGlobal: any;
  executeOn: any;
  executionTime: any;
  isAssignable: any;
  isHistoryUpdater: any;
  isMaskable: any;
  launch: any;
  launchInterface: any;
  processCategory: any;
  processId: any;
  readIcon: any;
  setDescription: any;
  startJD: any;
  toSource: any;
  validate: any;
  writeIcon: any;
  writeInstanceAddr: any;
}
declare class AutomaticBackgroundExtractor extends ProcessInstance {
  Divide: any;
  None: any;
  SameAsTarget: any;
  Subtract: any;
  abeDownsample: any;
  boxSeparation: any;
  boxSize: any;
  compareFactor: any;
  compareModel: any;
  correctedImageId: any;
  correctedImageSampleFormat: any;
  deviation: any;
  discardModel: any;
  f32: any;
  f64: any;
  i16: any;
  i32: any;
  i8: any;
  justTrySamples: any;
  maxBackground: any;
  minBackground: any;
  minBoxFraction: any;
  modelImageSampleFormat: any;
  normalize: any;
  polyDegree: any;
  replaceTarget: any;
  targetCorrection: any;
  tolerance: any;
  unbalance: any;
  useBrightnessLimits: any;
  useLuminanceLimits: any;
  verboseCoefficients: any;
  writeSampleBoxes: any;
}
declare class B3Estimator extends ProcessInstance {
  IntensityUnits_EnergyFrequency: any;
  IntensityUnits_EnergyWavelength: any;
  IntensityUnits_PhotonsFrequency: any;
  IntensityUnits_PhotonsWavelength: any;
  backgroundHigh1: any;
  backgroundHigh2: any;
  backgroundLow1: any;
  backgroundLow2: any;
  backgroundROIX01: any;
  backgroundROIX02: any;
  backgroundROIX11: any;
  backgroundROIX12: any;
  backgroundROIY01: any;
  backgroundROIY02: any;
  backgroundROIY11: any;
  backgroundROIY12: any;
  backgroundReferenceViewId1: any;
  backgroundReferenceViewId2: any;
  backgroundUseROI1: any;
  backgroundUseROI2: any;
  inputCenter1: any;
  inputCenter2: any;
  inputViewId1: any;
  inputViewId2: any;
  intensityUnits: any;
  outOfRangeMask: any;
  outOfRangeMaskViewId: any;
  outputBackgroundReferenceMask1: any;
  outputBackgroundReferenceMask2: any;
  outputCenter: any;
  substractBackground1: any;
  substractBackground2: any;
  syntheticImage: any;
  syntheticImageViewId: any;
  thermalMap: any;
  thermalMapViewId: any;
}
declare class Blink extends ProcessInstance {}
declare class ColorManagementSetup extends ProcessInstance {
  AbsoluteColorimetric: any;
  AskUser: any;
  AssignDefault: any;
  ConvertToDefault: any;
  DisableCM: any;
  DiscardEmbedded: any;
  KeepEmbedded: any;
  LeaveUntagged: any;
  Perceptual: any;
  RelativeColorimetric: any;
  Saturation: any;
  defaultEmbedProfilesInGrayscaleImages: any;
  defaultEmbedProfilesInRGBImages: any;
  defaultGamutCheckEnabled: any;
  defaultGrayscaleProfile: any;
  defaultProofingEnabled: any;
  defaultRGBProfile: any;
  defaultRenderingIntent: any;
  enabled: any;
  gamutWarningColor: any;
  onMissingProfile: any;
  onProfileMismatch: any;
  proofingIntent: any;
  proofingProfile: any;
  updateMonitorProfile: any;
  useLowResolutionCLUTs: any;
  useProofingBPC: any;
}
declare class CometAlignment extends ProcessInstance {
  Auto: any;
  BicubicBSpline: any;
  BicubicSpline: any;
  Bilinear: any;
  CatmullRomSplineFilter: any;
  CubicBSplineFilter: any;
  Lanczos3: any;
  Lanczos4: any;
  Lanczos5: any;
  MitchellNetravaliFilter: any;
  NearestNeighbor: any;
  drzSaveCometAligned: any;
  drzSaveStarsAligned: any;
  enableLinearFit: any;
  inputHints: any;
  linearClampingThreshold: any;
  normalize: any;
  operandIsDI: any;
  outputDir: any;
  outputExtension: any;
  outputHints: any;
  overwrite: any;
  pixelInterpolation: any;
  postfix: any;
  prefix: any;
  reference: any;
  rejectHigh: any;
  rejectLow: any;
  subtractFile: any;
  subtractMode: any;
  targetFrames: any;
}
declare class CosmeticCorrection extends ProcessInstance {
  amount: any;
  cfa: any;
  coldAutoCheck: any;
  coldAutoValue: any;
  coldDarkCheck: any;
  coldDarkLevel: any;
  defects: any;
  hotAutoCheck: any;
  hotAutoValue: any;
  hotDarkCheck: any;
  hotDarkLevel: any;
  masterDarkPath: any;
  outputDir: any;
  outputExtension: any;
  overwrite: any;
  postfix: any;
  prefix: any;
  targetFrames: any;
  transferFn: any;
  useAutoDetect: any;
  useDefectList: any;
  useMasterDark: any;
}
declare class Debayer extends ProcessInstance {
  Auto: any;
  BGGR: any;
  BGRG: any;
  BayerPattern: any;
  Bilinear: any;
  DebayerMethod: any;
  GBGR: any;
  GBRG: any;
  GRBG: any;
  GRGB: any;
  NoiseEvaluation_KSigma: any;
  NoiseEvaluation_MRS: any;
  OnError_Abort: any;
  OnError_AskUser: any;
  OnError_Continue: any;
  RGBG: any;
  RGGB: any;
  SuperPixel: any;
  VNG: any;
  bayerPattern: any;
  cfaPattern: any;
  cfaSourceFilePath: any;
  debayerMethod: any;
  evaluateNoise: any;
  fbddNoiseReduction: any;
  fileThreadOverload: any;
  inputHints: any;
  maxFileReadThreads: any;
  maxFileWriteThreads: any;
  noGUIMessages: any;
  noiseAlgorithmB: any;
  noiseAlgorithmG: any;
  noiseAlgorithmR: any;
  noiseEstimateB: any;
  noiseEstimateG: any;
  noiseEstimateR: any;
  noiseEvaluationAlgorithm: any;
  noiseFractionB: any;
  noiseFractionG: any;
  noiseFractionR: any;
  onError: any;
  outputDirectory: any;
  outputExtension: any;
  outputFileData: any;
  outputHints: any;
  outputImage: any;
  outputPostfix: any;
  outputPrefix: any;
  overwriteExistingFiles: any;
  showImages: any;
  targetItems: any;
  useFileThreads: any;
}
declare class DefectMap extends ProcessInstance {
  Circular: any;
  Gaussian: any;
  Horizontal: any;
  Maximum: any;
  Mean: any;
  Median: any;
  Minimum: any;
  Square: any;
  Vertical: any;
  isCFA: any;
  mapId: any;
  operation: any;
  structure: any;
}
declare class Divide extends ProcessInstance {
  Custom: any;
  FixedValueZone: any;
  ImageLinearization: any;
  Maximum: any;
  Mean: any;
  Median: any;
  Minimum: any;
  PlainDivision: any;
  StatisticalValueZone: any;
  customNormalization: any;
  flatId: any;
  highlightsAmount: any;
  highlightsContinuity: any;
  highlightsLimit: any;
  linearization: any;
  method: any;
  normalization: any;
  shadowsAmount: any;
  shadowsContinuity: any;
  shadowsLimit: any;
  statisticalDownLimit: any;
  statisticalUpLimit: any;
}
declare class DrizzleIntegration extends ProcessInstance {
  Abort: any;
  AskUser: any;
  Continue: any;
  Kernel_Circular: any;
  Kernel_Gaussian: any;
  Kernel_Square: any;
  Kernel_Variable10: any;
  Kernel_Variable15: any;
  Kernel_Variable30: any;
  Kernel_Variable40: any;
  Kernel_Variable50: any;
  Kernel_Variable60: any;
  cfaPattern: any;
  closePreviousImages: any;
  dropShrink: any;
  enableAdaptiveNormalization: any;
  enableCFA: any;
  enableImageWeighting: any;
  enableLocalDistortion: any;
  enableLocalNormalization: any;
  enableRejection: any;
  enableSurfaceSplines: any;
  imageData: any;
  inputData: any;
  inputDirectory: any;
  inputHints: any;
  integratedPixels: any;
  integrationImageId: any;
  kernelFunction: any;
  kernelGridSize: any;
  noGUIMessages: any;
  numberOfChannels: any;
  onError: any;
  originX: any;
  originY: any;
  outputPixels: any;
  outputRangeHigh: any;
  outputRangeLow: any;
  roiX0: any;
  roiX1: any;
  roiY0: any;
  roiY1: any;
  scale: any;
  totalData: any;
  totalRejectedHighB: any;
  totalRejectedHighG: any;
  totalRejectedHighRK: any;
  totalRejectedLowB: any;
  totalRejectedLowG: any;
  totalRejectedLowRK: any;
  truncateOnOutOfRange: any;
  useROI: any;
  weightImageId: any;
}
declare class DynamicAlignment extends ProcessInstance {
  SameAsTarget: any;
  badSampleColor: any;
  badSampleFillColor: any;
  data: any;
  f32: any;
  f64: any;
  i16: any;
  i32: any;
  i8: any;
  points: any;
  registeredImageId: any;
  registeredImageSampleFormat: any;
  removedLayers: any;
  sampleColor: any;
  searchFeatures: any;
  selectedSampleColor: any;
  selectedSampleFillColor: any;
  sourceImageHeight: any;
  sourceImageId: any;
  sourceImageWidth: any;
  sourceSearchRadius: any;
  targetImageHeight: any;
  targetImageWidth: any;
  targetSearchRadius: any;
  threshold: any;
}
declare class DynamicPSF extends ProcessInstance {
  Function_Gaussian: any;
  Function_Lorentzian: any;
  Function_Moffat: any;
  Function_Moffat10: any;
  Function_Moffat15: any;
  Function_Moffat25: any;
  Function_Moffat4: any;
  Function_Moffat6: any;
  Function_Moffat8: any;
  Function_VariableShape: any;
  PSF_BadParameters: any;
  PSF_FittedOk: any;
  PSF_InaccurateSolution: any;
  PSF_NoConvergence: any;
  PSF_NoSolution: any;
  PSF_NotFitted: any;
  PSF_UnknownError: any;
  Scale_CustomKeyword: any;
  Scale_LiteralValue: any;
  Scale_Pixels: any;
  Scale_StandardKeywords: any;
  Scale_StandardMetadata: any;
  Star_CrossingEdges: any;
  Star_DetectedOk: any;
  Star_NoConvergence: any;
  Star_NoSignificantData: any;
  Star_NotDetected: any;
  Star_OutsideImage: any;
  Star_UnknownError: any;
  astrometry: any;
  autoAperture: any;
  autoPSF: any;
  autoVariableShapePSF: any;
  badStarColor: any;
  badStarFillColor: any;
  betaMax: any;
  betaMin: any;
  circularPSF: any;
  gaussianPSF: any;
  lorentzianPSF: any;
  moffat10PSF: any;
  moffat15PSF: any;
  moffat25PSF: any;
  moffat4PSF: any;
  moffat6PSF: any;
  moffat8PSF: any;
  moffatPSF: any;
  psf: any;
  regenerate: any;
  scaleKeyword: any;
  scaleMode: any;
  scaleValue: any;
  searchRadius: any;
  selectedStarColor: any;
  selectedStarFillColor: any;
  signedAngles: any;
  starColor: any;
  stars: any;
  threshold: any;
  variableShapePSF: any;
  views: any;
}
declare class ExtractAlphaChannels extends ProcessInstance {
  ActiveAlphaChannel: any;
  AllAlphaChannels: any;
  ChannelList: any;
  channelList: any;
  channels: any;
  delete: any;
  extract: any;
}
declare class FluxCalibration extends ProcessInstance {
  CustomKeyword: any;
  Literal: any;
  StandardKeyword: any;
  aperture: any;
  apertureKeyword: any;
  apertureMode: any;
  atmosphericExtinction: any;
  atmosphericExtinctionKeyword: any;
  atmosphericExtinctionMode: any;
  centralObstruction: any;
  centralObstructionKeyword: any;
  centralObstructionMode: any;
  exposureTime: any;
  exposureTimeKeyword: any;
  exposureTimeMode: any;
  filterWidth: any;
  filterWidthKeyword: any;
  filterWidthMode: any;
  quantumEfficiency: any;
  quantumEfficiencyKeyword: any;
  quantumEfficiencyMode: any;
  sensorGain: any;
  sensorGainKeyword: any;
  sensorGainMode: any;
  transmissivity: any;
  transmissivityKeyword: any;
  transmissivityMode: any;
  wavelength: any;
  wavelengthKeyword: any;
  wavelengthMode: any;
}
declare class FourierTransform extends ProcessInstance {
  centered: any;
  radialCoordinates: any;
}
declare class GaiaDR2 extends ProcessInstance {
  SortBy_Dec: any;
  SortBy_DontSort: any;
  SortBy_G: any;
  SortBy_G_BP: any;
  SortBy_G_RP: any;
  SortBy_Parallax: any;
  SortBy_RA: any;
  TextFormat_CSV: any;
  TextFormat_Tabular: any;
  TextFormat_TabularCompound: any;
  TextHeaders_None: any;
  TextHeaders_SearchParameters: any;
  TextHeaders_SearchParametersAndTableColumns: any;
  TextHeaders_TableColumns: any;
  centerDec: any;
  centerRA: any;
  command: any;
  countIO: any;
  databaseFilePaths: any;
  databaseMagnitudeHigh: any;
  databaseMagnitudeLow: any;
  excessCount: any;
  exclusionFlags: any;
  generateTextOutput: any;
  inclusionFlags: any;
  magnitudeHigh: any;
  magnitudeLow: any;
  outputFilePath: any;
  radius: any;
  rejectCount: any;
  sortBy: any;
  sourceLimit: any;
  sources: any;
  textFormat: any;
  textHeaders: any;
  timeDecode: any;
  timeIO: any;
  timeTotal: any;
  timeUncompress: any;
  verbosity: any;
}
declare class GradientHDRComposition extends ProcessInstance {
  bKeepLog: any;
  bNegativeBias: any;
  dLogBias: any;
  generateMask: any;
  targetFrames: any;
}
declare class GradientHDRCompression extends ProcessInstance {
  bPreserveColor: any;
  bRescale01: any;
  expGradient: any;
  logMaxGradient: any;
  logMinGradient: any;
}
declare class GradientMergeMosaic extends ProcessInstance {
  Average: any;
  Overlay: any;
  blackPoint: any;
  generateMask: any;
  nFeatherRadius: any;
  nShrinkCount: any;
  targetFrames: any;
  type: any;
}
declare class HDRComposition extends ProcessInstance {
  autoExposures: any;
  closePreviousImages: any;
  fittingRectX0: any;
  fittingRectX1: any;
  fittingRectY0: any;
  fittingRectY1: any;
  generate64BitResult: any;
  images: any;
  inputHints: any;
  maskBinarizingThreshold: any;
  maskGrowth: any;
  maskSmoothness: any;
  outputMasks: any;
  rejectBlack: any;
  replaceLargeScales: any;
  useFittingRegion: any;
}
declare class ImageCalibration extends ProcessInstance {
  Abort: any;
  AskUser: any;
  Auto: any;
  BGGR: any;
  BGRG: any;
  Continue: any;
  CustomKeyword: any;
  DetectCFA: any;
  ForceCFA: any;
  GBGR: any;
  GBRG: any;
  GRBG: any;
  GRGB: any;
  IgnoreCFA: any;
  Keyword: any;
  Literal: any;
  NoiseEvaluation_KSigma: any;
  NoiseEvaluation_MRS: any;
  RGBG: any;
  RGGB: any;
  calibrateBias: any;
  calibrateDark: any;
  calibrateFlat: any;
  cfaPattern: any;
  darkCFADetectionMode: any;
  darkOptimizationLow: any;
  darkOptimizationThreshold: any;
  darkOptimizationWindow: any;
  enableCFA: any;
  evaluateNoise: any;
  f32: any;
  f64: any;
  flatScaleClippingFactor: any;
  i16: any;
  i32: any;
  inputHints: any;
  masterBiasEnabled: any;
  masterBiasPath: any;
  masterDarkEnabled: any;
  masterDarkPath: any;
  masterFlatEnabled: any;
  masterFlatPath: any;
  noGUIMessages: any;
  noiseEvaluationAlgorithm: any;
  onError: any;
  optimizeDarks: any;
  outputData: any;
  outputDirectory: any;
  outputExtension: any;
  outputHints: any;
  outputPedestal: any;
  outputPostfix: any;
  outputPrefix: any;
  outputSampleFormat: any;
  overscanEnabled: any;
  overscanImageX0: any;
  overscanImageX1: any;
  overscanImageY0: any;
  overscanImageY1: any;
  overscanRegions: any;
  overwriteExistingFiles: any;
  pedestal: any;
  pedestalKeyword: any;
  pedestalMode: any;
  separateCFAFlatScalingFactors: any;
  targetFrames: any;
}

declare class ImageIntegration extends ProcessInstance {
  AdaptiveNormalization: any;
  AdaptiveRejectionNormalization: any;
  Additive: any;
  AdditiveWithScaling: any;
  Average: any;
  AverageWeight: any;
  AveragedSigmaClip: any;
  CCDClip: any;
  DontCare: any;
  EqualizeFluxes: any;
  ExposureTime: any;
  KeywordWeight: any;
  LinearFit: any;
  LocalNormalization: any;
  LocalRejectionNormalization: any;
  Maximum: any;
  Median: any;
  MedianWeight: any;
  MinMax: any;
  Minimum: any;
  Multiplicative: any;
  MultiplicativeWithScaling: any;
  NoNormalization: any;
  NoRejection: any;
  NoRejectionNormalization: any;
  NoiseEvaluation: any;
  PercentileClip: any;
  Rejection_ESD: any;
  Scale: any;
  SigmaClip: any;
  SignalWeight: any;
  WeightScale_AvgDev: any;
  WeightScale_BWMV: any;
  WeightScale_IKSS: any;
  WeightScale_MAD: any;
  WeightScale_PBMV: any;
  WeightScale_Qn: any;
  WeightScale_Sn: any;
  WinsorizedSigmaClip: any;
  adaptiveGridSize: any;
  adaptiveNoScale: any;
  autoMemoryLimit: any;
  autoMemorySize: any;
  averageSNRIncrementB: any;
  averageSNRIncrementG: any;
  averageSNRIncrementRK: any;
  bufferSizeMB: any;
  ccdGain: any;
  ccdReadNoise: any;
  ccdScaleNoise: any;
  clipHigh: any;
  clipLow: any;
  closePreviousImages: any;
  combination: any;
  esdAlpha: any;
  esdLowRelaxation: any;
  esdOutliersFraction: any;
  evaluateNoise: any;
  fileThreadOverload: any;
  finalLocationEstimateB: any;
  finalLocationEstimateG: any;
  finalLocationEstimateRK: any;
  finalNoiseEstimateB: any;
  finalNoiseEstimateG: any;
  finalNoiseEstimateRK: any;
  finalScaleEstimateB: any;
  finalScaleEstimateG: any;
  finalScaleEstimateRK: any;
  generate64BitResult: any;
  generateDrizzleData: any;
  generateIntegratedImage: any;
  generateRejectionMaps: any;
  highRejectionMapImageId: any;
  ignoreNoiseKeywords: any;
  imageData: any;
  images: any;
  inputHints: any;
  integrationImageId: any;
  largeScaleClipHigh: any;
  largeScaleClipHighGrowth: any;
  largeScaleClipHighProtectedLayers: any;
  largeScaleClipLow: any;
  largeScaleClipLowGrowth: any;
  largeScaleClipLowProtectedLayers: any;
  linearFitHigh: any;
  linearFitLow: any;
  lowRejectionMapImageId: any;
  mapRangeRejection: any;
  maxBufferThreads: any;
  medianNoiseReductionB: any;
  medianNoiseReductionG: any;
  medianNoiseReductionRK: any;
  minMaxHigh: any;
  minMaxLow: any;
  mrsMinDataFraction: any;
  noGUIMessages: any;
  normalization: any;
  numberOfChannels: any;
  numberOfPixels: any;
  outputRangeHigh: any;
  outputRangeLow: any;
  pcClipHigh: any;
  pcClipLow: any;
  rangeClipHigh: any;
  rangeClipLow: any;
  rangeHigh: any;
  rangeLow: any;
  referenceNoiseReductionB: any;
  referenceNoiseReductionG: any;
  referenceNoiseReductionRK: any;
  referenceSNRIncrementB: any;
  referenceSNRIncrementG: any;
  referenceSNRIncrementRK: any;
  rejection: any;
  rejectionNormalization: any;
  reportRangeRejection: any;
  roiX0: any;
  roiX1: any;
  roiY0: any;
  roiY1: any;
  showImages: any;
  sigmaHigh: any;
  sigmaLow: any;
  slopeMapImageId: any;
  stackSizeMB: any;
  subtractPedestals: any;
  totalPixels: any;
  totalRejectedHighB: any;
  totalRejectedHighG: any;
  totalRejectedHighRK: any;
  totalRejectedLowB: any;
  totalRejectedLowG: any;
  totalRejectedLowRK: any;
  truncateOnOutOfRange: any;
  useBufferThreads: any;
  useCache: any;
  useFileThreads: any;
  useROI: any;
  weightKeyword: any;
  weightMode: any;
  weightScale: any;
  winsorizationCutoff: any;
}
declare class IndigoCCDFrame extends ProcessInstance {
  FrameType_Bias: any;
  FrameType_Dark: any;
  FrameType_Flat: any;
  FrameType_Light: any;
  TelescopeSelection_ActiveOrMountController: any;
  TelescopeSelection_ActiveTelescope: any;
  TelescopeSelection_DeviceName: any;
  TelescopeSelection_MountController: any;
  TelescopeSelection_NoTelescope: any;
  UploadMode_Client: any;
  UploadMode_Server: any;
  UploadMode_ServerAndClient: any;
  alignmentModelFile: any;
  autoStretch: any;
  binningX: any;
  binningY: any;
  clientDownloadDirectory: any;
  clientFileNameTemplate: any;
  clientFrames: any;
  clientOutputFormatHints: any;
  deviceName: any;
  enableAlignmentCorrection: any;
  exposureCount: any;
  exposureDelay: any;
  exposureTime: any;
  externalFilterWheelDeviceName: any;
  filterSlot: any;
  frameType: any;
  linkedAutoStretch: any;
  newImageIdTemplate: any;
  objectName: any;
  openClientImages: any;
  overwriteClientImages: any;
  requireSelectedTelescope: any;
  reuseImageWindow: any;
  saveClientImages: any;
  serverFileNameTemplate: any;
  serverFrames: any;
  serverUploadDirectory: any;
  telescopeAperture: any;
  telescopeDeviceName: any;
  telescopeSelection: any;
  uploadMode: any;
}
declare class IndigoDeviceController extends ProcessInstance {
  abort: any;
  devices: any;
  getCommandParameters: any;
  getCommandResult: any;
  newProperties: any;
  properties: any;
  serverCommand: any;
  serverConnect: any;
  serverHostName: any;
  serverPort: any;
  verbosity: any;
}
declare class IndigoMount extends ProcessInstance {
  AlignmentMethod: any;
  AlignmentMethod_AnalyticalModel: any;
  AlignmentMethod_None: any;
  AlignmentMethod_ServerModel: any;
  Command: any;
  Command_FitPointingModel: any;
  Command_GoTo: any;
  Command_MoveEastStart: any;
  Command_MoveEastStop: any;
  Command_MoveNorthStart: any;
  Command_MoveNorthStop: any;
  Command_MoveSouthStart: any;
  Command_MoveSouthStop: any;
  Command_MoveWestStart: any;
  Command_MoveWestStop: any;
  Command_Park: any;
  Command_ParkDefault: any;
  Command_Sync: any;
  Command_TestSync: any;
  Command_Unpark: any;
  PierSide: any;
  PierSide_East: any;
  PierSide_None: any;
  PierSide_West: any;
  SlewRate: any;
  SlewRate_Centering: any;
  SlewRate_Find: any;
  SlewRate_Guide: any;
  SlewRate_Max: any;
  alignmentConfig: any;
  alignmentModelFile: any;
  apparentTargetDec: any;
  apparentTargetRA: any;
  currentDec: any;
  currentLST: any;
  currentRA: any;
  deviceName: any;
  enableAlignmentCorrection: any;
  geographicLatitude: any;
  syncCelestialDec: any;
  syncCelestialRA: any;
  syncLST: any;
  syncTelescopeDec: any;
  syncTelescopeRA: any;
  targetDec: any;
  targetRA: any;
}
declare class InverseFourierTransform extends ProcessInstance {
  DontCare: any;
  Rescale: any;
  Truncate: any;
  idOfFirstComponent: any;
  idOfSecondComponent: any;
  onOutOfRangeResult: any;
}
declare class LRGBCombination extends ProcessInstance {
  channels: any;
  clipHighlights: any;
  layersProtected: any;
  layersRemoved: any;
  mL: any;
  mc: any;
  noiseReduction: any;
}

declare class LinearFit extends ProcessInstance {
  referenceViewId: any;
  rejectHigh: any;
  rejectLow: any;
}
declare class LocalNormalization extends ProcessInstance {
  GenerateNormalizedImages_Always: any;
  GenerateNormalizedImages_GlobalExecutionOnly: any;
  GenerateNormalizedImages_Never: any;
  GenerateNormalizedImages_ViewExecutionOnly: any;
  OnError_Abort: any;
  OnError_AskUser: any;
  OnError_Continue: any;
  PlotNormalizationFunctions_DontPlot: any;
  PlotNormalizationFunctions_Line3D: any;
  PlotNormalizationFunctions_Map3D: any;
  PlotNormalizationFunctions_Palette3D: any;
  backgroundRejectionLimit: any;
  fileThreadOverload: any;
  generateNormalizationData: any;
  generateNormalizedImages: any;
  graphOutputDirectory: any;
  graphSize: any;
  graphTextSize: any;
  graphTitleSize: any;
  graphTransparent: any;
  hotPixelFilterRadius: any;
  inputHints: any;
  maxFileReadThreads: any;
  maxFileWriteThreads: any;
  noGUIMessages: any;
  noScale: any;
  noiseReductionFilterRadius: any;
  onError: any;
  outputDirectory: any;
  outputExtension: any;
  outputHints: any;
  outputPostfix: any;
  outputPrefix: any;
  overwriteExistingFiles: any;
  plotNormalizationFunctions: any;
  referenceIsView: any;
  referencePathOrViewId: any;
  referenceRejectionThreshold: any;
  rejection: any;
  scale: any;
  showBackgroundModels: any;
  showRejectionMaps: any;
  targetItems: any;
  targetRejectionThreshold: any;
  useFileThreads: any;
}
declare class MergeCFA extends ProcessInstance {
  outputViewId: any;
  sourceCFAImage0: any;
  sourceCFAImage1: any;
  sourceCFAImage2: any;
  sourceCFAImage3: any;
}

declare class NewImage extends ProcessInstance {
  Grayscale: any;
  RGB: any;
  colorSpace: any;
  f32: any;
  f64: any;
  height: any;
  i16: any;
  i32: any;
  i8: any;
  id: any;
  numberOfChannels: any;
  sampleFormat: any;
  v0: any;
  v1: any;
  v2: any;
  va: any;
  width: any;
}
declare class NoOperation extends ProcessInstance {}
declare class PhotometricColorCalibration extends ProcessInstance {
  AlignmentDevice_PolygonMatching: any;
  AlignmentDevice_TriangleSimilarity: any;
  Projection_Gnomonic: any;
  Projection_HammerAitoff: any;
  Projection_Mercator: any;
  Projection_Orthographic: any;
  Projection_PlateCarree: any;
  Projection_Stereographic: any;
  Projection_ZenithalEqualArea: any;
  WorkingMode_Broadband: any;
  WorkingMode_Narrowband: any;
  applyCalibration: any;
  backgroundHigh: any;
  backgroundLow: any;
  backgroundROIX0: any;
  backgroundROIX1: any;
  backgroundROIY0: any;
  backgroundROIY1: any;
  backgroundReferenceViewId: any;
  backgroundUseROI: any;
  blueFilterBandwidth: any;
  blueFilterWavelength: any;
  centerDec: any;
  centerRA: any;
  epochJD: any;
  focalLength: any;
  forcePlateSolve: any;
  greenFilterBandwidth: any;
  greenFilterWavelength: any;
  ignoreImagePositionAndScale: any;
  neutralizeBackground: any;
  photAperture: any;
  photAutoAperture: any;
  photAutoLimitMagnitude: any;
  photAutoLimitMagnitudeFactor: any;
  photCatalogName: any;
  photGenerateGraphs: any;
  photLimitMagnitude: any;
  photSaturationThreshold: any;
  photShowBackgroundModels: any;
  photShowDetectedStars: any;
  photUsePSF: any;
  pixelSize: any;
  redFilterBandwidth: any;
  redFilterWavelength: any;
  serverURL: any;
  solverAlignmentDevice: any;
  solverAutoCatalog: any;
  solverAutoLimitMagnitude: any;
  solverAutoLimitMagnitudeFactor: any;
  solverCatalogName: any;
  solverDistortionCorrection: any;
  solverLimitMagnitude: any;
  solverNoiseLayers: any;
  solverProjection: any;
  solverSplineSmoothing: any;
  solverStarSensitivity: any;
  whiteReferenceId: any;
  whiteReferenceJB_JV: any;
  whiteReferenceName: any;
  whiteReferenceSr_JV: any;
  workingMode: any;
  zeroPointJB_JV: any;
  zeroPointSr_JV: any;
}

declare class Preferences extends ProcessInstance {
  Application_asteroidEphemeridesFile: any;
  Application_autoUIScaling: any;
  Application_cipITRSDataFile: any;
  Application_deltaATDataFile: any;
  Application_deltaTDataFile: any;
  Application_fontResolution: any;
  Application_fundamentalEphemeridesFile: any;
  Application_highResFont: any;
  Application_highResMonoFont: any;
  Application_lowResFont: any;
  Application_lowResMonoFont: any;
  Application_nutationModelFile: any;
  Application_resourceFile01: any;
  Application_resourceFile02: any;
  Application_resourceFile03: any;
  Application_resourceFile04: any;
  Application_resourceFile05: any;
  Application_resourceFile06: any;
  Application_resourceFile07: any;
  Application_resourceFile08: any;
  Application_resourceFile09: any;
  Application_resourceFile10: any;
  Application_shortTermAsteroidEphemeridesFile: any;
  Application_shortTermFundamentalEphemeridesFile: any;
  Application_shortTermNutationModelFile: any;
  Application_styleSheetFile: any;
  Application_uiScalingFactor: any;
  Identifiers_brokenLinkText: any;
  Identifiers_clonePostfix: any;
  Identifiers_imageContainerIconPrefix: any;
  Identifiers_imagePrefix: any;
  Identifiers_newImageCaption: any;
  Identifiers_noPreviewSelectedText: any;
  Identifiers_noPreviewsAvailableText: any;
  Identifiers_noViewSelectedText: any;
  Identifiers_noViewsAvailableText: any;
  Identifiers_previewPrefix: any;
  Identifiers_processIconPrefix: any;
  Identifiers_workspacePrefix: any;
  ImageWindow_backupFiles: any;
  ImageWindow_createPreviewsFromCoreProperties: any;
  ImageWindow_cursorTolerance: any;
  ImageWindow_default24BitScreenLUT: any;
  ImageWindow_defaultEmbedProperties: any;
  ImageWindow_defaultEmbedThumbnails: any;
  ImageWindow_defaultFileExtension: any;
  ImageWindow_defaultHorizontalResolution: any;
  ImageWindow_defaultMaskMode: any;
  ImageWindow_defaultMasksShown: any;
  ImageWindow_defaultMetricResolution: any;
  ImageWindow_defaultTransparencyColor: any;
  ImageWindow_defaultTransparencyMode: any;
  ImageWindow_defaultVerticalResolution: any;
  ImageWindow_downloadsDirectory: any;
  ImageWindow_fastScreenRenditionThreshold: any;
  ImageWindow_fastScreenRenditions: any;
  ImageWindow_fileFormatWarnings: any;
  ImageWindow_followDownloadLocations: any;
  ImageWindow_highDPIRenditions: any;
  ImageWindow_loadAstrometricSolutions: any;
  ImageWindow_nativeFileDialogs: any;
  ImageWindow_pinchSensitivity: any;
  ImageWindow_proxyURL: any;
  ImageWindow_rememberFileOpenType: any;
  ImageWindow_rememberFileSaveType: any;
  ImageWindow_showActiveSTFIndicators: any;
  ImageWindow_showCaptionCurrentChannels: any;
  ImageWindow_showCaptionFullPaths: any;
  ImageWindow_showCaptionIdentifiers: any;
  ImageWindow_showCaptionZoomRatios: any;
  ImageWindow_strictFileSaveMode: any;
  ImageWindow_swapCompression: any;
  ImageWindow_swapDirectories: any;
  ImageWindow_touchEvents: any;
  ImageWindow_transparencyBrush: any;
  ImageWindow_transparencyBrushBackgroundColor: any;
  ImageWindow_transparencyBrushForegroundColor: any;
  ImageWindow_useFileNamesAsImageIdentifiers: any;
  ImageWindow_verboseNetworkOperations: any;
  ImageWindow_wheelDirection: any;
  ImageWindow_wheelStepAngle: any;
  MainWindow_acceptDroppedFiles: any;
  MainWindow_animateCombo: any;
  MainWindow_animateMenu: any;
  MainWindow_animateToolBox: any;
  MainWindow_animateToolTip: any;
  MainWindow_animateWindows: any;
  MainWindow_capitalizedMenuBars: any;
  MainWindow_checkForUpdatesAtStartup: any;
  MainWindow_confirmProgramTermination: any;
  MainWindow_desktopSettingsAware: any;
  MainWindow_doubleClickLaunchesOpenDialog: any;
  MainWindow_expandFavoritesAtStartup: any;
  MainWindow_expandMostUsedAtStartup: any;
  MainWindow_expandRecentlyUsedAtStartup: any;
  MainWindow_explodeIcons: any;
  MainWindow_fadeAutoHideWindows: any;
  MainWindow_fadeMenu: any;
  MainWindow_fadeToolTip: any;
  MainWindow_fadeWindows: any;
  MainWindow_fadeWorkspaces: any;
  MainWindow_fullScreenAtStartup: any;
  MainWindow_hoverableAutoHideWindows: any;
  MainWindow_iconGridSpacing: any;
  MainWindow_implodeIcons: any;
  MainWindow_maxRecentFiles: any;
  MainWindow_maxUsageListLength: any;
  MainWindow_maximizeAtStartup: any;
  MainWindow_nativeMenuBar: any;
  MainWindow_openResourcesOnNewWebBrowserWindows: any;
  MainWindow_openURLsWithInternalBrowser: any;
  MainWindow_privateWebBrowsingMode: any;
  MainWindow_showFavorites: any;
  MainWindow_showMostUsed: any;
  MainWindow_showRecentlyUsed: any;
  MainWindow_showSplashAtStartup: any;
  MainWindow_translucentAutoHideWindows: any;
  MainWindow_translucentChildWindows: any;
  MainWindow_translucentWindows: any;
  MainWindow_useWallpapers: any;
  MainWindow_wallpaperFile01: any;
  MainWindow_wallpaperFile02: any;
  MainWindow_wallpaperFile03: any;
  MainWindow_wallpaperFile04: any;
  MainWindow_wallpaperFile05: any;
  MainWindow_wallpaperFile06: any;
  MainWindow_wallpaperFile07: any;
  MainWindow_wallpaperFile08: any;
  MainWindow_wallpaperFile09: any;
  MainWindow_wallpaperFile10: any;
  MainWindow_windowButtonsOnTheLeft: any;
  Process_alertOnProcessCompleted: any;
  Process_autoSavePSMPeriod: any;
  Process_backupFiles: any;
  Process_consoleDelay: any;
  Process_enableExecutionStatistics: any;
  Process_enableLaunchStatistics: any;
  Process_enableParallelCoreColorManagement: any;
  Process_enableParallelCoreRendering: any;
  Process_enableParallelModuleProcessing: any;
  Process_enableParallelProcessing: any;
  Process_enableThreadCPUAffinity: any;
  Process_generateScriptComments: any;
  Process_maxConsoleLines: any;
  Process_maxModuleThreadPriority: any;
  Process_maxProcessors: any;
}
declare class ProcessContainer extends ProcessInstance {
  add: any;
  at: any;
  clear: any;
  delete: any;
  disable: any;
  disabled: any;
  enable: any;
  enabled: any;
  insert: any;
  invertMask: any;
  isEmpty: any;
  length: any;
  maskId: any;
  maskInverted: any;
  setMask: any;
}

declare class RangeSelection extends ProcessInstance {
  fuzziness: any;
  highRange: any;
  invert: any;
  lowRange: any;
  screening: any;
  smoothness: any;
  toLightness: any;
}
declare class ReadoutOptions extends ProcessInstance {
  CIELab: any;
  CIELch: any;
  CIEXYZ: any;
  HSI: any;
  HSV: any;
  RGBK: any;
  RGBL: any;
  RGBY: any;
  broadcast: any;
  coordinateItems: any;
  coordinatePrecision: any;
  data: any;
  integerRange: any;
  maximum: any;
  mean: any;
  median: any;
  minimum: any;
  mode: any;
  precision: any;
  previewCenter: any;
  previewSize: any;
  previewZoomFactor: any;
  probeSize: any;
  real: any;
  showAlpha: any;
  showEclipticCoordinates: any;
  showEquatorialCoordinates: any;
  showGalacticCoordinates: any;
  showMask: any;
  showPreview: any;
}
declare class Sandbox extends ProcessInstance {
  FirstItem: any;
  SecondItem: any;
  ThirdItem: any;
  sampleFive: any;
  sampleFour: any;
  sampleOne: any;
  sampleThree: any;
  sampleTwo: any;
}
declare class ScreenTransferFunction extends ProcessInstance {
  Grayscale: any;
  STF: any;
  SeparateChannels: any;
  interaction: any;
}
declare class Script extends ProcessInstance {
  filePath: any;
  md5sum: any;
  parameters: any;
}
declare class SplitCFA extends ProcessInstance {
  outputDir: any;
  outputSubDirCFA: any;
  outputTree: any;
  outputViewId0: any;
  outputViewId1: any;
  outputViewId2: any;
  outputViewId3: any;
  overwrite: any;
  postfix: any;
  prefix: any;
  targetFrames: any;
}
declare class StarAlignment extends ProcessInstance {
  Abort: any;
  Always: any;
  AskUser: any;
  Auto: any;
  BicubicBSpline: any;
  BicubicSpline: any;
  Bilinear: any;
  CatmullRomSplineFilter: any;
  Continue: any;
  CubicBSplineFilter: any;
  DrawMatchedStars: any;
  DrawPutativeStarMatches: any;
  DrawStars: any;
  FitPSF_Always: any;
  FitPSF_DistortionOnly: any;
  FitPSF_Never: any;
  Lanczos3: any;
  Lanczos4: any;
  Lanczos5: any;
  MitchellNetravaliFilter: any;
  MosaicOnly: any;
  NearestNeighbor: any;
  NoIntersection: any;
  OutputMatrix: any;
  RegisterMatch: any;
  RegisterUnion: any;
  RegisterUnionSeparate: any;
  SameAsTarget: any;
  StructureMap: any;
  Structures: any;
  clampingThreshold: any;
  descriptorsPerStar: any;
  distortionAmplitude: any;
  distortionCorrection: any;
  distortionMapPostfix: any;
  distortionMaxIterations: any;
  distortionModel: any;
  distortionTolerance: any;
  extrapolateLocalDistortion: any;
  f32: any;
  f64: any;
  fileThreadOverload: any;
  fitPSF: any;
  frameAdaptation: any;
  generateDistortionMaps: any;
  generateDrizzleData: any;
  generateMasks: any;
  hotPixelFilterRadius: any;
  i16: any;
  i32: any;
  i8: any;
  inputHints: any;
  intersection: any;
  invert: any;
  linearClampingThreshold: any;
  localDistortion: any;
  localDistortionRegularization: any;
  localDistortionRejection: any;
  localDistortionRejectionWindow: any;
  localDistortionScale: any;
  localDistortionTolerance: any;
  maskPostfix: any;
  matcherTolerance: any;
  maxFileReadThreads: any;
  maxFileWriteThreads: any;
  maxStarDistortion: any;
  maxStars: any;
  mode: any;
  noGUIMessages: any;
  noiseLayers: any;
  noiseReductionFilterRadius: any;
  onError: any;
  outputData: any;
  outputDirectory: any;
  outputExtension: any;
  outputHints: any;
  outputPostfix: any;
  outputPrefix: any;
  outputSampleFormat: any;
  overwriteExistingFiles: any;
  peakResponse: any;
  pixelInterpolation: any;
  polygonSides: any;
  psfTolerance: any;
  randomizeMosaic: any;
  ransacMaxIterations: any;
  ransacMaximizeInliers: any;
  ransacMaximizeOverlapping: any;
  ransacMaximizeRegularity: any;
  ransacMinimizeError: any;
  ransacTolerance: any;
  referenceImage: any;
  referenceIsFile: any;
  restrictToPreviews: any;
  scaleTolerance: any;
  sensitivity: any;
  splineSmoothness: any;
  structureLayers: any;
  targets: any;
  trianglesPerStar: any;
  undistortedReference: any;
  upperLimit: any;
  useBrightnessRelations: any;
  useFileThreads: any;
  useScaleDifferences: any;
  useSurfaceSplines: any;
  useTriangles: any;
  writeKeywords: any;
}
declare class StarGenerator extends ProcessInstance {
  Conformal: any;
  Gnomonic: any;
  Output_CSVFile: any;
  Output_Image: any;
  centerDec: any;
  centerRA: any;
  epoch: any;
  focalLength: any;
  limitMagnitude: any;
  nonlinear: any;
  outputFilePath: any;
  outputMode: any;
  pixelSize: any;
  projectionSystem: any;
  sensorHeight: any;
  sensorWidth: any;
  starDatabasePath: any;
  starFWHM: any;
  targetMinimumValue: any;
}
declare class StarMask extends ProcessInstance {
  StarMask: any;
  StarMaskOverlay: any;
  StructureMap: any;
  StructureMapOverlay: any;
  aggregateStructures: any;
  binarizeStructures: any;
  growthCompensation: any;
  highlightsClipping: any;
  invert: any;
  largeScaleGrowth: any;
  limit: any;
  midtonesBalance: any;
  mode: any;
  noiseThreshold: any;
  shadowsClipping: any;
  smallScaleGrowth: any;
  smoothness: any;
  structureContours: any;
  truncation: any;
  waveletLayers: any;
}

declare class Statistics extends ProcessInstance {}
declare class SubframeSelector extends ProcessInstance {
  Abort: any;
  ArcSeconds: any;
  AskUser: any;
  Bits10: any;
  Bits12: any;
  Bits14: any;
  Bits16: any;
  Bits8: any;
  Continue: any;
  DataNumber: any;
  Eccentricity: any;
  EccentricityMeanDev: any;
  Electron: any;
  FWHM: any;
  FWHMMeanDev: any;
  Gaussian: any;
  Index: any;
  Lorentzian: any;
  MeasureSubframes: any;
  Median: any;
  MedianMeanDev: any;
  Moffat10: any;
  Moffat15: any;
  Moffat25: any;
  Moffat4: any;
  Moffat6: any;
  Moffat8: any;
  Noise: any;
  NoiseRatio: any;
  OutputSubframes: any;
  Pixel: any;
  SNRWeight: any;
  StarDetectionPreview: any;
  StarResidual: any;
  StarResidualMeanDev: any;
  Stars: any;
  Weight: any;
  applyHotPixelFilter: any;
  approvalExpression: any;
  backgroundExpansion: any;
  cameraGain: any;
  cameraResolution: any;
  dataUnit: any;
  fileCache: any;
  graphProperty: any;
  hotPixelFilterRadius: any;
  inputHints: any;
  maxDistortion: any;
  measurements: any;
  noiseLayers: any;
  noiseReductionFilterRadius: any;
  onError: any;
  outputDirectory: any;
  outputExtension: any;
  outputHints: any;
  outputKeyword: any;
  outputPostfix: any;
  outputPrefix: any;
  overwriteExistingFiles: any;
  peakResponse: any;
  pedestal: any;
  psfFit: any;
  psfFitCircular: any;
  roiX0: any;
  roiX1: any;
  roiY0: any;
  roiY1: any;
  routine: any;
  scaleUnit: any;
  sensitivity: any;
  siteLocalMidnight: any;
  sortProperty: any;
  structureLayers: any;
  subframeScale: any;
  subframes: any;
  trimmingFactor: any;
  upperLimit: any;
  weightingExpression: any;
  xyStretch: any;
}
declare class Superbias extends ProcessInstance {
  columns: any;
  excludeLargeScale: any;
  medianTransform: any;
  multiscaleLayers: any;
  rows: any;
  superbiasViewId: any;
  superbiasViewId1: any;
  trimmingFactor: any;
}
