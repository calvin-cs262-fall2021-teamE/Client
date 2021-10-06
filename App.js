import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, KeyboardAvoidingView, TextInput } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add a new patient</Text>

            <TextInput style={styles.input, styles.fname} placeholder={'First name'} />
            <TextInput style={styles.input, styles.lname} placeholder={'Last name'} />
            <TextInput style={styles.input, styles.dob} placeholder={'Date of birth'} />


            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle2}>Add Patient</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.buttonAdd]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height: 700,
    width: 350,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonAdd: {
    position: "absolute",
    borderRadius: 60,
    padding: 10,
    backgroundColor: "#B72303",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    bottom: 40,
    right: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 5,
    width: 80,
    height: 20,
    backgroundColor: "#B72303",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    fontSize: 15,
    color: 'gray',
  },
  fname: {
    top: 20,
    right: 105,
  },
  lname: {
    top: -7,
    right: 10,
  },
  dob: {
    top: 10,
    right: 97,
  },
});

export default App;