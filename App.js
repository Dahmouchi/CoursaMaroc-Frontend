import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';




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
import { Provider } from "react-redux";
import store from "./src/store";
import AppModal from "./src/components/AppModal";
import getFonts from "./src/helpers/fonts";
import { useEffect, useState } from 'react';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import RootNavigation from './src/routes/RootNavigation';



export default function App() {
  const fonts = getFonts();
  const [logged, setLogged] = useState(false);
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
  
  
  
  
  


  if (!fonts ) {
    return <Text> loading .. </Text>;
    
  }

  return (
    <Provider store={store}>
    <AppModal />
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigation />
      </SafeAreaView>
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
