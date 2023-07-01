import { View, StyleSheet} from "react-native";
import { Feather, AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from "./PostsScreen";
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
        
       }
      }}>
      <Tab.Screen 
      options={
        {
          headerShown: false,
        
        tabBarIcon: ({focused})=>
          (
            <View 
            style={{...styles.iconWrapper, backgroundColor: focused? "#FF6C00": "#FFFFFF",}}>
              <Feather name="grid" size={24} color={focused? "#fff": 'rgba(33, 33, 33, 0.8)'} />
            </View>
          )

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
        tabBarShowLabel: false,
        tabBarStyle: { display: "none" },
      tabBarIcon: ({focused, size})=>(
        <View style={{...styles.iconWrapper, backgroundColor: focused? "#FF6C00": "#FFFFFF",          

        }}>
          <Feather name="plus" size={size} color={focused? "#fff": 'rgba(33, 33, 33, 0.8)'} 
          onPress={() => navigation.navigate("Create")}/>
        </View>
      )
      }} 
    name="Create"
     component={CreatePostsScreen} />

    <Tab.Screen 
    options={{
      tabBarIcon: ({focused, size})=>(
        <View style={{...styles.iconWrapper, backgroundColor: focused? "#FF6C00": "#FFFFFF",          

      }}>
          <Feather name="user" size={size} color={focused? "#fff": 'rgba(33, 33, 33, 0.8)'} />
        </View>
      )
    } }
    name="Profile" 
    component={ProfileScreen} />
    </Tab.Navigator>
    )
}
const styles= StyleSheet.create({
  arrow:{
    marginLeft: 16,
    top: 5,
  },
  iconWrapper: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
})
export default Home;