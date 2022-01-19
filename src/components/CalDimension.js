import {Dimensions, PixelRatio} from "react-native";

const {width, height} = Dimensions.get("window");

const wp = (number) => {
    let givenWidth = typeof number === "number" ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const hp = (number) => {
    let givenHeight = typeof number === "number" ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

const fs=(size, multiplier = 2)=> {
  const scale = (width / height) * multiplier;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export {wp, hp,fs};