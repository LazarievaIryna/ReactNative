import {ImageBackground, StyleSheet,  View} from 'react-native';
const image = {uri: '../Assets/images/image_bg.jpg'};

export const RegistrationScreen =()=>{
    return(
<View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     
    </ImageBackground>
  </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    
  });