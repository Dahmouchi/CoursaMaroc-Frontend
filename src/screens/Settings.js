import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../helpers/constants'
import { Ionicons,FontAwesome5  } from '@expo/vector-icons'; // or 'react-native-vector-icons'
import axiosInstance from '../Axios';
import Loading from '../components/Loading';
const Settings = () => {
  const [user,setUser]= useState(null)
  useEffect(()=>{
    axiosInstance.get("/user")
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  },[])
  if(!user)
  return <Loading />
  return (
  <ImageBackground
    source={require('../../assets/bg.jpg')} // Replace 'your-background-image.jpg' with your image file path
    style={styles.background}
    resizeMode="cover"
    blurRadius={4}
  >
      <View style={styles.Settings}>
        <View style={styles.title}>
          <Text style={styles.texts}>إعدادات</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/vector.jpg')} // Replace 'your-background-image.jpg' with your image file path
            style={styles.avatar}
            resizeMode="cover"
            />
        </View>
        <View style={styles.nameC}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.name}>{user.phone}</Text>

        </View>
        <View style={styles.items}>
          <View style={styles.info}> 
            <View style={styles.aa}>
              <View>
                <Text style={styles.textInfo}>المعلموت الشخصية</Text>
              </View>
              <View>
                <Ionicons name="person-circle-outline" size={40}/>
              </View>  
            </View>
          </View>
          <View style={styles.info2}> 
            <View style={styles.aa}>
              <View>
                <Text style={styles.textInfo}>مساعدة </Text>
              </View>
              <View>
                <Ionicons name="alert-circle-outline" size={30}/>
              </View>  
            </View>  
            <View style={styles.line}></View>
    
            <View style={styles.aa}>
              <View>
                <Text style={styles.textInfo}>الإشعارات </Text>
              </View>
              <View>
                <Ionicons name="notifications" size={30}/>
              </View>  
            </View>
            <View style={styles.line}></View>        
              <View style={styles.aa}>
                <View>
                  <Text style={styles.textInfo}>تواصل معنا </Text>
                </View>
                <View>
                  <Ionicons name="call-outline" size={30}/>
                </View>  
              </View>
              <View style={styles.line}></View>
    
            <View style={styles.aa}>
              <View>
                <Text style={styles.textInfo}>المحطة </Text>
              </View>
              <View>
                <Ionicons name="car" size={30}/>
              </View>  
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Settings

const styles = StyleSheet.create({ 
  line:{
    width:"100%",
    height:1,
    backgroundColor:"gray",
    marginVertical:10
  },
  info2:{
    marginTop:30,
    paddingVertical:10,
    backgroundColor:COLORS.bg,
    width:350,
    height:"auto",
    borderRadius:20,
    alignItems:"flex-end",
    }, 
  textInfo:{
    fontSize:14,
    fontFamily: "Cairo800",  
    marginRight:10
  },
  name:{
    fontSize:16,
    fontFamily: "Cairo800",  
    color:"white"
  },
  nameC:{
    justifyContent:"center",
    alignItems:"center"
  },
  items:{
    marginTop:30,
    alignItems:"center"
  },
  aa:{
    flexDirection:"row",
    alignItems:"center",
    marginRight:10,
  },
  info:{  
    backgroundColor:COLORS.bg,
    width:350,
    height:50,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"flex-end",
    },
  avatarContainer:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    
  },
  avatar:{
    backgroundColor:"green",
    width:200,
    height:200,
    borderRadius:100,
    borderWidth:0.2,
    borderColor:"gray"
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    // Additional styles for the background image
  },
  Settings:{

  },
  title:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:60,
  },
  texts:{
    fontSize:20,
    fontFamily: "Cairo800",  
  }
})