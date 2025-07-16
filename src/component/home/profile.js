import React, { useContext, useEffect } from "react";
import {StyleSheet,Text,View,TouchableOpacity,TextInput,} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { db } from "../../firebase";               // ← adjust the path!
import {collection,getDocs,} from "firebase/firestore";
import { AuthContext } from "../context/authocontext";

const Profile = () => {
  // Example state for fetched data (optional)
  // const [users, setUsers] = React.useState([]);
  const {snap} = useContext(AuthContext)
  console.log('context Data', snap)

  const handleData = async () => {
    try {
      const snap = await getDocs(collection(db, "UserProfiles"));

      if (snap.empty) {
        console.log("No user profiles yet!");
      } else {
        snap.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
        });
        // setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
    } catch (err) {
      console.error("Firestore read error:", err);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "red",
          paddingVertical: 15,
          paddingHorizontal: 15,
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          My Profile
        </Text>
      </View>

      <View style={styles.inputfield}>
        <FontAwesome5 name="user-alt" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value="PNF"
          editable={false}
        />
      </View>

      <View style={styles.inputfield}>
        <Entypo name="email" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value="pnf@email.com"
          editable={false}
        />
      </View>

      <View style={styles.inputfield}>
        <Entypo name="address" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value="Address"
          editable={false}
        />
      </View>

      <View style={styles.inputfield}>
        <FontAwesome5 name="phone" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value="+123456789"
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontxt}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  inputfield: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 18,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 23,
    padding: 12,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  buttontxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
