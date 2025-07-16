import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location-pin" size={28} color="black" />
            <View style={{ paddingHorizontal: 5}}>
                <View>
                    <Text style={{paddingRight:3, fontSize:16,fontWeight:'bold'}}>Location</Text>
                </View>
                 <Text>Douala</Text>
            </View>
        </TouchableOpacity>  
         
    </View>
  ) 
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        backgroundColor: 'white',
        marginTop: 0,
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 20,
        paddingVertical: 10
    },      
})