import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/component/login/login';
import Signup from './src/component/login/signup';
import CompleteSignup from './src/component/login/completesignup';
import Appnav from './src/component/navigation/appnav';
import { AuthProvider } from './src/component/context/authocontext';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
         <Appnav />
      </AuthProvider>
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
