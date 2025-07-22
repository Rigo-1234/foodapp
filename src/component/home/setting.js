// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// const Setting = () => {
//   return (
//     <View style={styles.container}>
//         <View style={{paddingVertical: 15, 
//             paddingHorizontal: 15,
//             backgroundColor: 'red', 
//             marginTop: 30,
//             alignItems:'center',}}>
//             <Text style={{color:'white'}}>Account and Settings</Text>
//         </View> 
     
//         <View>
//             <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttontxt}>Profile</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttontxt}>Edit Profile</Text>
//             </TouchableOpacity>
//         </View>
             
//         <View style={{flex:1}}>
//             <TouchableOpacity style={styles.logoutbutton}>
//                 <Text style={styles.logoutbuttontxt}>Logout</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
//   )
// }

// export default Setting

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#fff',
//     },
//     button: {
//         backgroundColor: 'red',
//         borderRadius: 23,
//         padding: 12,
//         width:'95%',
//         alignSelf: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 12,
//   },
//   buttontxt: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//         alignSelf: 'center',
//   },
// logoutbutton: {
//     // backgroundColor: '#fff',
//     // borderRadius: 23,
//     padding: 15,
//     bottom:0,
//     left:0,
//     // width: '95%',
//     // alignSelf: 'center',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // marginTop: 30,
//     // borderWidth: 1,
//     // borderColor: 'red',
//     // marginTop:'auto',
//     // paddingLeft:15,
//     position:'absolute',
// },
// logoutbuttontxt: {
//     color: 'red',
//     fontSize: 16,
//     fontWeight: 'bold',
//     alignSelf: 'center',
// },
// }) 

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { AuthContext } from '../context/authocontext'    // Adjust path if different

const Setting = ({ navigation }) => {
  const { userloggeduidHandler } = useContext(AuthContext);
  const auth = getAuth();

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      userloggeduidHandler(null);  // Clear context UID
      navigation.replace("Login"); // Go to Login page (use replace to prevent going back)
    } catch (error) {
      console.error("Logout Error:", error.message);
      alert("Failed to log out.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white' }}>Account and Settings</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontxt}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontxt}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.logoutbutton} onPress={logoutHandler}>
          <Text style={styles.logoutbuttontxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 23,
        padding: 12,
        width:'95%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
  },
  buttontxt: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
  },
logoutbutton: {
    // backgroundColor: '#fff',
    // borderRadius: 23,
    padding: 15,
    bottom:0,
    left:0,
    // width: '95%',
    // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 30,
    // borderWidth: 1,
    // borderColor: 'red',
    // marginTop:'auto',
    // paddingLeft:15,
    position:'absolute',
},
logoutbuttontxt: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
},
})