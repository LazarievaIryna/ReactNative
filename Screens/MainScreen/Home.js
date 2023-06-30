import { View, TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons'; 
// import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from "./PostsScreen";
import DefaultScreenPosts from "../OtherScreens/DefaultScreenPosts";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();
 const Home=({navigation})=>{
    return(
      <Tab.Navigator screenOptions={{
       
       tabBarShowLabel: false,
       headerTitleAlign: "center",
       headerTitleStyle: {
         fontFamily: "Roboto-Medium",
         fontSize: 17,
         lineHeight: 22,
         color: '#212121',
         top: 4,
        
       },
       tabBarStyle: {
        height: 58,
        // padding:0,
        
       }
      }}>
      <Tab.Screen 
      options={
        {title: 'Публікації',
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size})=>
          <Feather name="grid" size={size} color={color} />,
          headerRight: ()=>

            (<TouchableOpacity
            style={{position: "absolute", bottom: 10, right: 10}}
            onPress={() => navigation.navigate("Login")}>
           
            <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>)
          
        
        }

      } 
      name="Posts" 
      component={DefaultScreenPosts} />

    <Tab.Screen 
    options={{
      title: 'Створити публікацію',
      // headerShown: false,
      tabBarIcon: ({focused, color, size})=>(
        <View style={{
          width: 70,
          height: 40,
          backgroundColor: "#FF6C00",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Feather name="plus" size={size} color='#fff' />
        </View>
      )
      }} 
    name="Create"
     component={CreatePostsScreen} />

    <Tab.Screen 
    options={{
      tabBarIcon: ({focused, color, size})=>
    <Feather name="user" size={size} color={color} />} }
    name="Profile" 
    component={ProfileScreen} />
    </Tab.Navigator>
    )
}
export default Home;