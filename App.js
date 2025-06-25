import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/component/login/login';
import Signup from './src/component/login/signup';
import CompleteSignup from './src/component/login/completesignup';
import Appnav from './src/component/navigation/appnav';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>hello!</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <CompleteSignup /> */}
      <Appnav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
