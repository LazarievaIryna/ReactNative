import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import { useNavigation, useRoute } from "@react-navigation/native";
  const DefaultScreenPosts = ({route})=>{
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        if(route.params){
            setPosts((prevState)=>[...prevState, route.params]);
        }
    },[route.params]);
return(
    <View style={styles.container}>
        <View style={styles.userWrapper}>
            <View style={styles.avatar}>
                <Image source={require("../../assets/User.jpg")}
                        resizeMode="contain"/>
            </View>
            
            <View style={styles.avatarInfo}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userMail}>email@example.com</Text>
            </View>
            </View>
            <View style={styles.postWrapper}>
            <FlatList data={posts}
            keyExtractor={(item, indx)=> indx.toString()}
            renderItem={({item})=> {
                return(<View style={styles.post}>
                    <View style={styles.postPhoto}>
                    <Image source={{uri: item.photo}} style={styles.photo}/>
                    </View>
                </View>)
            }
            }/>
            </View>
            
            
        

    </View>
)
  }
  const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 32,
        backgroundColor: "white",
        height: "100%",
        // flexDirection: 'row',
      },
      userWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
      },
      avatar:{
        width:60,
        height: 60,
        marginRight: 8,
      },
      avatarInfo:{
        
      },
      userName:{
        color: '#212121',
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
      },
      userMail:{
        color: 'rgba(33, 33, 33, 0.8)',
        fontFamily: 'Roboto-Regular',
        fontSize: 11,
      },
      photo:{
        // height:240,
        width: "100%",
        height: "100%",
      },
      postWrapper:{
        marginBottom: 60,
        borderRadius: 8,
        overflow: "hidden",
      },
      post:{
        marginBottom: 32,
        borderRadius: 8,
      },
      postPhoto:{
        width: "100%",
        height: 240,
        backgroundColor: "#7a7a7a",
        borderRadius: 8,
        overflow: "hidden",
      }
    })
  export default DefaultScreenPosts;
