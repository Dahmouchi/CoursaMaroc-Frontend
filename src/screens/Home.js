import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from 'react'
import Taxi from '../components/Taxi'
import ModalPrepare from "../components/ModalPrepare";
import {Ionicons} from "react-native-vector-icons"
import { COLORS, SIZES } from "../helpers/constants";
import axiosInstance from "../Axios";
import Loading from "../components/Loading";
import axios from "axios";
import {useSelector } from "react-redux";


const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedTaxi, setSelectedTaxi] = React.useState(null);
  const [taxis, setTaxis] = useState([]);
  const token = useSelector(state => state.user.token); // Accessing the token from the Redux store
  const handleTaxiPress = (taxi) => {
    setSelectedTaxi(taxi);
  };

  const handelDelete=()=>{
    if (!selectedTaxi) return; // Ensure a taxi is selected
    axios.delete("http://192.168.12.15:8000/api/taxi-queue/"+selectedTaxi.id,{
      headers: {
      "Accept": "application/json",
      "Authorization" : `Bearer ${token}`
    }})
      .then((res)=>{
        console.log(res.data)
        setRefreshing(true);
      })
      .catch((err)=>console.log(err));
  }
  useEffect(()=>{
    axios.get("http://192.168.12.15:8000/api/taxi-queue",
   { headers: {
      "Accept": "application/json",
      "Authorization" : `Bearer ${token}`
    }})
    .then(response => {
      //console.log(response.data);  Handle the response data here
      setTaxis(response.data);
      setRefreshing(false);     
    },[taxis])
    .catch(error => {
      console.error("Error:", error);
    });
  },[refreshing])
  const addPassenger =()=>{
    console.log("addd")
  }
  const deletePassenger =()=>{
    console.log("deletePassengerd")
  }
  if(!taxis)
  return <Loading />
    return (
      <View style={styles.home}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Ionicons name="search" size={30} />
            <Text style={styles.headerText}>القائمة</Text>
          </View>
        </View>
        <FlatList
          data={taxis}
          renderItem={({ item, index }) => <Taxi item={item} index={index} onPress={() => handleTaxiPress(item)}/>}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                setTimeout(() => {
                  setRefreshing(false);
                }, 2000);
              }}
            /> 
          }
          refreshing={refreshing}
        />
     {selectedTaxi && <ModalPrepare taxi={selectedTaxi} onClose={() => setSelectedTaxi(null)} onDelete={handelDelete} addPassenger={addPassenger} deletePassenger={deletePassenger}/>}
   </View>
  )
}

export default Home

const styles = StyleSheet.create({
  home:{
    height:"100%",
    backgroundColor:COLORS.bg
  },
  headerContainer:{
    height:100,
    justifyContent:"flex-end",
    backgroundColor:COLORS.light,
    marginBottom:10
  },
  header:{
    width:"100%",
    height:47,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:10,
    backgroundColor:COLORS.light,
  },
  headerText:{
    fontFamily: "Cairo",
    fontSize:SIZES.xl,
  },
})