import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
   
           <StatusBar backgroundColor="red" />
           <View style={{paddingVertical :12, width:'95%', alignSelf:'center',marginBottom: 20}}>
               <Text style={{alignSelf:'center',fontSize:25, fontWeight: 'bold'}}>Sign up</Text>
           </View>
           
           <TextInput
               placeholder='Email'
               keyboardType='email-address'
               style={styles.input}
           />
   
           <TextInput
               placeholder='Password'
               secureTextEntry
               style={styles.input}
           />

            <TextInput
               placeholder='Confirm Password'
               secureTextEntry
               style={styles.input}
           />
   
           <TouchableOpacity style={styles.loginbutton} onPress={() => alert('Account created Successful!')}>
               <Text style={styles.loginbuttontxt}>Sign up</Text>
           </TouchableOpacity>
           
           <View style={{marginTop: 15, width: '95%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
               <View style={{paddingLeft:10,marginTop:16}}>
                   <Text>Already have an account?</Text>
               </View>
               <View  style={{ backgroundColor: 'red', borderRadius: 23,padding: 12,alignSelf: 'center',elevation: 2}}>
                   <TouchableOpacity onPress={() => navigation.navigate('login')}>
                       <Text style={{color: 'white',
                           fontSize: 16,
                           fontWeight: 'bold',
                           alignSelf: 'center', paddingHorizontal: 10}}>Login
                       </Text>
                   </TouchableOpacity>
               </View>
           </View>
       </View>
  )
}

export default Signup

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