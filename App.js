import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useSelector } from "react-redux";
import store from "./src/store";
import { Home, Settings } from "./src/screens/Index";
import AddIcon from "./src/components/AddIcon";
import AppModal from "./src/components/AppModal";
import { Ionicons } from "@expo/vector-icons";
import getFonts from "./src/helpers/fonts";
import { openModal } from "./src/store/reducer/ui/ModalSlice";
import { COLORS } from "./src/helpers/constants";
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import Login from './src/screens/auth/Login';
import MainTabScreen from './MainTabScreen';
import { GestureHandlerRootView} from 'react-native-gesture-handler'



const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  //hide tab bar
  tabBarVisible: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  },
};

const Stack = createStackNavigator();
=======
import { Provider } from "react-redux";
import store from "./src/store";
import AppModal from "./src/components/AppModal";
import getFonts from "./src/helpers/fonts";
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import RootNavigation from './src/routes/RootNavigation';
>>>>>>> c4002dfc1f30ff8102b85e9e10a01996861f9820


export default function App() {
  const fonts = getFonts();
<<<<<<< HEAD
  useEffect(()=>{
    if(!logged){
      const dam = store.getState().user.token
      console.log(dam);
      if(dam)
      {
        setLogged(true);
      }
    }
  },[store.getState().user.token])
  
  
  
  
  
=======
>>>>>>> c4002dfc1f30ff8102b85e9e10a01996861f9820


  if (!fonts ) {
    return <Text> loading .. </Text>;
    
  }

  return (
    <Provider store={store}>
    <AppModal />
    <GestureHandlerRootView style={{ flex: 1 }}>
<<<<<<< HEAD
    
    <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
    {logged  && store.getState().user.token ? (
      <Stack.Screen name="MainTabScreen" component={MainTabScreen}        
      />
      
      
      ) : (
        <Stack.Screen name="Login" component={Login}  />
      )}
      </Stack.Navigator>
    </NavigationContainer>
=======
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigation />
      </SafeAreaView>
>>>>>>> c4002dfc1f30ff8102b85e9e10a01996861f9820
    </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
