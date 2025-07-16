import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { StatusBar } from 'expo-status-bar'
import Header from '../header'
import AntDesign from '@expo/vector-icons/AntDesign';
import Category from '../category'
import Offers from '../offers';
import Card from '../card';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';                       // ✅ ensure correct path

const Home = ({navigation}) => {

    const [foodData, setFoodData] = useState([])

    const foodDataQry = collection(db, 'FoodData')          // ✅ modular SDK

    useEffect(() =>
    {
        // ✅ onSnapshot (typo fixed) + add id for FlatList key
        const unsub = onSnapshot(foodDataQry, snapshot =>{
            setFoodData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        return () => unsub()                                // cleanup
    }, [])

    // console.log('present food data',foodData)

    return (
        <View style={styles.maincontainer}>
            <StatusBar backgroundColor='red' />

            <Header />

            <TouchableOpacity style={styles.searchbox}>
                <AntDesign name="search1" size={24} color="black" style={{ color: 'red' }} />
                <Text style={styles.input}>Search</Text>
            </TouchableOpacity>

            <Category />
           
            <Offers />

            {/* ✅ pass data & navigation */}
            <Card data={foodData} navigation={navigation}/>

            {/* <TouchableOpacity onPress={() => navigation.navigate('product')}>
                <Text>Go to Product</Text>
           </TouchableOpacity> */}

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        height: '100%',
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
        borderRadius: 25
    },
    input: {
        fontSize: 16,
        color: '#c4c4c4',
        paddingLeft: 10,
        marginLeft: 10,
        width: '90%',
    },
})
