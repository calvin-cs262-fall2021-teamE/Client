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
    width: 300,
    lineHeight: 5,
  },
  modalView: {
    height: 775,
    width: 380,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
   // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
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
    paddingHorizontal: 5,
    textAlign: 'left',
  },
  field: {
    fontSize: 15,
    lineHeight: 60,
    textAlign: 'left',
    padding: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontSize: 25,
    fontWeight: 'bold',
  },
    add: {
    flex: 1,
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
  },
  editVisit: {  //edit visit pencil in edit visit modal
    //paddingVertical: 10,  // change to padding
    left: 283,
    top: 55,

  },
  delete: {   //delete visit trash can in edit visit modal
    //paddingVertical: 50,
    //paddingLeft: 10,
    top: 110,
  },
  close: {
    bottom: 550,
    left: 320,
  },
  deleteDoubleCheckModal: {
    height: 100,
    width: 380,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  buttonGoBack: {
    position: "absolute",
    top: 689,
    left: 15,
    borderRadius: 5,
    width: 110,
    height: 40,
    backgroundColor: "#B72303",
    alignItems: "center",
    justifyContent: "center",
  },
});

