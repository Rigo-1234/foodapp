import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../header';
import AntDesign from '@expo/vector-icons/AntDesign';
import Category from '../category';
import Offers from '../offers';
import Card from '../card';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Home = ({ navigation }) => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const foodDataQry = collection(db, 'FoodData');
    const unsub = onSnapshot(
      foodDataQry,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id.trim(), ...doc.data() }));
        console.log('Fetched FoodData:', data);
        setFoodData(data);
      },
      (error) => {
        console.error('Firestore onSnapshot error:', error);
      }
    );
    return () => unsub();
  }, []);

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor="red" />
      <Header />

      <TouchableOpacity style={styles.searchbox}>
        <AntDesign name="search1" size={24} color="red" />
        <Text style={styles.input}>Search</Text>
      </TouchableOpacity>

      <Category />
      <Offers />

      {/* Use dynamic data from Firebase */}
      <Card data={foodData} navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    borderRadius: 25,
  },
  input: {
    fontSize: 16,
    color: '#c4c4c4',
    paddingLeft: 10,
    marginLeft: 10,
    width: '90%',
  },
});
