import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Usercart = () => {
return (
    <View style={styles.container}>
        <View style={{backgroundColor: 'red', paddingVertical : 15, paddingHorizontal : 15, marginTop : 30}}>
            <TouchableOpacity>
                <Text style={{fontSize:16, color:'white'}}>Close</Text>
            </TouchableOpacity>

        </View>  
       
        <View style={styles.container2}>
            <Text style={styles.containerhead}>CartItem</Text>

            <View style={styles.containercardlist}>
                 <View style={styles.containercard}>
                     <Image source={require('../../images/splash-icon.png')} style={styles.cardimg}/>
                    <View style={styles.containercard_in1}>
                            <View style={styles.containercard_in}>
                            <Text>Item name</Text>
                        </View>
                        <View style={styles.containercard_in2}>
                            <Text style={styles.containercard_in2_item}>Item name</Text>
                            <Text style={styles.containercard_in2_price}>price for one</Text>
                            <Text style={styles.containercard_in2_qty}>quantity</Text>
                        </View>

                        <View style={styles.containercard_in3}>
                            <TouchableOpacity style={styles.containercard_in3_btn}>
                                <Text style={styles.containercard_in3_btn_txt}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    </View>

)
}

export default Usercart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    container2: {
        backgroundColor: '#fff',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // flex: 1,
        // marginTop: 20,
        // paddingTop: 20,
    },
    containerhead: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 5,
        marginLeft: 5,
        paddingHorizontal: 10, 
    },
    containercardlist: {
        paddingHorizontal: 10,
    },
    containercard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical:5,
        borderRadius: 20,
        // padding: 10,
        // marginBottom: 15,
        elevation: 2,
        alignSelf:'center',
        width:'95%',
    },
    cardimg: {
        width: 60,
        height: 60,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius:15,
        // marginRight: 10,
    },
    containercard_in1: {
        flexDirection: 'column',
        margin:5,
        width:'60%',
        alignItems: 'flex-end',
    },
    containercard_in: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal:3,
        paddingVertical:2,
        width: '100%',
        borderBottomWidth:1,
    },
    containercard_in2: {
       flexDirection:'column',
       justifyContent: 'space-between',
       width:'100%',
       borderRadius:10,
       paddingHorizontal:3,
       paddingVertical: 2,
    },
      containercard_in3: {
       flexDirection:'row',
       justifyContent: 'center',
       width:'100%',
       borderRadius:20,
       borderRadius:20,
       backgroundColor: 'white',
       marginVertical:5,
       padding:5,
       elevation:2
    },
    containercard_in3_btn: {
        backgroundColor: '#ff5252',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 5,
        marginTop: 8,
    },
    containercard_in3_btn_txt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    containercard_in2_item: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    containercard_in2_price: {
        fontSize: 14,
        color: '#888',
        marginBottom: 2,
    },
    containercard_in2_qty: {
        fontSize: 14,
        color: '#555',
    },
})