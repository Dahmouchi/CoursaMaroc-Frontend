import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

export default function Register({ navigation }) {


    const [isAnimeted, setIsAnimeted] = useState(false);

    const boxAnimationRef = useRef(new Animated.Value(0)).current;

    // Start Animation change colors of boxes
    const startAnimation = () => {
     
            Animated.timing(boxAnimationRef, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start(({ finished }) => finished && setTimeout(() => setIsAnimeted(false), 1000)); 
    
    };

    // Stop Animation change colors of boxes
    const stopAnimation = () => {
        Animated.timing(boxAnimationRef, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start(({ finished }) => finished && setTimeout(() => setIsAnimeted(true), 1000));   
    };


    useEffect(() => {
        // Start infinite animation
        if (isAnimeted) {
            startAnimation();
        } else {
            stopAnimation();
        }




    }, [isAnimeted]);





  return (
    <SafeAreaView style={styles.container}>


      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap:12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

});
