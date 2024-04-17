import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import MainTabScreen from "./MainTabScreen";
import { Login,Station } from "../screens/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/reducer/userSlice";
import Register from "../screens/auth/Register"
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
      console.log(user)
    }
    }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      {isLogged ? (
        user.is_station_setup === 1 ? (
          <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
        ) : (
          <Stack.Screen name="Station" component={Station} />
        )
      ) : (<>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} /></>
      )}
      
    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default RootNavigation;
