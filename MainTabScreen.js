import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings } from './src/screens/Index';
import AddIcon from './src/components/AddIcon';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import store from './src/store';
import { openModal } from './src/store/reducer/ui/ModalSlice';




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

const MainTabScreen = () =>(
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon:({focused})=>{
              return(
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Ionicons name='home' size={24} color={focused ? "#00CD5E" : "#000"}/>
                  <Text style={{fontSize:12, color: focused ? "#00CD5E" : "#000"}}>Home</Text>
                </View>
              )
            }
          }}

        />
        <Tab.Screen
            name="AddIcon"
            component={AddIcon}
            listeners={({ navigation }) => ({
              tabPress: (event) => {
                event.preventDefault();
                store.dispatch(openModal({ componentName: "AddTaxi" }));
              },
            })}
            options={{
              tabBarIcon: ({ focused }) => <AddIcon focused={focused} />,
            }}
          />
        <Tab.Screen
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon:({focused})=>{
              return(
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Ionicons name='settings' size={24} color={focused ? "#00CD5E" : "#000"}/>
                  <Text style={{fontSize:12, color: focused ? "#00CD5E" : "#000"}}>Home</Text>
                </View>
              )
            }
          }}
        />

      </Tab.Navigator>

)

export default MainTabScreen;
