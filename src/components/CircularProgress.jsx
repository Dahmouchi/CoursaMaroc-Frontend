// Packages Imports

import { useState } from "react";
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedProps,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { Svg, Circle } from "react-native-svg";

// Create an Animated Component for the Circle
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// function component for CircularProgress
function CircularProgress(props
) {
  // Destructuring props
  const {
    customNumber = 0,
    size = 80,
    strokeWidth = (5 * size) / 100,
    progress = 0,
    showLabel = true,
    labelSize = (20 * size) / 100,
    ...otherProps
  } = props;

  // get other props
  const {
    labelColor = "white",
    labelStyle,
    outerCircleColor = "white",
    progressCircleColor = "dodgerblue",
  } = otherProps;

  // Constants
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;

  // Local States
  const [LabelText, SetLabelText] = useState(0);

  // Derive the progress value from props
  const derivedProgressValue = useDerivedValue(() => {
    if (showLabel) runOnJS(SetLabelText)(Math.min(progress, 100));

    return withTiming(progress);
  }, [progress]);

  // AnimatedProps for the circle
  const circleAnimatedProps = useAnimatedProps(() => {
    const SVG_Progress = interpolate(
      derivedProgressValue.value,
      [0, 100],
      [100, 0],
      Extrapolate.CLAMP
    );

    // This dash offset is the inner circle progress
    return {
      strokeDashoffset: radius * Math.PI * 2 * (SVG_Progress / 100),
    };
  });

  // Style for the Label View
  const labelViewContainerStyle = [
    styles.labelView,
    {
      width: size,
      height: size,
    },
  ];

  // const style for the label text
  const labelTextStyles = [
    { color: labelColor, fontSize: labelSize },
    labelStyle,
  ];

  // render
  return (
    <Svg width={size} height={size}>
      <Circle
        stroke={outerCircleColor}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />

      <AnimatedCircle
        stroke={progressCircleColor}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${circum} ${circum}`}
        strokeLinecap="round"
        transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        strokeWidth={strokeWidth}
        animatedProps={circleAnimatedProps}
      />

      {showLabel ? (
        <View style={labelViewContainerStyle}>
          {
            customNumber ? (
              <Animated.Text style={labelTextStyles}>{customNumber}</Animated.Text>
            ) : <Animated.Text style={labelTextStyles}>{`${LabelText}%`}</Animated.Text>
            
          }
          
        </View>
      ) : null}
    </Svg>
  );
}

// exports
export default CircularProgress;

// styles
const styles = StyleSheet.create({
  labelView: {
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },

});