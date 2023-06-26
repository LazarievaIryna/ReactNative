import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback} from "react-native"
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'; 
import { KeyboardAvoidingView } from "react-native";


 const CreatePostsScreen=()=>{
const [camera, setCamera]=useState(null)
const [photo, setPhoto]=useState('')
const [loadCamera, setLoadCamera] = useState(false);
const [isShowKeyboard, setIsShowKeyboard] = useState(false);


const takePhoto=async()=>{
const photo = await camera.takePictureAsync()
setLoadCamera(true);
setPhoto(photo.uri)
setLoadCamera(false);

}

const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };


    return(
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View
        style={{ ...styles.container, marginTop: isShowKeyboard ? -60 : 0 }}
      >
        <View style={styles.cameraWrapper}>
          {photo ? (
            <View style={styles.containerPhoto}>
              <Image style={styles.photo} source={{ uri: photo }} />
              <View style={styles.icon}>
                <FontAwesome
                  name="camera"
                  size={24}
                  color={photo ? "#FFFFFF" : "#BDBDBD"}
                />
              </View>
            </View>
          ) : (
            <Camera style={styles.camera} ref={setCamera}>
              {loadCamera ? (
                <ActivityIndicator size="large" color="#FF6C00" />
              ) : (
                <TouchableOpacity onPress={takePhoto} style={styles.btnCamera}>
                  <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              )}
            </Camera>
          )}
        </View>
      </View>
        </TouchableWithoutFeedback>
       
    
      
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        paddingBottom: 32,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#FFFFFF",
      },
      cameraWrapper: {
        width: "100%",
        borderRadius: 8,
        marginBottom: 8,
        overflow: "hidden",
      },
      containerPhoto: {
        width: "100%",
        height: 240,
        alignItems: "center",
        justifyContent: "center",
      },
      photo: {
        width: "100%",
        height: 240,
        borderRadius: 8,
      },
      icon: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3);",
      },
      camera: {
        height: 240,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
      },
      btnCamera: {
        backgroundColor: "rgba(255, 255, 255, 0.3);",
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
      },
})
export default CreatePostsScreen;
