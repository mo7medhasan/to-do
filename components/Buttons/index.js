import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Buttons({filter,setFilter}) {
  const dataView = ["ALL", "ACTIVE", "DONE"];
  function Button({ title,filter,setFilter }) {
    return (
      <TouchableOpacity style={title===filter?styles.ButtonActive:styles.Button} onPress={()=>setFilter(title)}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
  <View  style={styles.container}  contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}> 
      <FlatList
        data={dataView}
        renderItem={({ item, index }) => <Button title={item} setFilter={setFilter} filter={filter} />}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 10,

  },
  ButtonActive: {
    padding: 25,
    paddingVertical: 15,
    borderRadius: 999,
    backgroundColor: "red",
  },Button: {
    padding: 25,
    paddingVertical: 15,
    borderRadius: 999,
    backgroundColor: "#999",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});
