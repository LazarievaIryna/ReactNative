import { View, StyleSheet,ImageBackground, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Image, TouchableWithoutFeedback,Keyboard, Platform } from "react-native"
import { useState } from "react"
export const RegistrationScreen=()=>{
  const [isFocusInput, setIsFocusInput]=useState('')
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard]=useState(false);

const focusInput = (input)=>{
  setIsFocusInput(input)
}
const onLogin = () => {
  console.log(`Registration data: ${login}+ ${email}+ ${password}`);
};
const toggleShowPassword = () => {
  setIsShowPassword(!isShowPassword);
};

  return(
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>

<View style={styles.container}>

<ImageBackground
source={require("../assets/image_bg.jpg")} 
style={styles.image}>

  <View style={styles.wrapper}>
  {/* <View style={styles.addPhoto}>
<TouchableOpacity style={styles.btnAddPhoto} activeOpacity={0.8}>
<Image
source={require("../assets/add.png")}
resizeMode="contain"
/>
</TouchableOpacity>
</View> */}
<KeyboardAvoidingView
behavior={Platform.OS == "android" ? "padding" : "height"}
// keyboardVerticalOffset={Platform.OS === "ios" ? -300 : 0}
>

<View style={{...styles.formRegistration, paddingBottom: isShowKeyboard? 110:78}}>
<View style={styles.addPhoto}>
<TouchableOpacity style={styles.btnAddPhoto} activeOpacity={0.8}>
<Image
source={require("../assets/add.png")}
resizeMode="contain"
/>
</TouchableOpacity>
</View>
<Text style={styles.title}>Реєстрація</Text>
  <View style={styles.inputContainer}>
  <TextInput 
    style={[styles.input,
    isFocusInput==='login' && styles.inputActive,]} 
    onFocus={()=>{
      setIsShowKeyboard(true)
      focusInput('login')}}
    placeholder="Логін"
    value={login}
    onChangeText={setLogin}
    />
  </View>
  <View style={styles.inputContainer}>
  <TextInput style={[styles.input,
  isFocusInput==='email' && styles.inputActive,]} 
  onFocus={()=>{
    setIsShowKeyboard(true)
    focusInput('email')}}
  placeholder="Адреса електронної пошти"
  value={email}
  onChangeText={setEmail}
  />
  </View>
  <View style={styles.inputWrapper}>

  <TextInput style={[styles.input,
  isFocusInput==='password' && styles.inputActive,]} 
  onFocus={()=>{
    setIsShowKeyboard(true)
    focusInput('password')
  }}
  secureTextEntry={!isShowPassword}
  placeholder="Пароль"
  value={password}
  onChangeText={setPassword}
  />
  </View>
  <TouchableOpacity 
  style={styles.showPasswordBtn} 
  activeOpacity={0.8}
  onPress={()=>{toggleShowPassword()}}>
    <Text style={styles.titleShowPasswordBtn}>{!isShowPassword? "Показати" : "Сховати"}</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={onLogin}>
<Text style={styles.btnTitle}>Зареєстуватися</Text>
  </TouchableOpacity>
<Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>

</View>



</KeyboardAvoidingView>

  </View>

</ImageBackground>

</View>

</TouchableWithoutFeedback>
  )
}
const styles= StyleSheet.create({
  container: {
flex: 1,
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    
  },
  wrapper:{
    justifyContent: 'flex-end'
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
  },
      
  formRegistration:{
    
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 66,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    // marginBottom:78,
  },
  inputContainer:{
    marginBottom:16,
  },
  input:{
    
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 50,
    // marginHorizontal: 16,
    borderStyle: 'solid',
   
    borderRadius: 8,
    padding: 16,
    color: '#BDBDBD',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    lineHeight: 19,
    // marginBottom: 16,
    
    
},
  inputActive: {
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 8,
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    padding: 16,
    maxHeight: 50,
    // marginBottom: 16,
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    // fontWeight:400,
    lineHeight: 19,
  },
  inputWrapper:{
    position: 'relative',
    marginBottom:43,
    
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
    // marginHorizontal: 16,
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
  },
  titleShowPasswordBtn:{
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    lineHeight: 19,
    fontSize: 16,
  },
  showPasswordBtn:{
    position: 'absolute',
    top: 309,
    left: 288,
      },
})
