import { View, TouchableOpacity, StyleSheet} from "react-native";
import { Feather, AntDesign } from '@expo/vector-icons'; 
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
        {
          headerShown: false,
        // tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size})=>
          <Feather name="grid" size={size} color={'rgba(33, 33, 33, 0.8)'} />,

          // headerRight: ()=>

          //   (<TouchableOpacity
          //   style={{position: "absolute", bottom: 10, right: 10}}
          //   onPress={() => navigation.navigate("Login")}>
           
          //   <Feather name="log-out" size={24} color="#BDBDBD" />
          //   </TouchableOpacity>)
          
        
        }

      } 
      name="Posts" 
      component={PostsScreen} />

    <Tab.Screen 
    options={{
      title: 'Створити публікацію',
      headerLeft: () => (
        <View style={styles.arrow}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="rgba(33, 33, 33, 0.8)"
            onPress={() => navigation.navigate("DefaultScreen")}
          />
        </View>),
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
          <Feather name="plus" size={size} color='#fff' 
          onPress={() => navigation.navigate("Create")}/>
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
const styles= StyleSheet.create({
  arrow:{
    marginLeft: 16,
    top: 5,
  }
})
export default Home;