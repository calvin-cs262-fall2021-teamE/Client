import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, KeyboardAvoidingView, TextInput } from "react-native";
import {modalStyles} from "../styles/modalStyles"
import {Patient} from "../PatientClass"



export default function addPatient () {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState();
  const [DOB, setDOB] = useState();
  const [patientList, setPatientList] = useState();

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

          
              <TextInput style={modalStyles.input, modalStyles.fname} placeholder={'First name'} value = {name} /> {/* value field holds the value input by user*/}
              <TextInput style={modalStyles.input, modalStyles.lname} placeholder={'Last name'} />
              <TextInput style={modalStyles.input, modalStyles.dob} placeholder={'Date of birth'} value = {DOB}/>
              <TextInput style={modalStyles.input, modalStyles.age} placeholder={'Age'} />
              <TextInput style={modalStyles.input, modalStyles.height} placeholder={'Height'} />
              <TextInput style={modalStyles.input, modalStyles.weight} placeholder={'Weight'} />
              
              

            <Pressable
              style={[modalStyles.buttonClose]}
              onPress={() => { 
                setModalVisible(!modalVisible)
                {/* let patient = Patient(name, DOB) */}
                
              }}
            >
              <Text style={modalStyles.textStyle2}>Add Patient</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View> 
              {() => { 
                <Text style={modalStyles.modalText}>Add a new patient</Text>
                setPatientList( patient1 = Patient("John Doe", "78") );
              displayPatients(patientList); 
              displayPatients([Patient("John Doe", "78")]);  }
              }
      </View>

      <Pressable
        style={[modalStyles.buttonAdd]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalStyles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
};



function displayPatients(patientList) {
  <Text style={modalStyles.modalText}>Add a new patient</Text>
  if (patientList.len > 0) {
    for (let i = 0; i < patientList.len; i++) {
      <modalView>         <TextStyle>{patientList[i].name}</TextStyle> </modalView>

    }
  }
}