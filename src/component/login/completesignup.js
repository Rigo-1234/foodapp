import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Completesignup = () => {
  return (
    <View style={styles.container}>
       
               <StatusBar backgroundColor="red" />
               <View style={{paddingVertical :12, width:'95%', alignSelf:'center',marginBottom: 20}}>
                   <Text style={{alignSelf:'center',fontSize:25, fontWeight: 'bold'}}>Complete Profile</Text>
               </View>
               
               <TextInput
                   placeholder='Name'
                  //  keyboardType='email-address'
                   style={styles.input}
               />
       
               <TextInput
                   placeholder='Phone'
                   style={styles.input}
               />
    
                <TextInput
                   placeholder='Address'
                   style={styles.input}
               />
       
               <TouchableOpacity style={styles.loginbutton} onPress={() => alert('Profile completed!')}>
                   <Text style={styles.loginbuttontxt}>Next</Text>
               </TouchableOpacity>
               
               {/* <View style={{marginTop: 15, width: '95%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                   <View style={{paddingLeft:10,marginTop:16}}>
                       <Text>Already have an account?</Text>
                   </View>
                   <View  style={{ backgroundColor: 'red', borderRadius: 23,padding: 12,alignSelf: 'center',elevation: 2}}>
                       <TouchableOpacity>
                           <Text style={{color: 'white',
                               fontSize: 16,
                               fontWeight: 'bold',
                               alignSelf: 'center', paddingHorizontal: 10}}>Login
                           </Text>
                       </TouchableOpacity>
                   </View>
               </View> */}
           </View>
  )
}

export default Completesignup

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'green',
    width: '100%',
  },input: {
    padding:'10',
    borderRadius: 23,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '95%',
    alignSelf: 'center',
  },
  loginbutton: {
    backgroundColor: 'red',
    borderRadius: 23,
    padding: 12,
    width:'95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  loginbuttontxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})