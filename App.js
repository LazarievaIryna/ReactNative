import React from 'react';
import { useCallback } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet,  View, } from 'react-native';
import  RegistrationScreen  from './Screens/AuthScreens/RegistrationScreen';
import * as SplashScreen from 'expo-splash-screen';
import  LoginScreen from './Screens/AuthScreens/LoginScreen';
import CommentsScreen from './Screens/OtherScreens/CommentsScreen'
import CreatePostsScreen from './Screens/MainScreen/CreatePostsScreen'
import Home from './/Screens/MainScreen/Home'
import MapScreen from './Screens/OtherScreens/MapScreen'
// import PostsScreen from './Screens/PostsScreen'
// import ProfileScreen from './Screens/ProfileScreen'
// import Main from './Components/Main';



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

  const AuthStack = createStackNavigator();
  

  return (
    
   
    <View style={styles.container} onLayout={onLayoutRootView}>
    {/* <Main/> */}
    <NavigationContainer>
        
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen name="Create post" component={CreatePostsScreen} />
          <AuthStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <AuthStack.Screen
            name="Coments"
            component={CommentsScreen}
            options={{}}
          />
          <AuthStack.Screen name="Map" component={MapScreen} options={{}} />
        </AuthStack.Navigator>
      </NavigationContainer>
     <StatusBar style="auto" />
    </View>
  
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
