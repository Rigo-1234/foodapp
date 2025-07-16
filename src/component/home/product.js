import { ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Product = () => {
     const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
        <StatusBar backgroundColor='red' />
      <View style={{backgroundColor:'red', paddingVertical: 15, paddingHorizontal: 15, height: 80, marginTop:50}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: 'white'}}>Close</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.containerIn}>
        <View style={styles.containerIn1}>
            <Image source={require('../../images/splash-icon.png')} style={styles.cardimg}/>

        </View>

         <View style={styles.containerIn2}>
            <View style={styles.containerIn2_s1}>
                <Text style={styles.containerIn2_itemname}>Item Name</Text>
                 <Text style={styles.containerIn2_itemprice}>price</Text>
            </View>

            <View style={styles.containerIn2_s2}>
                <Text style={styles.containerIn2head}>About item</Text>
                 <Text style={styles.containerIn2_desc}>Best food</Text>
            </View>

            <View style={styles.containerIn2_s3}>
                <Text style={styles.containerIn2_restau}>Restaurant Name</Text>
                 <Text style={styles.containerIn2_descrestau}>FOODGROP</Text>
            </View>

        </View>
        <View style={styles.containerIn3}>
          <TouchableOpacity style={styles.containerIn3_buybtn} >
            <Text style={styles.containerIn3_buybtntxt} >Buy Now</Text>
        </TouchableOpacity>
        </View>

      </View>  

    </ScrollView>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
    containerIn: {
      backgroundColor: 'white',
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 20,
    },
    containerIn1: {
       width: '100%',
       height: 250,
       backgroundColor: 'white',

        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardimg: {
        width: '100%',
        height: '100%',
        // borderRadius: 10,
        // borderTopLeftRadius: 17,
        // borderTopRightRadius: 17,
    },
    containerIn2: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        // paddingHorizontal: 15,
        // paddingVertical: 10,
        padding: 15,
        position: 'relative ',
        top: -30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    containerIn2_s1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    }, 
    containerIn2_itemname: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        width : 220,
        marginRight: 10,
    },
    containerIn2_itemprice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    containerIn2_s2: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius:20, 
        // marginVertical: 10,
    },
    containerIn2head: {
        fontSize: 18,
        fontWeight: 'bold',
        // color: 'black',
        // marginBottom: 10,
    },
    containerIn2_desc: {
        fontSize: 16,
        // color: 'black',
        paddingTop: 10,
    },
    containerIn2_s3: {
        width: '100%',
        backgroundColor: 'white',
        // paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius:20, 
        elevation: 2,
        padding: 20,
        alignItems: 'center',
        alignSelf: 'center', 
        // marginVertical: 10,
    },
    containerIn2_restau: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
        // marginBottom: 10,
    },
    containerIn2_descrestau: {
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
        fontWeight: 'bold',
    }, 
    containerIn3: {
        width: '100%',
        marginTop: 0,
        flexDirection: 'row',
        // height: 60,
        // backgroundColor: 'white',
        // position: 'relative',
        // top: -30,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerIn3_buybtn: {
        width: '90%',
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        elevation: 2,
        // marginVertical: 10,
        alignSelf: 'center',
        margin:10,
    },
    containerIn3_buybtntxt: {
        paddingVertical: 5,
        textAlign: 'center',
        borderRadius: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
})