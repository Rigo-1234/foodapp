import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authocontext'
import firebase from '../../firebase'
import Trackorderitem from '../trackorderitem'

const Trackorder = ({ navigation }) => {
  const { userloggeduid } = useContext(AuthContext)
  const [orders, setOrders] = useState([])
  const [foodDataAll, setFoodDataAll] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      const ordersRef = firebase.firestore().collection('UserOrders').where('userid', '==', userloggeduid)
      ordersRef.onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => doc.data()))
      })
    }
    getOrders()
  }, [])

  useEffect(() => {
    const fetchFoodData = async () => {
      const foodRef = firebase.firestore().collection('FoodData')
      foodRef.onSnapshot(snapshot => {
        setFoodDataAll(snapshot.docs.map(doc => doc.data()))
      })
    }
    fetchFoodData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 15, paddingHorizontal: 15, backgroundColor: 'red', marginTop: 30, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: 'white' }}>Close</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text style={styles.mainheading}>My Orders</Text>
        <View style={styles.mainconatiner}>
          {orders.map((order, index) => (
            <View key={index}>
              <Text style={styles.orderid}>Order id: {(order.orderid || '').substring(0, 15)}</Text>
              <Text style={styles.ordertime}>Time: {order.orderdate || 'Unknown'}</Text>
              <Trackorderitem foodDataAll={foodDataAll} data={order.orderid} />
              <Text style={styles.ordertotal}>Total: {order.ordercost}frs</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Trackorder

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainheading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  mainconatiner: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 10,
    elevation: 2,
  },
  orderid: {
    fontSize: 16,
    borderColor: '#d9d9d9',
    borderBottomWidth: 1,
    color: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ordertime: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ordertotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    marginRight: 20,
    textAlign: 'right',
  },
})
