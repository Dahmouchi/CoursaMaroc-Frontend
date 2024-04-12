import { Keyboard, View } from "react-native";
import { useDispatch } from "react-redux";
import { openModal } from "../store/reducer/ui/ModalSlice";
import { useEffect, useState } from "react";

const AddIcon = ({ focused }) => {
  const dispatch = useDispatch();

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });

    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  if (focused) {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          height: 72,
          width: 72,
          borderRadius: 36,
          alignItems: "center",
          justifyContent: "center",
          top: keyboardStatus ? 0 : -32,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onTouchStart={() => {
          dispatch(openModal({ componentName: "AddTaxi" }));
        }}
      >
        {/* add icon */}
        <View
          style={{
            width: 24,
            height: 3,
            backgroundColor: "transparent",
            borderRadius: 2,
            position: "absolute",
          }}
        ></View>
        <View
          style={{
            width: 3,
            height: 24,
            backgroundColor: "#fff",
            borderRadius: 2,
            position: "absolute",
          }}
        ></View>
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: "#00CD5E",
        height: 72,
        width: 72,
        borderRadius: 36,
        alignItems: "center",
        justifyContent: "center",
        top: keyboardStatus ? 36 : -36,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      onTouchStart={() => {
        dispatch(openModal({ componentName: "AddTaxi" }));
      }}
    >
      {/* add icon */}
      <View
        style={{
          width: 24,
          height: 3,
          backgroundColor: "#fff",
          borderRadius: 2,
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          width: 3,
          height: 24,
          backgroundColor: "#fff",
          borderRadius: 2,
          position: "absolute",
        }}
      ></View>
    </View>
  );
};

export default AddIcon;
