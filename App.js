import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./src/store";
import { Home, Settings } from "./src/screens/Index";
import AddIcon from "./src/components/AddIcon";
import AppModal from "./src/components/AppModal";
import { Ionicons } from "@expo/vector-icons";
import getFonts from "./src/helpers/fonts";
import { openModal } from "./src/store/reducer/ui/ModalSlice";
import { COLORS } from "./src/helpers/constants";
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Login from './src/screens/auth/Login';
import MainTabScreen from './MainTabScreen';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import setupStation from './src/screens/auth/setupStation';

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


/*export default function App() {
  const [logged, setLogged] = useState(true);
  const fonts = getFonts();

  if (!fonts) {
    return <Text> loading .. </Text>;
  }

  return (
    <Provider store={store}>
    <AppModal />
    <GestureHandlerRootView style={{ flex: 1 }}>
    
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