import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";          // ✅ adjust if the path differs
import { AuthContext } from "../context/authocontext";

const Login = ({ navigation }) => {
  const { userloggeduidHandler } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  /* --------------------------- login --------------------------- */
  const loginHandler = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;
      userloggeduidHandler(uid);
      console.log("Logged‑in user UID:", uid);

      setEmail("");
      setPassword("");

      navigation.navigate("home");          // make sure “home” exists
    } catch (err) {
      console.error("Login error:", err.message);
      alert(err.message);
    }
  };
  /* ------------------------------------------------------------ */

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" />

      <Text style={styles.heading}>Login</Text>

      {/* Email */}
      <View style={styles.inputRow}>
        <FontAwesome name="user" size={18} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
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
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.signupChip}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.signupChipText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

/* ----------------------------  STYLES  ---------------------------- */

const FIELD_HEIGHT = 46;
const ICON_SIZE = 18;
const ICON_OFFSET = 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 14,
    paddingHorizontal: "5%",
  },
  heading: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
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
  loginButton: {
    backgroundColor: "red",
    borderRadius: 23,
    paddingVertical: 12,
    alignItems: "center",
    elevation: 2,
  },
  loginButtonText: {
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
  signupChip: {
    backgroundColor: "red",
    borderRadius: 23,
    paddingVertical: 8,
    paddingHorizontal: 20,
    elevation: 2,
  },
  signupChipText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
