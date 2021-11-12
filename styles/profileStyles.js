import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const profileStyles = StyleSheet.create({
  top: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    height: 250,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 10,
    paddingVertical: 6,
    left: 150,
    bottom: 130,
    width: 200
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  square: {
    marginTop: 40,
    marginLeft: 20,
    width: 100,
    height: 100,
    backgroundColor: "gray",
    borderRadius: 5,
    borderRadius: 60,
  },
  visit: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 10,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  form: {
    right: 80,
  },
});

