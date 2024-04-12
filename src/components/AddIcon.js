import { View } from "react-native";
import { useDispatch } from "react-redux";
import { openModal } from "../store/reducer/ui/ModalSlice";
import { useEffect } from "react";


const AddIcon = ({ focused }) => {

    const dispatch = useDispatch();

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
            top: -36,
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
            dispatch(openModal({componentName: "AddTaxi"}) )
        }
        }
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
          top: -36,
          shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            
        }}
        onTouchStart={() => {
            dispatch(openModal({componentName: "AddTaxi"}) )
        }
        }
        
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

export default AddIcon