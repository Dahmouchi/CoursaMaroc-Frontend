import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/reducer/ProductsSlice";
import { closeModal } from "../store/reducer/ui/ModalSlice";
import moment from "moment";
import axios from "axios";

const AddTaxi = () => {
  const [to, setTo] = useState("");
  const [taxiNumber, setTaxiNumber] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token); // Accessing the token from the Redux store

  const handleAddProduct = () => {
    // check if product
    if (!to || !taxiNumber) {
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
        from: "سلا",
        to,
        taxiNumber,
        id: taxiNumber,
        numberOfProducts: 0,
        time: moment().format("hh:mm"),
      })
    );
    axios.post("http://192.168.12.15:8000/api/taxi-queue",{
      taxi_number:taxiNumber,
      from:"سلا",
      to:to,
      passengers:0
    },{ headers: {
      "Accept": "application/json",
      "Authorization" : `Bearer ${token}`
    }}).then((res) => {
      console.log(res)
      reload()
    }).catch(err => console.log(err))
    // show toast
    ToastAndroid.show("Taxi added", ToastAndroid.SHORT);
    setTo("");
    setTaxiNumber("");
    // remove error
    setError(null);
    dispatch(closeModal());
  };
  return (
    <View
      style={{
        backgroundColor: "#f4f4f4",
        height: 280,
        width: 300,
      }}
    >
      <View style={styles.form}>
        {/* Error Message */}
        {error && (
          <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
        )}


        <View style={{ flexDirection: "row", gap: 4 }}>
          <View
            style={{
              gap: 6,
              width: "50%",
              flexDirection: "column",
            }}
          >
            <Text
                 style={{
                fontFamily: "Cairo",
              }}
            >إلى</Text>
            <TextInput
              style={styles.inputDirections}
              placeholder="الوجة"
              onChangeText={(text) => setTo(text)}
              value={to}
              aria-label="الوجة"
              direction="rtl"
              placeholderTextColor={"#AFB1B6"}
            />
          </View>

          <View
            style={{
              gap: 6,
              width: "50%",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontFamily: "Cairo",
              }}
            >من</Text>
            <TextInput
              style={styles.inputDirections}
              placeholder="المنطقة"
              direction="rtl"
              placeholderTextColor={"#AFB1B6"}
              defaultValue="سلا"
            />
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="رقم الطاكسي"
          onChangeText={(text) => setTaxiNumber(text)}
          value={taxiNumber}
          keyboardType="numeric"
          direction="rtl"
          placeholderTextColor={"#AFB1B6"}
          autoFocus
        />



        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>
          مسح رمز الطاكسي
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>إضافة</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default AddTaxi;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    marginBottom: 5,
    direction: "rtl",
    fontFamily: "Cairo",
    borderColor: "#C8C9CC",
    borderWidth: 1,
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
  inputDirections: {
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    marginBottom: 5,
    direction: "rtl",
    fontFamily: "Cairo",
    borderColor: "#C8C9CC",
    borderWidth: 1,
  },
});
