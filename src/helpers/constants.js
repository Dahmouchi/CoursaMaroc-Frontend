import { PixelRatio } from "react-native"

const fontScale =  PixelRatio.getFontScale()

export const SIZES = {
    sm: 12 * fontScale,
    md: 16 * fontScale,
    lg: 20 * fontScale,
    xl: 24 * fontScale,
    xxl: 28 * fontScale,
    xxxl: 32 * fontScale,
}

export const COLORS = {
    green : '#00CD5E',
    dark : '#323232',
    light : '#f4f4f4',
    white : '#fff',
    darkText : '1C1C1C',
    bg : '#ECECEC',
}




