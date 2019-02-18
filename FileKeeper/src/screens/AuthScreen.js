import React, { Component } from "react";
import { Text, TextInput, Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FAFAFB"
  },
  titleContainer: {
    flexGrow: 7
  },
  title: {
    color: "#272A2C",
    fontSize: 50,
    marginTop: "50%"
  },
  loginContainer: {
    padding: 20,
    flex: 1,
    flexGrow: 3,
    width: "100%",
    borderRadius: 4,
    marginBottom: "10%"
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#272A2C",
    height: 50,
    padding: 10,
    borderRadius: 2,
    marginTop: 4
  }
});

export default class Auth extends Component {
  render() {
    return (
      <View style={styles.baseContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FileKeeper</Text>
          <Text>The best way to securely store your files.</Text>
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="User"
            placeholderTextColor="#272A2C"
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#272A2C"
          />
          <Button title="Login" />
        </View>
      </View>
    );
  }
}
