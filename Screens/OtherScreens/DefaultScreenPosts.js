import React, { useState, useEffect } from "react";
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";

  const DefaultScreenPosts = ({route})=>{
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        if(route.params){
            setPosts((prevState)=>[...prevState, route.params]);
        }
    },[route.params]);
    console.log(route.params)
    const navigation = useNavigation();
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
                return(<>
                <View style={styles.post}>
                  <View style={styles.postPhoto}>
                    <Image source={{ uri: item.photo }} style={styles.photo} />
                  </View>
                  <Text style={styles.postTitle}>{item.place}</Text>

                  <View style={styles.postDescription}>
                  <TouchableOpacity
                  activeOpacity={0.8} 
                  style={{marginRight: 49, flexDirection:"row", alignItems:'center'}}
                  onPress={()=>navigation.navigate('Coments')}
                  >
                    <View>
                  <Feather name="message-circle" size={24} color="#BDBDBD" />
                  </View>
                  <Text style={styles.postToolLabel}>
                        {item.comments ? item.comments : 0}
                      </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  activeOpacity={0.8} 
                style={{
                  
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("MapScreen", 
                {
                  locationLatitude: item.currentLocation.latitude,
                  locationLongitude: item.currentLocation.longitude,
                  locationName: item.place
                })}
              >
                <SimpleLineIcons
                  name="location-pin"
                  size={24}
                  color={'#BDBDBD'}
                />
                <Text style={styles.location}>{item.location}</Text>
              </TouchableOpacity>
                  </View>
                </View>
                
                
                </>
                
                
                )
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
      },
      postTitle:{
        marginTop: 8,
        marginBottom: 4,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 19,
        color: 'rgba(33, 33, 33, 1)',
        
      },
      postToolLabel: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#BDBDBD",
        marginLeft: 6,
      },
      postDescription:{
        flexDirection: 'row',
      },
      location:{
        textDecorationLine:'underline',
        marginLeft: 4,
      }
    })
  export default DefaultScreenPosts;
