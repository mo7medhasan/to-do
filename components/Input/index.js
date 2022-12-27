import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Input({data,setData}) {
  let [val,setVal]=useState('')
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Add a To-Do" value={val} onChangeText={setVal} />

      <TouchableOpacity onPress={() =>{(data?.length>0? setData([...data,{id:data?.length+1||1,text:val,done:false}]):setData([{id:1,text:val,done:false}]))
   setVal('') }} style={styles.button}>
        <Ionicons
          name="md-add-circle"
          size={50}
          color="red"
          style={{ 
            elevation: 20,borderRadius:999,
            shadowColor: "#333",
            shadowOpacity:.2,
            shadowRadius: 999,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "space-evenly",
  },
  input: {
    borderColor: "gray",
    width: "70%",
    borderWidth: 1,
    borderRadius: 999,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#333",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },

  button: {
    
  },
});
