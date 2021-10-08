import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, KeyboardAvoidingView, TextInput } from "react-native";
import {modalStyles} from "../styles/modalStyles"

export default function addPatient () {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={modalStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}>Add a new patient</Text>

          
              <TextInput style={modalStyles.input, modalStyles.fname} placeholder={'First name'} />
              <TextInput style={modalStyles.input, modalStyles.lname} placeholder={'Last name'} />
              <TextInput style={modalStyles.input, modalStyles.dob} placeholder={'Date of birth'} />
              <TextInput style={modalStyles.input, modalStyles.age} placeholder={'Age'} />
              <TextInput style={modalStyles.input, modalStyles.height} placeholder={'Height'} />
              <TextInput style={modalStyles.input, modalStyles.weight} placeholder={'Weight'} />
       


            <Pressable
              style={[modalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalStyles.textStyle2}>Add Patient</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[modalStyles.buttonAdd]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalStyles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
};



