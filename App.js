import React from 'react';
import { Provider } from 'react-redux';
// import { store } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useCallback } from 'react';
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet,  View, Text} from 'react-native';
import  RegistrationScreen  from './Screens/AuthScreens/RegistrationScreen';
import * as SplashScreen from 'expo-splash-screen';
// import {Router} from './Router'
// import { store, persistor } from './Redux/store';
import  LoginScreen from './Screens/AuthScreens/LoginScreen';
import CommentsScreen from './Screens/OtherScreens/CommentsScreen'
import CreatePostsScreen from './Screens/MainScreen/CreatePostsScreen';
import Home from './/Screens/MainScreen/Home'
import MapScreen from './Screens/OtherScreens/MapScreen'
import Main from './Components/Main';
// import PostsScreen from './Screens/PostsScreen'
// import ProfileScreen from './Screens/ProfileScreen'
// import Main from './Components/Main';



SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require("./assets/fonts/Roboto-Medium.ttf"),
    'Roboto-Regular': require("./assets/fonts/Roboto-Regular.ttf"),
    'Roboto-Bold': require("./assets/fonts/Roboto-Bold.ttf"),
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
     
    {/* <NavigationContainer> */}
    <View style={styles.container} onLayout={onLayoutRootView}>
       <Main />
       <StatusBar style="auto" />
       </View>
      {/* </NavigationContainer> */}
      </PersistGate>
    </Provider>
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
