import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
// import { StatusBar } from 'expo-status-bar'
import Header from '../header'
import AntDesign from '@expo/vector-icons/AntDesign';
import Category from '../category'


const Home = () => {
    return (
        <View style={styles.maincontainer}>
            <StatusBar backgroundColor='red' />

            <Header />

            <TouchableOpacity style={styles.searchbox}>
                <AntDesign name="search1" size={24} color="black" style={{ color: 'red' }} />
                <Text style={styles.input}>Search</Text>
            </TouchableOpacity>

            <Category />
            {/* <View>
                <Text>Categories</Text>
            </View>
            <View>
                <Text>All Categories</Text>
            </View> */}

            <View>
                <Text>Slider (Offers fo r user, advertisements)</Text>
            </View>

            <View>
                <Text>Foods</Text>
            </View>


        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'red',
    },
    searchbox: {
        flexDirection: 'row',
        width: '92%',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 2,
        // height: 40, 
        // borderWidth:2,
        // borderColor:'red',
        borderRadius: 25
    },
    input: {
        fontSize: 16,
        color: '#c4c4c4',
        paddingLeft: 10,
        marginLeft: 10,
        width: '90%',
        // backgroundColor: 'red',
        // borderWidth:2,
        // borderColor:'red',
        // height: 40,

    },
})