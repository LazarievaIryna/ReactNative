import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator, Keyboard} from "react-native"
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'; 
import { KeyboardAvoidingView } from "react-native";


 const CreatePostsScreen=()=>{
const [camera, setCamera]=useState(null)
const [photo, setPhoto]=useState('')
// const [loadCamera, setLoadCamera] = useState(false);
const [isShowKeyboard, setIsShowKeyboard] = useState(false);
const [hasPermission, setHasPermission] = useState(null);
const [type, setType] = useState(Camera.Constants.Type.back);

useEffect(() => {
  (async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  })();
}, []);

if (hasPermission === null) {
  return <View />;
}
if (hasPermission === false) {
  return <Text>No access to camera</Text>;
}

const takePhoto=async()=>{
  let { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
const photo = await camera.takePictureAsync()
// setLoadCamera(true);
setPhoto(photo.uri)
// setLoadCamera(false);

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
      
})
export default CreatePostsScreen;
