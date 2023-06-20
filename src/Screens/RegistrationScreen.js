import { StyleSheet,  View, Image} from 'react-native';

// let imagePhoto = require('/src/Assets/Add photo.png')



export const RegistrationScreen =()=>{
    return(
<View style={styles.wrapper}>

  <View style={styles.iconContainer}>
  <Image
  source={require('/assets/images/add_photo.png')}
  style={styles.image}/>
  </View>
  
   
  </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
      flex:1,
      // height: '75%',
      backgroundColor: 'white',
      // position: 'absolute',
      // top: '25%',
    },
    // container: {
    //   flex: 1,
    //   backgroundColor: 'white',
    // },
    image: {
      width: 30,
      height: 30,
    },
    iconContainer: {
      flex:1,
   
    // backgroundColor: "red",
    // borderRadius: 16,
    // marginBottom: 32,
    
    }

   
    
  ,});