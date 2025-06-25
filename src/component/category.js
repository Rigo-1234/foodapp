import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{...styles.box, backgroundColor: '#ddfbf3'}}>
            <Image source={require('../images/splash-icon.png')} style={styles.image} />

            <Text style={styles.text}>1st</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.box, backgroundColor: '#f5e5ff'}}>
            <Image source={require('../images/splash-icon.png')} style={styles.image} />

            <Text style={styles.text}>2nd</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.box, backgroundColor: '#e5f1ff'}}>
            <Image source={require('../images/splash-icon.png')} style={styles.image} />

            <Text style={styles.text}>3rd</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // flex: 1,
        padding: 20,
        // backgroundColor: 'green',
        borderRadius: 10
        // margin: 10,
        // elevation: 3,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
    },

    image: {
        width: 20,
        height: 20,
    },
    box:{
        // backgroundColor:'red',
        flexDirection:'row',
        marginHorizontal:10,
        padding: 10,
        borderRadius: 20, 
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2 
    },
    head: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        paddingLeft: 5
    },
    text: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'black',
        marginLeft: 5
    },

})