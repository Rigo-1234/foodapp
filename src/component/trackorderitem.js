import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/authocontext'
import firebase from '../firebase'

const Trackorderitem = ({ foodDataAll, data }) => {
  const { userloggeduid } = useContext(AuthContext)
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (!data) return
      const foodRef = firebase.firestore().collection('OrderItems').doc(data)
      const doc = await foodRef.get()
      if (doc.exists) {
        setOrderData(doc.data().cartItems || [])
      }
    }
    fetchData()
  }, [data])

  const getDataById = (id) => {
    return foodDataAll.filter((item) => item.id === id)
  }

  return (
    <View>
      {orderData.map((order, index) => {
        const foodItem = getDataById(order.item_id)[0]
        if (!foodItem) return null

        return (
          <View
            key={index}
            style={{
              borderRadius: 20,
              backgroundColor: '#f2f2f2',
              width: '95%',
              alignSelf: 'center',
              marginVertical: 5,
              elevation: 2,
              flexDirection: 'row',
              padding: 10,
            }}
          >
            <Image source={{ uri: foodItem.FoodImageUrl }} style={styles.cardimg} />
            <View style={styles.ordercontainer1}>
              <Text style={styles.orderitemname}>{foodItem.FoodName}</Text>
              <Text style={styles.orderitemprice}>{foodItem.FoodPrice} frs</Text>
              <Text>QTY: {order.foodquantity} units</Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default Trackorderitem

const styles = StyleSheet.create({
  cardimg: {
    width: 70,
    height: 70,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  ordercontainer1: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  orderitemname: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  orderitemprice: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 2,
  },
})
