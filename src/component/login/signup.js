import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { AuthContext } from "../context/authocontext";

const Signup = ({ navigation }) => {
  const { userloggeduidHandler } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const auth = getAuth(app);

  const createAccountHandler = () => {
    if (!email || !password || !cpassword) {
      alert("Please fill all the fields");
      return;
    }

    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        userloggeduidHandler(uid);
        console.log("Account Created Successfully:", uid);
        alert("Account created successfully!");
        navigation.navigate("login");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" barStyle="light-content" />

      <Text style={styles.heading}>Sign up</Text>

      {/* Email */}
      <View style={styles.inputRow}>
        <FontAwesome name="user" size={18} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      {/* Password */}
      <View style={styles.inputRow}>
        <FontAwesome name="lock" size={18} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#999"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Confirm Password */}
      <View style={styles.inputRow}>
        <FontAwesome name="lock" size={18} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Confirm password"
          secureTextEntry
          placeholderTextColor="#999"
          style={styles.input}
          value={cpassword}
          onChangeText={setCpassword}
        />
      </View>

      <TouchableOpacity
        style={styles.cta}
        activeOpacity={0.8}
        onPress={createAccountHandler}
      >
        <Text style={styles.ctaText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={styles.loginChip}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.loginChipText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

/* ----------------------------  STYLES  ---------------------------- */

const FIELD_HEIGHT = 46;
const ICON_SIZE = 18;
const ICON_OFFSET = 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: "5%",
  },
  heading: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 16,
  },
  inputRow: {
    position: "relative",
    height: FIELD_HEIGHT,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 23,
    marginVertical: 4,
  },
  icon: {
    position: "absolute",
    left: ICON_OFFSET,
    top: (FIELD_HEIGHT - ICON_SIZE) / 2,
  },
  input: {
    height: "100%",
    paddingLeft: ICON_OFFSET + ICON_SIZE + 8,
    paddingRight: 12,
    fontSize: 15,
  },
  cta: {
    backgroundColor: "red",
    borderRadius: 23,
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 4,
    elevation: 2,
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 6,
  },
  loginChip: {
    backgroundColor: "red",
    borderRadius: 23,
    paddingVertical: 8,
    paddingHorizontal: 20,
    elevation: 2,
  },
  loginChipText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
