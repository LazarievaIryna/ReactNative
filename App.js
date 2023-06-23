import React from 'react';
import { useCallback } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet,  View, } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import * as SplashScreen from 'expo-splash-screen';
import { LoginScreen } from './Screens/LoginScreen';



SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require("./assets/fonts/Roboto-Medium.ttf"),
    'Roboto-Regular': require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // const MainStack = createStackNavigator();
  

  return (
    <>
    {/* <NavigationContainer> */}
    <View style={styles.container} onLayout={onLayoutRootView}>
    {/* <MainStack.Navigator> */}


   
      <RegistrationScreen/>
      {/* <LoginScreen/> */}
      

      
     {/* </MainStack.Navigator> */}
     <StatusBar style="auto" />
    </View>
    {/* </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // position:'relative'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center'
  }
});
