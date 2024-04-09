import {
    useFonts,
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_500Medium,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_800ExtraBold,
    Cairo_900Black,
  } from "@expo-google-fonts/cairo";
  
  import {
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  } from "@expo-google-fonts/poppins";
  
  
  const getFonts = () => {
    let [fontsLoaded] = useFonts({
      Cairo: Cairo_400Regular,
      Cairo200: Cairo_200ExtraLight,
      Cairo300: Cairo_300Light,
      Cairo500: Cairo_500Medium,
      Cairo600: Cairo_600SemiBold,
      Cairo700: Cairo_700Bold,
      Cairo800: Cairo_800ExtraBold,
      Cairo900: Cairo_900Black,
      Poppins: Poppins_400Regular,
      Poppins200: Poppins_200ExtraLight,
      Poppins300: Poppins_300Light,
      Poppins500: Poppins_500Medium,
      Poppins600: Poppins_600SemiBold,
      Poppins700: Poppins_700Bold,
      Poppins800: Poppins_800ExtraBold,
      Poppins900: Poppins_900Black,
    });
  
    return fontsLoaded ? fontsLoaded : false;
  };
  
  export default getFonts;
  