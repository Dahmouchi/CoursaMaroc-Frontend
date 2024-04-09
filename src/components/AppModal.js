import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Modal from "react-native-modal";
import { COLORS } from "../helpers/constants";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/reducer/ui/ModalSlice";
import AddTaxi from "./AddTaxi";

const AppModal = ({ children }) => {
  const { isOpen, componentName } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

    const removeBtnRef = useRef();

  const handelClose = () => {
    dispatch(closeModal());
    // hide the remove button
    removeBtnRef.current.setNativeProps({
      style: {
        display: "none",
      },
    });
  };



  const components = {
    AddTaxi,
  };

  let Component;

  if(componentName){
    const SelectedComponent = components[componentName];
    Component = <SelectedComponent />;
  }


  return (
    <Modal isVisible={isOpen} onBackdropPress={handelClose}
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <View style={styles.container}>
        
        <View style={styles.removeButtonContainer}>
        <TouchableOpacity style={styles.removeButton}
        onPress={handelClose}
        ref={removeBtnRef}
        >
          <View style={styles.arrow1} />
          <View style={styles.arrow2} />
        </TouchableOpacity>
        </View>

        <View style={styles.container}>{Component}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    padding: 16,
    borderRadius: 32,
   
  },
    removeButtonContainer: {
    alignItems: "flex-start",
    marginBottom: 10,
    },
  removeButton: {
 
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    justifyContent: "center",
  
  },
  arrow1: {
    width: 24,
    height: 3,
    backgroundColor: COLORS.green,
    borderRadius: 2,
    position: "absolute",
    transform: [{ rotate: "45deg" }],
  },
  arrow2: {
    width: 3,
    height: 24,
    backgroundColor: COLORS.green,
    borderRadius: 2,
    position: "absolute",
    transform: [{ rotate: "45deg" }],
  },
});

export default AppModal;
