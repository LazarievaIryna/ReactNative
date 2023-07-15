import React from "react";
import {  TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";

import { createStackNavigator } from "@react-navigation/stack";

import { Feather } from '@expo/vector-icons'; 
import DefaultScreenPosts from "../OtherScreens/DefaultScreenPosts";
import CommentsScreen from "../OtherScreens/CommentsScreen";
import MapScreen from "../OtherScreens/MapScreen";
import { authSignOutUser } from "../../Redux/auth/authOperations";

const NestedScreen = createStackNavigator();

const PostsScreen=({navigation})=>{
  const dispath = useDispatch();
return (<NestedScreen.Navigator>
  <NestedScreen.Screen 
  name="DefaultScreen" 
  component={DefaultScreenPosts}
  options={{
    headerTitle: "Публікації",
    headerTitleAlign: "center",
    headerLeft: false,
    tabBarShowLabel: false,
          headerRight: ()=>

            (<TouchableOpacity
            style={{position: "absolute", bottom: 10, right: 10}}
            onPress={() => dispath(authSignOutUser())}>
           
            <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>)
    
  }}
  />
  <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen}/>
  <NestedScreen.Screen name="MapScreen" component={MapScreen}
  options={{
    // cardStyle: {display: 'none'}
  }}
  />
</NestedScreen.Navigator>)
}
export default PostsScreen;