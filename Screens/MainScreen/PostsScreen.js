import React from "react";
import {  TouchableOpacity} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { Feather } from '@expo/vector-icons'; 
import DefaultScreenPosts from "../OtherScreens/DefaultScreenPosts";
import CommentsScreen from "../OtherScreens/CommentsScreen";
import MapScreen from "../OtherScreens/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen=({navigation})=>{
return (<NestedScreen.Navigator>
  <NestedScreen.Screen 
  name="DefaultScreen" 
  component={DefaultScreenPosts}
  options={{
    headerTitle: "Публікації",
    headerTitleAlign: "center",
    headerLeft: false,
    tabBarShowLabel: false,
        // tabBarIcon: ({focused, color, size})=>
        //   <Feather name="grid" size={size} color={color} />,
          headerRight: ()=>

            (<TouchableOpacity
            style={{position: "absolute", bottom: 10, right: 10}}
            onPress={() => navigation.navigate("Login")}>
           
            <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>)
    
  }}
  />
  <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen}/>
  <NestedScreen.Screen name="MapScreen" component={MapScreen}/>
</NestedScreen.Navigator>)
}
export default PostsScreen;