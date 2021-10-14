import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
  Platform, TouchableOpacity, Keyboard} from 'react-native';
import Task from './Task';
import {modalStyles} from "../styles/modalStyles";
import {styles} from "../styles/homework1Styles";
import {Patient} from "../PatientClass";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [name, setName] = useState();
  const [DOB, setDOB] = useState();
  const [patientList, setPatientList] = useState();

  const handleAddTask = () => {
    Keyboard.dismiss();
    //let patient = Patient(name, DOB);        Need to create patient object here and replace name with this patient on the following line (but error :( 
    setTaskItems([...taskItems, name]);
    setName(null);    //resets the memory of the patient form for next entry
    setTask(null);    //maybe this can be deleted
    setDOB(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    /*code from homework 1 that allows and shows creation of patients */
    <View style={styles.container}>
      

        {/*Today's Tasks*/}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Patients</Text> 

          <View style={styles.items}>
            {/* Tasks will go here */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>

        </View>

        {/*the patient form modal */}
        <View style={modalStyles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(true);
            }}
          >
            <View style={modalStyles.centeredView}>
              <View style={modalStyles.modalView}>
                <Text style={modalStyles.modalText}>Add a new patient</Text>

          {/* Names of information fields */}
            <View style={modalStyles.fieldStyle}>
            <Text style={modalStyles.field}>Name:</Text> 
            <Text style={modalStyles.field}>Date of Birth:</Text> 
            <Text style={modalStyles.field}>Registration number:</Text> 
            <Text style={modalStyles.field}>Sex:</Text> 
            <Text style={modalStyles.field}>City (town/village):</Text> 
            <Text style={modalStyles.field}>Region:</Text> 
            <Text style={modalStyles.field}>Ethnicity:</Text> 
            <Text style={modalStyles.field}>Language:</Text> 
            </View>

          {/* Fields where information is entered*/}
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={modalStyles.fieldWrapper} >
              <TextInput style={[modalStyles.input, { top: 100, right: 15}]} placeholder={'Full name'} value={name} onChangeText={text => setName(text)} /> 
              <TextInput style={[modalStyles.input, { top: 120, left: 10}]} placeholder={'Date of birth'} value={DOB} onChangeText={text => setDOB(text)} />
              <TextInput style={[modalStyles.input, { top: 140, left: 20}]} placeholder={'Registration number'} />
              <TextInput style={[modalStyles.input, { top: 160, right: 10}]} placeholder={'Sex'} />
              <TextInput style={[modalStyles.input, { top: 185, left: 40}]} placeholder={'City (town/village)'} />
              <TextInput style={[modalStyles.input, { top: 205, right: 5}]} placeholder={'Region'} />
              <TextInput style={[modalStyles.input, { top: 245, leftt: 25}]} placeholder={'Ethnicity'} />
              <TextInput style={[modalStyles.input, { top: 255, left: 15}]} placeholder={'Language'} />
             </KeyboardAvoidingView>

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
        <Pressable
        style={[modalStyles.buttonAdd]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalStyles.textStyle}>+</Text>
      </Pressable>
      </View>

  );
}

