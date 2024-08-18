import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const moderateScaleVertical = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const textScale = (percent: number) => {
  const screenHeight = Dimensions.get("window").height;
  const ratio =
    Dimensions.get("window").height / Dimensions.get("window").width;

  const deviceHeight = 375
    ? screenHeight * (ratio > 1.8 ? 0.126 : 0.15)
    : Platform.OS === "android"
      ? screenHeight - StatusBar?.currentHeight!
      : screenHeight;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

const percentageCalculation = (max: number, val: number) => max * (val / 100);

const fontCalculation = (height: number, width: number, val: number) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
    ),
    val,
  );
};

const responsiveFontSize = (f: number) => {
  const { height, width } = Dimensions.get("window");
  return fontCalculation(height, width, f);
};

export {
  scale,
  verticalScale,
  textScale,
  moderateScale,
  moderateScaleVertical,
  width,
  height,
  responsiveFontSize,
};
