import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";import React, { useEffect, useState } from 'react'
import Taxi from '../components/Taxi'
import {useSelector } from "react-redux";
import ModalPrepare from "../components/ModalPrepare";
import {Ionicons} from "react-native-vector-icons"
import { COLORS, SIZES } from "../helpers/constants";
import axiosInstance from "../Axios";
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedTaxi, setSelectedTaxi] = React.useState(null);
  const data = useSelector((state) => state.products.products);
  const [taxis, setTaxis] = useState([]);
  const [products, setProducts] = React.useState(data);
  const [ModalFocused,setModalFocused]=useState(false);
  const show=()=>{setModalFocused(true)}
  const hide=()=>{setModalFocused(false)}
  const navigation = useNavigation();

  const handleTaxiPress = (taxi) => {
    setSelectedTaxi(taxi);

  };


  useEffect(()=>{
    axiosInstance.get("/taxi-queue")
    .then(response => {
      console.log(response.data); // Handle the response data here
      setTaxis(response.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  },[])
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
                setProducts([]);
                setTimeout(() => {
                  setRefreshing(false);
                  setProducts(data);
                }, 2000);
              }}
            />
            
          }
          refreshing={refreshing}
        />
     {selectedTaxi && <ModalPrepare taxi={selectedTaxi} onClose={() => setSelectedTaxi(null)} />}
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