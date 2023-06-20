import React from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet,  View, ImageBackground, Text} from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import * as SplashScreen from 'expo-splash-screen';

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

  

  return (
    <>
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground 
      source={require("./assets/image_bg.jpg")} 
      style={styles.image}>
{/* <Text>Open up App.js to start working on your app!</Text> */}
{/* <RegistrationScreen/> */}
<RegistrationScreen/>
      </ImageBackground>
      
      
      <StatusBar style="auto" />
    </View>
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
