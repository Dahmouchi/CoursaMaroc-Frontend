
import {
    Text,
    TextInput,
    View,
    Modal,
    Pressable,
    StyleSheet,
  } from "react-native";
  import { FontAwesome5 } from "@expo/vector-icons";

const ModalPrepare =({modalVisible})=>{
    return(
      <View style={styles.centeredView}>
       
      </View>
    )
}
export default ModalPrepare;

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
  });