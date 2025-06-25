import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity, StatusBar} from 'react-native';
// import React, { useState } from 'react';

const Login = ({ navigation }) => {

  return (
    <View style={styles.container}>

        <StatusBar backgroundColor="red" />
        <View style={{paddingVertical :12, width:'95%', alignSelf:'center',marginBottom: 20}}>
            <Text style={{alignSelf:'center',fontSize:25, fontWeight: 'bold'}}>Login</Text>
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

        <TouchableOpacity style={styles.loginbutton} onPress={() => alert('Login Successful!')}>
            <Text style={styles.loginbuttontxt}>Login</Text>
        </TouchableOpacity>
        
        <View style={{marginTop: 15, width: '95%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{paddingLeft:10,marginTop:16}}>
                <Text>Don't have any account?</Text>
            </View>
            <View  style={{ backgroundColor: 'red', borderRadius: 23,padding: 12,alignSelf: 'center',elevation: 2}}>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <Text style={{color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                        alignSelf: 'center', paddingHorizontal: 10}}>Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'green',
    width: '100%',
  },
  input: {
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
});

export default Login;
 