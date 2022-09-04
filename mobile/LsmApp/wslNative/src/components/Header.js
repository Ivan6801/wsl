import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import logo from "../assets/icons/WSL.png"

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "#E5E5E5",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 5,
    paddingBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 6,
    marginLeft: 3,
  },
})