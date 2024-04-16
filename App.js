import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import { useState } from 'react';
import Login from './src/screens/auth/Login';
import MainTabScreen from './MainTabScreen';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import setupStation from './src/screens/auth/setupStation';
=======



>>>>>>> origin/dev

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



<<<<<<< HEAD
/*export default function App() {
  const [logged, setLogged] = useState(true);
=======
export default function App() {
>>>>>>> origin/dev
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
*/

export default function App() {
  const [logged, setLogged] = useState(false); // Mettez cette valeur à false pour tester SetupStation
  const [isSetupComplete, setIsSetupComplete] = useState(false); // Vous pouvez utiliser cet état pour vérifier si la configuration est terminée
  const fonts = getFonts();

  if (!fonts) {
    return <Text> Loading... </Text>;
  }

  return (
    <Provider store={store}>
      <AppModal />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            {logged ? (
              // Si l'utilisateur est connecté, montrez l'écran principal
              <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
            ) : !isSetupComplete ? (
              // Si l'utilisateur n'est pas connecté et que la configuration n'est pas terminée, montrez setupStation
              <Stack.Screen name="SetupStation" component={setupStation} />
            ) : (
              // Si l'utilisateur n'est pas connecté mais que la configuration est terminée, montrez l'écran de connexion
              <Stack.Screen name="Login" component={Login} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}