import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from './src/store';
import AppModal from "./src/components/AppModal"
import {Ionicons} from '@expo/vector-icons'
import getFonts from './src/helpers/fonts';
import { openModal } from './src/store/reducer/ui/ModalSlice';
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from 'react';
import MainTabScreen from './MainTabScreen';
import Login from './src/screens/auth/Login'



const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:"absolut",
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:60,
    background:"#fff"
  }
}

const Stack = createStackNavigator();



export default function App() {
  const [logged, setLogged] = useState(false);
  const fonts = getFonts();

  if (!fonts) {
    return <Text> loading .. </Text>;
  }

  return (
    <Provider store={store}>
    <AppModal />
    
    <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
    {logged ? (
      <Stack.Screen name="MainTabScreen" component={MainTabScreen}        
      />
      
      
      ) : (
        <Stack.Screen name="Login" component={Login}  />
      )}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
