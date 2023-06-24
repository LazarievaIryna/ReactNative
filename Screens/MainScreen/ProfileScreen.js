import { View, Text, StyleSheet} from "react-native"
 const ProfileScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        paddingTop: 100,
    }
})
export default ProfileScreen;