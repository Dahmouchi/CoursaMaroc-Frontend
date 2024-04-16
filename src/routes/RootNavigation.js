import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import MainTabScreen from "./MainTabScreen";
import { Login,Station } from "../screens/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/reducer/userSlice";

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

const RootNavigation = () => {
    const dispatch = useDispatch();
    const {user, token, isLogged} = useSelector(state => state.user);

    useEffect(() => {
    // get user
    if (token) {
      dispatch(getUser());
    }
    }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
    {isLogged ? (
      <Stack.Screen name="MainTabScreen" component={MainTabScreen}        
      />
      ) : (
        <Stack.Screen name="Login" component={Station}  />
      )}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default RootNavigation;
