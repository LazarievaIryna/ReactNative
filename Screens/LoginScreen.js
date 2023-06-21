import { View, StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform } from "react-native"
import { useState } from "react"

export const LoginScreen=()=>{
    const [isFocusInput, setIsFocusInput]=useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onLogin = () => {
    console.log(`Login data: ${email}+ ${password}`);
  };
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

    const focusInput = (input)=>{
      setIsFocusInput(input)
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
           <KeyboardAvoidingView
             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
             keyboardVerticalOffset={-19}
           >
    <View style={styles.formRegistration}>

<Text style={styles.title}>Увійти</Text>

  <TextInput style={[styles.input,
  isFocusInput==='email' && styles.inputActive,]} 
  onFocus={()=>{focusInput('email')}}
  placeholder="Адреса електронної пошти"
  value={email}
  onChangeText={setEmail}
  />

<View style={styles.inputWrapper}>
  <TextInput style={[styles.input,
  isFocusInput==='password' && styles.inputActive,]} 
  onFocus={()=>{focusInput('password')}}
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
    <Text style={styles.titleShowPasswordBtn}>
        {!isShowPassword? "Показати" : "Сховати"}
        </Text>
  </TouchableOpacity>
  

 <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={onLogin}>
<Text style={styles.btnTitle}>Увійти</Text>
  </TouchableOpacity>
<Text style={styles.textLogin}>Немає акаунту?&nbsp;
<Text style={styles.textUnderline}>Зареєструватися</Text>
</Text>
</View>
 </KeyboardAvoidingView>
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles= StyleSheet.create({
    wrapper:{
        flex:1, 
        justifyContent: 'flex-end',
    },
    
      formRegistration:{
        
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 144,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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
      inputActive: {
        borderWidth: 1,
        borderColor: "#FF6C00",
        borderRadius: 8,
        borderStyle: "solid",
        backgroundColor: "#FFFFFF",
        padding: 16,
        maxHeight: 50,
        marginBottom: 16,
        color: "#212121",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        // fontWeight:400,
        lineHeight: 19,
      },
      showPasswordBtn:{
    position: 'absolute',
    top: 182,
    left: 288,
      },
      titleShowPasswordBtn:{
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
        fontWeight: 400,
        lineHeight: 19,
        fontSize: 16,
      },
      inputWrapper:{
        position: 'relative',
        marginBottom:43,
      },
      textUnderline:{
        textDecorationLine:'underline'
      }
})