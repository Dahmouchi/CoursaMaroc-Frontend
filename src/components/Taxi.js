import React, { useState } from "react";
//import CircularProgress from 'react-native-circular-progress-indicator';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { MaterialIcons} from "@expo/vector-icons";
import { COLORS, SIZES } from "../helpers/constants";
const Taxi = ({ item, index }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable onPress={() => setModalVisible(true)} style={styles.card}>
   
    <View style={styles.taxi_number_container}>
      <View style={styles.taxi_number_before} />
        <View style={styles.taxi_number}>
          <Text style={styles.taxi_numberText}>{item.taxiNumber} </Text>
        </View>
        <View style={styles.taxi_number_after} />
      </View>

      <View style={styles.body}>

        <View style={{
          
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 13,
          backgroundColor : "#1c1c1c",
          borderRadius: 5,
        }}
        >
        <Text
          style={{
            color: "#fff",
            fontSize: 9,
            textAlign: "center",
          }}
        >
          {item.time}
        </Text>
        </View>

       <View style={styles.bodyContainer}>
         {/* Order */}
         <View style={styles.order}>
          <Text style={styles.taxiOrder}> {item.id}</Text>
        </View>

        {/* dierection */}
        <View style={styles.direction}>
          {/* dierection  Text*/}
          <View style={styles.directionText}>
            <Text style={styles.taxiDirection1}>{item.from}</Text>
            <Text style={styles.taxiDirection2}>{item.to}</Text>
          </View>

          {/* Arrows */}
          <View style={styles.directionArrow}>
            <View style={styles.circelOut1}>
              <View style={styles.circelIn1} />
            </View>

            <View style={styles.arrow} />

            <View style={styles.circelOut2}>
              <View style={styles.circelIn2} />
            </View>
          </View>
        </View>

        {/* Number of passengers */}
        <View style={styles.progress}>
       
        </View>

        {/* Drag Icon */}
        <View style={styles.drag}>
          <MaterialIcons name="drag-indicator" size={24} color="black" />
        </View>
       </View>
      </View>
    </Pressable>
  );}
  export default Taxi;
  
const styles = StyleSheet.create({
    buttons: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    chais: {
      marginVertical: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    place: {
      padding: 20,
      width: "70%",
      borderWidth: 2,
      borderColor: "gray",
      height: 240,
      borderRadius: 16,
    },
    modelInput: {
      width: "100%",
      marginHorizontal: 20,
      height: 50,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
    },
  
    centeredView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      width: "100%",
      height: 550,
      backgroundColor: "white",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 8,
      padding: 10,
      elevation: 2,
      width: 150,
      alignItems: "center",
    },
    buttonOpen: {
      backgroundColor: "#00CD5E",
    },
    buttonClose: {
      backgroundColor: "#FF7755",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
    },
    modalText: {
      width: "100%",
      paddingHorizontal: 5,
      fontFamily: "Cairo",
      marginTop: 10,
      textAlign: "right",
    },
    container: {
      flex: 1,
      backgroundColor: "#f4f4f4",
      paddingTop: 50,
      gap: 16,
    },
  
    card: {
      borderRadius: 16,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 2,
    },
  
    taxi_number_container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    taxi_number_before: {
      backgroundColor: "#00CD5E",
  
      borderTopLeftRadius: 16,
      transform: [{ rotate: "20deg" }],
      width: 16,
      height: 40,
      position: "absolute",
      left: -8.79,
      bottom: -8.79,
    },
    taxi_number_after: {
      backgroundColor: "#00CD5E",
      borderTopRightRadius: 16,
      transform: [{ rotate: "-20deg" }],
      width: 16,
      height: 40,
      position: "absolute",
      right: -8.79,
      bottom: -8.79,
      
    },
  
    taxi_number: {
      backgroundColor: "#00CD5E",
      width: 100,
      height: 28,
      alignItems: "center",
      justifyContent: "center",
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      
  
    },
    taxi_numberText: {
      color: "#fff",
      fontSize: SIZES.md,
      fontFamily: "Poppins700",
    },
  
    body: {
      flexDirection: "Column",
      
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
  
      borderRadius: 16,
      borderWidth: 1.5,
      paddingTop: 2,
    },
  
    bodyContainer: {
      width: "95%",
      height: 72,
      borderRadius: 16,
      paddingVertical: 4,
      paddingHorizontal: 8,
      flexDirection: "row-reverse",
      alignItems: "center",
      gap: 16,
    },
    order: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#1c1c1c",
    },
    taxiOrder: {
      color: "#000",
      fontSize: SIZES.md,
      fontFamily: "Poppins700",
      lineHeight: 40,
    },
    direction: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100%",
      flex: 1,
      gap: 8,
    },
    directionArrow: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 8,
    },
    circelOut1: {
      backgroundColor: "#1c1c1c",
      width: 8,
      height: 8,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      
    },
    circelIn1: {
      backgroundColor: COLORS.green,
      width: 5,
      height: 5,
      borderRadius: 2.5,
    },
    circelOut2: {
      backgroundColor: "#1c1c1c",
      width: 12,
      height: 12,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
    },
    circelIn2: {
      backgroundColor: COLORS.green,
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    arrow: {
      width: 2,
      height: 20,
      backgroundColor: "#000",
    },
    directionText: {
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "space-between",
      height: "100%",
    },
    taxiDirection1: {
      color: "#000",
      fontSize: 18,
      fontFamily: "Cairo500",
    },
    taxiDirection2: {
      color: "#000",
      fontSize: 18,
      fontFamily: "Cairo800",
    },
    drag: {
      backgroundColor: "#f4f4f4",
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    progress: {
      width: 100,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  });