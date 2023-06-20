import { View, StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native"
import { useState } from "react"
import { defaultStyles, inputOnFocusStyles } from "../DefaultStyles/DefaultStyles"



export const RegistrationScreen =()=>{
  const [isFocusInput, setIsFocusInput]=useState(defaultStyles.input)



  return(
    
    <View style={styles.wrapper}>
      <KeyboardAvoidingView
 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
 keyboardVerticalOffset={-97}
 >
     


      <View style={styles.formRegistration}>
<View style={styles.addPhoto}>

<TouchableOpacity style={styles.btnAddPhoto} activeOpacity={0.8}>
                <Image
                  source={require("../assets/add.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>

</View>
<Text style={styles.title}>Реєстрація</Text>

  <TextInput style={{...styles.input, isFocusInput}} 
  onFocus={()=>{setIsFocusInput(inputOnFocusStyles)}}
  placeholder="Логін"/>

  <TextInput style={styles.input} 
  onFocus={()=>{setIsFocusInput(true)}}
  placeholder="Адреса електронної пошти"/>

  <TextInput style={styles.input} 
  onFocus={()=>{setIsFocusInput(true)}}
  placeholder="Пароль"/>
  

 <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
<Text style={styles.btnTitle}>Зареєстуватися</Text>
  </TouchableOpacity>
<Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
</View>
</KeyboardAvoidingView>
    </View>
  )
}
const styles= StyleSheet.create({
  wrapper:{
      flex:1, 
      justifyContent: 'flex-end',
  },
  addPhoto: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  formRegistration:{
    
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 66,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  
  input:{
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 50,
    marginHorizontal: 16,
    borderStyle: 'solid',
   
    borderRadius: 8,
    padding: 16,
    color: '#BDBDBD',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    lineHeight: 19,
    marginBottom: 16,
    
    
},
  title: {
    
    marginHorizontal: 'auto',
    fontFamily:'Roboto-Medium',
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    color: '#212121',
    textAlign: 'center',
    marginBottom: 33,
  },
  btn:{
    height: 51,
    backgroundColor:'#FF6C00',
    marginHorizontal: 16,
    borderRadius: 100,
    alignItems: 'center',
    
    paddingTop:16,
    paddingBottom: 16,
    marginBottom: 16,

  },
  btnTitle:{
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    lineHeight: 18.75,
   

  },
  textLogin:{
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    lineHeight: 18.75,
    textAlign: 'center',
  },
  btnAddPhoto:{
    position: "absolute",
    bottom: 14,
    right: -12.5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
  }
  
})