import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const profileStyles = StyleSheet.create({
  top: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    height: 250,
    backgroundColor: 'white',
  },
  container: {       //if the visit list looks weird, copy the container from homework1Styles.js and see if that is better
    paddingVertical: 6,
    left: 150,
    bottom: 115,
    width: 200,
    lineHeight: 5,
  },
  // visitContainer: {       //if the visit list looks weird, copy the container from homework1Styles.js and see if that is better
  //   flex: 1,
  // },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  left: {
    flex: 1,
    marginTop: 5,
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
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 10,
  },
  form: {
    right: 55,
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  buttonAdd: {
    top: 660,
    left: 320,
    position: 'absolute',
  },
  visitContainer: {
    flex: 1,
    height: 200,
    backgroundColor: '#F9F9F9',
    marginTop: 10,
  }
});

