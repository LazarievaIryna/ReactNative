import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Screens/MainScreen/Home';
import MapScreen from './Screens/OtherScreens/MapScreen'
import CommentsScreen from './Screens/OtherScreens/CommentsScreen'
import RegistrationScreen from './Screens/AuthScreens/RegistrationScreen'
import LoginScreen from './Screens/AuthScreens/LoginScreen'


const MainStack = createStackNavigator();
export const useRoute=(isAuth)=>{
    if(!isAuth){
        return(
            <MainStack.Navigator initialRouteName="Registration">

      <MainStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen} />
        <MainStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        
     </MainStack.Navigator>
        )
    }
    return(
        <Home/>
    
    )
}
