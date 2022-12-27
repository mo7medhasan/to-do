import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Header({title}) {
  return (<>
    <Text style={styles.titleText}>to do </Text>
    <Text
      style={{
        fontSize: 20,
        color: "#999",
        fontWeight: "bold",
        marginVertical: 20,
        textAlign: "center",
      }}
    >
      TODO-
      <Text
        style={{
          color: "#777",
          fontWeight: "500",
          marginVertical: 20,
        }}
      >
        dodododo
      </Text>
    </Text></>
  )
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  });
  