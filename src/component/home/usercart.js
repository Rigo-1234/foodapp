import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AuthContext } from '../context/authocontext';
import { db } from '../../firebase';
import { doc, getDoc, collection, getDocs, updateDoc, arrayRemove, deleteField } from 'firebase/firestore';
import firebase from 'firebase/compat/app';

const Usercart = ({ navigation }) => {
  const { userloggeduid } = useContext(AuthContext);
  const [cartalldata, setCartalldata] = useState([]);
  const [foodDataAll, setFoodDataAll] = useState([]);
  const [itemcost, setItemCost] = useState('0');
  const [totalcost, setTotalCost] = useState('0');
  const [deliverycharges, setDeliveryCharges] = useState('0');
  const [payment, setPayment] = useState(false);

  const cartdataHandler = async () => {
    try {
      const docRef = doc(db, 'UserCart', userloggeduid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setCartalldata(data.cartItems || []);
      } else {
        setCartalldata([]);
      }
    } catch (error) {
      console.log('Cart Error:', error);
    }
  };

  const FoodDataHandler = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'FoodData'));
      const foodList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFoodDataAll(foodList);
    } catch (error) {
      console.log('Food Error:', error);
    }
  };

  const DeleteButtonHandler = async (item) => {
    try {
      const docRef = doc(db, 'UserCart', userloggeduid);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();

      if (data && data.cartItems && data.cartItems.length === 1) {
        await updateDoc(docRef, {
          cartItems: deleteField(),
        });
      } else {
        await updateDoc(docRef, {
          cartItems: arrayRemove(item),
        });
      }

      cartdataHandler();
    } catch (error) {
      console.log('Delete Error:', error);
    }
  };

  const TotalPriceHandler = () => {
    if (cartalldata && cartalldata.length > 0) {
      let totalfoodprice = 0;
      cartalldata.forEach((item) => {
        totalfoodprice += parseInt(item.TotalFoodPrice || 0);
      });

      setItemCost(totalfoodprice.toString());
      setTotalCost((totalfoodprice + parseInt(deliverycharges)).toString());
    } else {
      setItemCost('0');
      setTotalCost('0');
    }
  };

  const deleteCart = async () => {
    const docRef = firebase.firestore().collection('UserCart').doc(userloggeduid);
    const docSnapshot = await docRef.get();
    if (docSnapshot.exists) {
      await docRef.delete();
      console.log('Document successfully deleted');
    } else {
      console.log('Document does not exist');
    }
  };

  const PlaceNow = async () => {
    const cDate = new Date().getTime().toString();
    const docid = cDate + userloggeduid;
    const orderdatadoc = firebase.firestore().collection('UserOrders').doc(docid);
    const orderitemtabledoc = firebase.firestore().collection('OrderItem').doc(docid);

    if (cartalldata && cartalldata.length > 0) {
      const updateddata = {
        cartItems: cartalldata.map((item) => ({
          ...item,
          OrderId: docid,
          OrderDate: cDate,
        }))
      };

      try {
        await orderitemtabledoc.set(updateddata);
        await orderdatadoc.set({
          Orderid: docid,
          Orderstatus: 'Pending',
          Ordercost: totalcost,
          Orderdate: cDate,
          userid:userloggeduid,
          Userpayment: 'COD',
          Paymenttotal: ''
        });
        await deleteCart();
        alert('Order placed successfully');
        navigation.navigate('Home');
      } catch (error) {
        console.log('Error placing order', error);
        alert('Error placing order. Please try again.');
      }
    } else {
      alert('Cart is empty.');
    }
  };

  useEffect(() => {
    cartdataHandler();
    FoodDataHandler();
  }, []);

  useEffect(() => {
    TotalPriceHandler();
  }, [cartalldata]);

  useFocusEffect(
    React.useCallback(() => {
      cartdataHandler();
    }, [])
  );

  if (payment) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setPayment(false)}>
            <Text style={styles.headerText}>Close</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.paymentTitle}>Payment Option</Text>

        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => alert('Cash on Delivery selected')}>
          <Text style={styles.paymentButtonText}>Cash on Delivery</Text>
        </TouchableOpacity>

        <Text style={styles.paymentTitle}>Delivery Location</Text>

        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => alert('Using current location')}>
          <Text style={styles.paymentButtonText}>Current Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => alert('Change location selected')}>
          <Text style={styles.paymentButtonText}>Change Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentButton, { backgroundColor: '#333' }]}
          onPress={PlaceNow}>
          <Text style={styles.paymentButtonText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  // const GoToPaymentPge = () => {
  //   navigation.navigate('Payment');
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Close</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <Text style={styles.containerhead}>MY Cart</Text>

        <View style={styles.cartout}>
          {cartalldata.length === 0 ? (
            <Text style={{ padding: 10 }}>Your Cart is Empty!</Text>
          ) : (
            <FlatList
              data={cartalldata}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                const nData = foodDataAll.find(f => f.id === item.item_id);
                if (!nData) return null;

                return (
                  <View style={styles.containercardlist}>
                    <View style={styles.containercard}>
                      <Image
                        source={{ uri: nData.FoodImageUrl }}
                        style={styles.cardimg}
                        resizeMode="cover"
                      />
                      <View style={styles.containercard_content}>
                        <Text style={styles.foodName}>{nData.FoodName}</Text>
                        <Text style={styles.foodPrice}>{nData.FoodPrice} frs</Text>
                        <Text style={styles.foodQty}>Quantity: {item.FoodQuantity}</Text>
                        <TouchableOpacity
                          style={styles.deleteBtn}
                          onPress={() => DeleteButtonHandler(item)}
                        >
                          <Text style={styles.deleteBtnTxt}>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </View>

        <View>
          {totalcost !== '0' && (
            <>
              <View style={{ marginTop: 10 }}>
                <View style={{
                  backgroundColor: 'white',
                  borderColor: 'grey',
                  borderRadius: 15,
                  width: '95%',
                  alignSelf: 'center',
                  marginVertical: 5,
                  paddingVertical: 5,
                  elevation: 3
                }}>
                  <View style={styles.rowBetween}>
                    <Text style={styles.chargeText}>Item Cost</Text>
                    <Text style={styles.chargeText}>{itemcost} frs</Text>
                  </View>

                  <View style={styles.rowBetween}>
                    <Text style={styles.chargeText}>Delivery Charges</Text>
                    <Text style={styles.chargeText}>{deliverycharges} frs</Text>
                  </View>

                  <View style={styles.rowBetween}>
                    <Text style={styles.chargeText}>Service Charges</Text>
                    <Text style={styles.chargeText}>0frs</Text>
                  </View>
                </View>
              </View>

              <View style={styles.btncon}>
                <View style={styles.c3}>
                  <Text style={styles.txt5}>Total:</Text>
                  <Text style={styles.txt6}>{totalcost} frs</Text>
                </View>
                <TouchableOpacity onPress={()=>setPayment(true)}>
                  <Text style={styles.btntxt}>Place Order</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Usercart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  headerText: {
    fontSize: 16,
    color: 'white',
  },
  container2: {
    flex: 1,
  },
  containerhead: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  cartout: {
    paddingHorizontal: 10,
  },
  containercardlist: {
    marginBottom: 10,
  },
  containercard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    alignItems: 'center',
  },
  cardimg: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  containercard_content: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: 'green',
    marginVertical: 2,
  },
  foodQty: {
    fontSize: 14,
    color: '#555',
  },
  deleteBtn: {
    marginTop: 5,
    backgroundColor: '#ff5252',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  deleteBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  btncon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  c3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt5: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  txt6: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  btntxt: {
    backgroundColor: 'red',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 16,
    overflow: 'hidden',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 2,
  },
  chargeText: {
    fontWeight: '600',
  },
  paymentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  paymentButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  paymentButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
