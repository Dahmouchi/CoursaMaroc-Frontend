import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/reducer/ProductsSlice";
import { closeModal } from "../store/reducer/ui/ModalSlice";
import moment from "moment";


const AddTaxi = () => {

    const [to, setTo] = useState('');
    const [taxiNumber, setTaxiNumber] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();



    const handleAddProduct = () => {
        // check if product
        if ( !to || !taxiNumber) {
            setError("Please fill in all fields");
            return;
        }
        
        // check if taxi number is int
        if (isNaN(taxiNumber)) {
            setError("Taxi number must be a number");
            return;
        }
        // add product
        dispatch(
          addProduct({
              from : "سلا",
              to,
              taxiNumber,
              id:taxiNumber,
              numberOfProducts : 0,
              time : moment().format("hh:mm")
          })
      );
      // show toast
      ToastAndroid.show("Taxi added", ToastAndroid.SHORT);
      
      setTo("");
      setTaxiNumber("");
      // remove error
      setError(null);
      dispatch(closeModal())
    }
  return (
    <View
      style={{
      
        backgroundColor: "#f4f4f4",
        height: 200,
        width: 300,
        
      }}
    >
      <View style={styles.form}>
      {/* Error Message */}
      {error && (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      )}
       
       
        <TextInput
          style={styles.input}
          placeholder="الوجة"
          onChangeText={(text) => setTo(text)}
          value={to}
          autoFocus
          aria-label="الوجة"

        />
        <TextInput
          style={styles.input}
          placeholder="رقم الطاكسي"
          onChangeText={(text) => setTaxiNumber(text)}
          value={taxiNumber}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button}
        onPress={handleAddProduct}
        >
        <Text style={styles.buttonText}>إضافة</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default AddTaxi

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:12,
        
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "100%",
        borderRadius: 10,
        marginBottom: 5,
        direction: "rtl",
        fontFamily: "Cairo",
    },
    button: {
        backgroundColor: "#00CD5E",
        padding: 10,
        width: "100%",
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Cairo600",
    },
});
