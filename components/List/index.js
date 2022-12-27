import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default function List({ data, setData, item }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        setData((prev) => {
          prev[item?.id - 1] = {
            ...prev[item?.id - 1],
            done: !prev[item?.id - 1]?.done,
          };
          return [...prev];
        })
      }
    >
      {item.done ? (
        <Feather name="check-square" size={24} color="red" />
      ) : (
        <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
      )}

      <Text style={item?.done ? styles.textDone : styles.textActive}>
        {item?.text}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  textDone: {
    fontSize: 25,
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textShadowColor: "red",
    marginHorizontal: 20,
  },
  textActive: {
    fontSize: 25,
    color: "#999",
    marginHorizontal: 20,
  },
});
