import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
  Platform, TouchableOpacity, Keyboard} from 'react-native';
import Task from '../screens/Task';
import {modalStyles} from "../styles/modalStyles"
import {Patient} from "../PatientClass"

export default function patientEntryModal() {
    return(
      <View style={modalStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(true);
          }}
        >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Text style={modalStyles.modalText}>Add a new patient</Text>

            
                <TextInput style={modalStyles.input, modalStyles.fname} placeholder={'First name'} value={name} onChangeText={text => setName(text)} /> 
                <TextInput style={modalStyles.input, modalStyles.lname} placeholder={'Last name'} />
                <TextInput style={modalStyles.input, modalStyles.dob} placeholder={'Date of birth'} value={DOB} onChangeText={text => setDOB(text)} />
                <TextInput style={modalStyles.input, modalStyles.age} placeholder={'Age'} />
                <TextInput style={modalStyles.input, modalStyles.height} placeholder={'Height'} />
                <TextInput style={modalStyles.input, modalStyles.weight} placeholder={'Weight'} />

              <Pressable
                style={[modalStyles.buttonClose]}
                onPress={() => { 
                  setModalVisible(!modalVisible)
                  handleAddTask()
                  {/* let patient = Patient(name, DOB) */}
                  
                }}
              >
                <Text style={modalStyles.textStyle2}>Add Patient</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
);}
