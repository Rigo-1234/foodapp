import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React from 'react'

const Trackorder = () => {
  return (
   <View style={styles.container}>
     <View style={{paddingVertical: 15, 
        paddingHorizontal: 15,
        backgroundColor: 'red', 
        marginTop: 30,
        alignItems:'center',}}>
          <TouchableOpacity>
            <Text style={{color:'white'}}>Close</Text>
          </TouchableOpacity>
      </View>

      <ScrollView>
        <Text style={styles.mainheading}>My Orders</Text>
        <View style={styles.mainconatiner}>
          <Text style={styles.orderid}>Order id : 1</Text>
          <Text style={styles.ordertime}>Time : 3:30 AM</Text>

          <View style={styles.ordercontainer}>
            <View>
              <Image source={require('../../images/splash-icon.png')} style={styles.cardimg}/>
            </View>

            <View style={styles.ordercontainer1}>
              <View>
                <Text style={styles.orderitemname}>food name</Text>
                <Text style={styles.orderitemprice}>price</Text>
                <Text>QTY : 3 units</Text>
              </View>
            </View>
          </View>

           <View style={styles.ordercontainer}>
            <View>
              <Image source={require('../../images/splash-icon.png')} style={styles.cardimg}/>
            </View>

            <View style={styles.ordercontainer1}>
              <View>
                <Text style={styles.orderitemname}>food name 1</Text>
                <Text style={styles.orderitemprice}>price</Text>
                <Text>QTY : 3 units</Text>
              </View>
            </View>
          </View>
          

           <View style={styles.ordercontainer}>
            <View>
              <Image source={require('../../images/splash-icon.png')} style={styles.cardimg}/>
            </View>

            <View style={styles.ordercontainer1}>
              <View>
                <Text style={styles.orderitemname}>food name 2</Text>
                <Text style={styles.orderitemprice}>price</Text>
                <Text>QTY : 3 units</Text>
              </View>
            </View>
          </View>
          

          <Text style={styles.ordertotal}>Total : 3000Frs</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Trackorder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  mainheading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 20,
    // textAlign: 'center',
    // color: '#333',
  },
  mainconatiner: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    elevation: 2,
  },
  orderid: {
    fontSize: 16,
    borderColor:'#d9d9d9',
    borderBottomWidth: 1,
    color: 'grey',
    paddingHorizontal: 10,
    paddingVertical:5
  },
  ordertime: {
    // fontSize: 16,
    // color: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
    // marginBottom: 10,
  },
  ordertotal: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: '#333',
    marginVertical: 5,
    marginRight: 20,
    textAlign: 'right',
  },
  ordercontainer: {
    flexDirection:'row',
    backgroundColor:'green',
    marginVertical:2,
    width:'95%',
    alignSelf:'center',
    borderRadius:20,
    backgroundColor:'#f2f2f2',
    elevation:2,
  },
  cardimg:{
    width: 70,
    height: 70,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius:20,
  },
  ordercontainer1: {
    flexDirection: 'row',
    paddingHorizontal:10,
    justifyContent:'space-between',

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