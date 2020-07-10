import React from "react";

import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f7287b",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 36,
    width: "100%",
    height: 90,
  },
  headertitle: {
    fontSize: 24,
    color: "black",
  },
});
