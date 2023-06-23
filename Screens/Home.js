import { View, Text} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();
 const Home=()=>{
    return(
        <Tab.Navigator>
        <Tab.Screen options={{headerShown: false}} name="Posts" component={PostsScreen} />
      <Tab.Screen options={{headerShown: false}} name="Create" component={CreatePostsScreen} />
      <Tab.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    )
}
export default Home;