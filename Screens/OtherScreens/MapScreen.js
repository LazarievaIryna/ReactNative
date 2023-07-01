import React from "react";
import { useRoute } from "@react-navigation/native";
import MapView, {Marker} from 'react-native-maps';

import { View, StyleSheet} from "react-native"
 const MapScreen=()=>{
    const { params } = useRoute();
    return(
        <View style={styles.container}>
            <MapView 
            style={styles.wrapper}
            initialRegion={{
                longitude:params.locationLongitude,
                latitude:params.locationLatitude,
                latitudeDelta:0.001,
                longitudeDelta:0.006,
            }}
            >
                <Marker 
                coordinate={
                    {longitude:params.locationLongitude,
                latitude:params.locationLatitude}}/>
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