import React, { useEffect } from 'react';
import { View, Text,StyleSheet, TextInput ,Image, Pressable} from 'react-native';
import { COLORS } from '../helpers/constants';
import img from "../../assets/car.png"
import { Ionicons,FontAwesome5  } from '@expo/vector-icons'; // or 'react-native-vector-icons'

const ModalPrepare = ({ taxi, onClose }) => {
  const renderChairs = () => {
    const chairs = [];
    const numPassengers = taxi.passengers || 0; // Assuming numPassengers is a property in the taxi object
    const layout = [
      [1,2],        // First line
      [3],  // Second line
      [4,5,6]      // Third line
    ];
    for (let row of layout) {
      const rowChairs = row.map(chairNumber => {
        // Determine the color of the chair based on the number of passengers
        const chairColor = chairNumber <= numPassengers ? "#00CD5E" : 'gray';
        return (
          <FontAwesome5
            key={chairNumber}
            name="chair"
            size={40}
            color={chairColor}
            style={styles.chairIcon}
          />
        );
      });

      chairs.push(
        <View key={row.join('-')} style={styles.rowContainer}>
          {rowChairs}
        </View>
      );
    }
    return (   
      chairs
    );

}
  return (
   <>
   <View style={styles.back} onTouchStart={onClose}>    
   </View>
  <View style={styles.containerModal}>
     <View style={styles.prepareModal}>
      <View style={styles.line}></View>
      <Text style={styles.label}>رقم الطاكسي</Text>
      <TextInput   keyboardType="numeric" value={taxi.taxi_number.toString()} style={styles.modalInput} textAlign="right"/>
      <Text style={styles.label}>الوجة</Text>
      <TextInput value={taxi.to} style={styles.modalInput} textAlign="right"/>
      <View style={styles.body}>
        <View style={styles.car}>
          <Image source={img} style={styles.img}/>
          <View style={styles.containerss}>{renderChairs()}</View>
        </View>
        <View style={styles.addRemove}>
          <Pressable style={styles.add}>
            <Ionicons name="person-add-sharp" color="white" size={40}/>
          </Pressable>
          <Pressable style={styles.remove} >
          <Ionicons name="person-remove-sharp" color="white" size={40}/>
          </Pressable>
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable style={styles.delete} >
          <Text style={styles.textDelete}>حدف</Text>
        </Pressable>
      </View>
      
    </View>
  </View>
   </>
  );
};
export default ModalPrepare;

const styles = StyleSheet.create({
  textDelete:{
    fontSize:16,
    fontFamily: "Cairo800",  
    marginBottom:5,
    color:"white"
  },
  deleteContainer:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:50
  },
  delete:{
    width:300,
    height:44,
    backgroundColor:"#FF7755",
    borderRadius:8,
    justifyContent:"center",
    alignItems:"center"
  },
  addRemove:{
    marginTop:70
  },
  car:{
  },
  chairIcon: {
    marginTop:20,
    marginRight: 5, // Adjust spacing between chairs if needed
  },
  containerss: {
    flexDirection: 'column',
    width:100,
    height:190,
    flexDirection: 'row',
    alignItems:"flex-end",
    marginTop:-230,
    marginLeft:30,
    zIndex: 1,
  },
  body:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20

  },
  add:{
    width:120,
    height:66,
    backgroundColor:COLORS.green,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  remove:{
    marginTop:5,
    width:120,
    height:66,
    backgroundColor:"#E9C432",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  back:{
    position:"absolute",
    flex:1,
    width:"100%",
    height:"100%",
    backgroundColor:'rgba(0,0,0,0.5)',
    top:0,
    left:0
  },
  containerModal:{
    height:590,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    backgroundColor: 'white', 
  },
  prepareModal:{ 
    padding: 16 
  },
  line:{
    height:4,
    marginHorizontal:100,
    backgroundColor:COLORS.dark,
    borderRadius:20,
  },
  modalInput:{
    fontFamily: "Cairo600",  
    borderColor:"black",
    height:47,
    borderWidth: 1,
    borderColor: "#1c1c1c",
    borderRadius:8,
    padding:10
  },
  label:{
    marginTop:20,
    fontSize:12,
    fontFamily: "Cairo800",  
    marginBottom:5
  },
  img:{
    width:182,
    height:278
  }
  });