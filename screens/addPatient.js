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

        {/*Add a Patient*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'...'} value={task}
            onChangeText={text => setTask(text)}
          />

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>



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

              
                  <TextInput style={modalStyles.input, modalStyles.fname} placeholder={'Full name'} value={name} onChangeText={text => setName(text)} /> 
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
      </View>

  );
}

