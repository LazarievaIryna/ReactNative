import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator, Keyboard} from "react-native"
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, MaterialCommunityIcons, Feather} from '@expo/vector-icons'; 
import * as Location from 'expo-location';
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";


 const CreatePostsScreen=()=>{
const [camera, setCamera]=useState(null)
const [photo, setPhoto]=useState('')
// const [loadCamera, setLoadCamera] = useState(false);
const [isShowKeyboard, setIsShowKeyboard] = useState(false);
const [hasPermission, setHasPermission] = useState(null);
const [type, setType] = useState(Camera.Constants.Type.back);
const [location, setLocation] = useState(null);

useEffect(() => {
  (async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  })();
}, []);


useEffect(() => {
  (async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    
  })();
}, []);
if (hasPermission === null) {
  return <View />;
}
if (hasPermission === false) {
  return <Text>No access to camera</Text>;
}

const takePhoto=async()=>{
  // let { status } = await Camera.requestCameraPermissionsAsync();
  //   if (status !== "granted") {
  //     console.log("Permission to access location was denied");
  //     return;
  //   }
const photo = await camera.takePictureAsync()
// setLoadCamera(true);
setPhoto(photo.uri)
// setLoadCamera(false);
let location = await Location.getCurrentPositionAsync({});
    // setLocation(location);
    console.log(location)
}



const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  


    return(
      <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <Camera style={styles.camera} type={type} ref={setCamera}>
            <View style={styles.photoWrapper}>
              {photo && (
                <View style={styles.takenPhotoContainer}>
                  <Image
                    source={{ uri: photo }}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </View>
              )}
              {!photo && (
                <TouchableOpacity
                  style={styles.takePhotoBtn}
                  onPress={() => {
                    takePhoto(camera);
                  }}
                >
                  <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              )}
              {!photo && (
                <TouchableOpacity
                  style={styles.flipBtn}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              )}
            </View>
          </Camera>
        </View>
        {photo ? (
          <TouchableOpacity
            style={styles.editPhotoBtn}
            onPress={() => {
              setPhoto(null), setPhoto(null);
            }}
          >
            <Text style={styles.editPhotoBtnText}>Редагувати фото</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editPhotoBtn}
            onPress={() => {
             
            }}
          >
            <Text style={styles.editPhotoBtnText}>Завантажте фото</Text>
          </TouchableOpacity>
        )}
    <View style={styles.formContainer}>
        <View style={styles.form}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <TextInput
                style={{...styles.input, marginBottom: 16}}
                placeholder="Назва...">

                </TextInput>

              <View>
                <TextInput
                style={{...styles.input, paddingLeft: 28}}
                placeholder="Місцевість...">

                </TextInput>
                <View style={styles.inputIcon}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                </View>
                </View>
                
              <TouchableOpacity 
style={styles.btn} 
  activeOpacity={0.8} 
  // onPress={()=>{
  //   handleSubmit()
  //   navigation.navigate("Home")
  // }}>
  >
<Text style={styles.btnTitle}>Опубліковати</Text>

  </TouchableOpacity>


            </KeyboardAvoidingView>
    </View>
        </View>



        </View>
      </TouchableWithoutFeedback >

       
    
      
    )
}
const styles= StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 32,
      backgroundColor: "white",
      height: "100%",
      },
      photoWrapper: {
        flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
      },
      takenPhotoContainer: {
        position: "absolute",
        resizeMode: "cover",
        top: 0,
        left: 0,
        height: 240,
        width: "100%",
      },
     
   
      camera: {
        position: "relative",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
      },
      takePhotoBtn: {
        height: 60,
        width: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      },
      flipBtn: {
        position: "absolute",
        bottom: 20,
        right: 20,
      },
      editPhotoBtn: {
        alignSelf: "flex-start",
        marginTop: 8,
      },
    
      editPhotoBtnText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#BDBDBD",
      },
      formContainer:{

      },
      form:{
        marginTop: 32,
      },
      input:{
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        color: '#212121',
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        lineHeight: 19,
        paddingBottom: 15,
      },
      btn:{
        height: 51,
        backgroundColor:'#FF6C00',
    
        borderRadius: 100,
        alignItems: 'center',
        
        paddingTop:16,
        paddingBottom: 16,
        marginBottom: 16,
        marginTop: 32,
     
    
      },
      btnTitle:{
        color: '#FFFFFF',
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        lineHeight: 19,
       
    
      },
      inputIcon:{
        position:'absolute',
        // marginRight: 4,
        // height: 27,
        top: 4,
      }
      
})
export default CreatePostsScreen;
