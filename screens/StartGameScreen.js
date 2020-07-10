import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.textValue}>Select a Number</Text>
        <TextInput placeholder="Enter Number"></TextInput>
        <View style={styles.buttonContainer}>
          <Button title="RESET"></Button>
          <Button title="CONFIRM"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 21,
    marginBottom: 20,
  },
  textValue: {
    fontSize: 18,
  },
  inputContainer: {
    elevation: 5,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

export default StartGameScreen;
