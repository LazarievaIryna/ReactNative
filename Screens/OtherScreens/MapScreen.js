import React from "react";
import MapView, {Marker} from 'react-native-maps';

import { View, StyleSheet} from "react-native"
 const MapScreen=()=>{
    return(
        <View style={styles.container}>
            <MapView 
            style={styles.wrapper}
            initialRegion={{
                longitude:-122.083922,
                latitude:37.4220936,
                latitudeDelta:0.001,
                longitudeDelta:0.006,
            }}
            >
                <Marker coordinate={{longitude:-122.083922,
                latitude:37.4220936}}/>
            </MapView>
        </View>
    )
}
const styles= StyleSheet.create({
    wrapper: {
        flex: 1,
        
    },
    container:{
        flex: 1,
    }
})
export default MapScreen;