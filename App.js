import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { Provider } from "react-redux";
import store from "./src/store";
import AppModal from "./src/components/AppModal";
import getFonts from "./src/helpers/fonts";
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import RootNavigation from './src/routes/RootNavigation';



export default function App() {
  const fonts = getFonts();


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
