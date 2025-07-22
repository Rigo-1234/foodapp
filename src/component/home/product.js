import {ScrollView,StyleSheet,Text,TouchableOpacity,View,StatusBar,Image,TextInput,Alert,} from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {doc,getDoc,updateDoc,setDoc,arrayUnion,} from 'firebase/firestore';

import { AuthContext } from '../context/authocontext';
import { db } from '../../firebase'; // import your Firestore instance from firebase.js

const Product = () => {
  const navigation = useNavigation();
  const { userloggeduid } = useContext(AuthContext);
  const route = useRoute();
  const item = route.params?.item;
  const [quantity, setQuantity] = useState('1');

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>No item data found.</Text>
      </View>
    );
  }

  const AddtocartHandler = async () => {
    if (!userloggeduid) {
      Alert.alert('Error', 'User not logged in');
      return;
    }

    const date = new Date().getTime().toString();
    const docRef = doc(db, 'UserCart', userloggeduid);

    const foodData = {
      item_id: item.id,
      FoodQuantity: parseInt(quantity, 10),
      userid: userloggeduid,
      cartItemId: date + userloggeduid,
      FoodName: item.FoodName,
      FoodPrice: item.FoodPrice,
      FoodImageUrl: item.FoodImageUrl,
      TotalFoodPrice: parseInt(item.FoodPrice) * parseInt(quantity),
    };

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const cartItems = data.cartItems || [];

        const existingItemIndex = cartItems.findIndex(
          (cartItem) => cartItem.item_id === item.id
        );

        if (existingItemIndex !== -1) {
          // Update existing item quantity
          cartItems[existingItemIndex].FoodQuantity += parseInt(quantity, 10);

          await updateDoc(docRef, { cartItems: cartItems });

          console.log('Cart item updated');
        } else {
          // Add new item to cartItems array
          await updateDoc(docRef, {
            cartItems: arrayUnion(foodData),
          });

          console.log('New item added to cart');
        }
      } else {
        // Create new cart document with first item
        await setDoc(docRef, {
          cartItems: [foodData],
        });

        console.log('Cart document created and item added');
      }

      Alert.alert('Success', 'Added to cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      Alert.alert('Error', 'Failed to add to cart.');
    }
  };

  const increaseQuantityHandler = () => {
    setQuantity((prev) => (parseInt(prev, 10) + 1).toString());
  };

  const decreaseQuantityHandler = () => {
    if (parseInt(quantity, 10) > 1) {
      setQuantity((prev) => (parseInt(prev, 10) - 1).toString());
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="red" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>← Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerIn}>
        <View style={styles.containerIn1}>
          <Image source={{ uri: item.FoodImageUrl }} style={styles.cardimg} />
        </View>

        <View style={styles.containerIn2}>
          <View style={styles.containerIn2_s1}>
            <Text style={styles.containerIn2_itemname}>{item.FoodName}</Text>
            <Text style={styles.containerIn2_itemprice}>{item.FoodPrice} frs</Text>
          </View>

          <View style={styles.containerIn2_s2}>
            <Text style={styles.containerIn2head}>About Item</Text>
            <Text style={styles.containerIn2_desc}>{item.description || 'No description available.'}</Text>
          </View>

          <View style={styles.containerIn2_s3}>
            <Text style={styles.containerIn2_restau}>Restaurant Name</Text>
            <Text style={styles.containerIn2_descrestau}>{item.restaurant || 'Unknown'}</Text>
          </View>
        </View>

        <View style={styles.containerIn4}>
          <Text style={styles.containerIn2_restau}>Quantity</Text>
          <View style={styles.containerIn4_qty}>
            <Text style={styles.containerIn4_qty_min} onPress={decreaseQuantityHandler}>
              -
            </Text>
            <TextInput
              style={styles.containerIn4_qty_input}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
            />
            <Text style={styles.containerIn4_qty_plus} onPress={increaseQuantityHandler}>
              +
            </Text>
          </View>
        </View>

        <View style={styles.containerIn3}>
          <TouchableOpacity style={styles.containerIn3_buybtn} onPress={AddtocartHandler}>
            <Text style={styles.containerIn3_buybtntxt}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 15,
    height: 80,
    justifyContent: 'center',
    marginTop: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
  },
  containerIn: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  containerIn1: {
    alignItems: 'center',
    marginBottom: 15,
  },
  cardimg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  containerIn2: {
    marginVertical: 10,
  },
  containerIn2_s1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerIn2_itemname: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerIn2_itemprice: {
    fontSize: 18,
    color: 'green',
    fontWeight: '600',
  },
  containerIn2_s2: {
    marginBottom: 10,
  },
  containerIn2head: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  containerIn2_desc: {
    fontSize: 14,
    color: '#555',
  },
  containerIn2_s3: {
    marginBottom: 10,
  },
  containerIn2_restau: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  containerIn2_descrestau: {
    fontSize: 14,
    color: '#444',
  },
  containerIn4: {
    marginVertical: 10,
  },
  containerIn4_qty: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  containerIn4_qty_min: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 10,
  },
  containerIn4_qty_input: {
    width: 50,
    height: 38,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  containerIn4_qty_plus: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 10,
  },
  containerIn3: {
    alignItems: 'center',
    marginTop: 20,
  },
  containerIn3_buybtn: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  containerIn3_buybtntxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
