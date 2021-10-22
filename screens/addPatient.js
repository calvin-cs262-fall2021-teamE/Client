import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
  Platform, TouchableOpacity, Keyboard, FlatList} from 'react-native';
import PatientEntry from '../patient/PatientEntry';
import {modalStyles} from "../styles/modalStyles";
import {styles} from "../styles/homework1Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function addPatient({navigation}) {

  /* Patient information variables */
  const [modalVisible, setModalVisible] = useState(false);
  const [patientList, setPatientList] = useState([]);
  const [name, setName] = useState();
  const [DOB, setDOB] = useState();
  const [registrationNumber, setRegistrationNumber] = useState();
  const [sex, setSex] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [ethnicity, setEthnicity] = useState();
  const [language, setLanguage] = useState();

 /* Lets entered patient object be filled */ 
  const handleAddPatientEntry = () => {
    Keyboard.dismiss();
    let patient = {name, DOB, sex, city, region, ethnicity, language}    //this is the only way I could create the patient object without getting an error.  Not optimal I know, but it works
    setPatientList([...patientList, patient]);
    setName(null);    //resets the memory of the patient form for next entry
    setDOB(null);
    setRegistrationNumber(null);
    setSex(null);
    setCity(null);
    setRegion(null);
    setEthnicity(null);
    setLanguage(null);
  }
  const addStartingPatient = () => {
    let patient = {name:"Fitsum Maru", DOB:"05/14/1999", sex:"Male", city:"Addis Ababa", region:"Addis Ababa", ethnicity:"Ethiopian (Habesha)", language:"Amharic"}
    setPatientList([...patientList, patient]);
  }
  useEffect(() => {
    addStartingPatient();
    }, [])
  return (
    /* Creation and display of patients */
    <View style={styles.container}>

        {/*Patients*/}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Patients</Text> 
          <View style={styles.items}>

            {/* Patients will go here */}
            {
              patientList.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => navigation.navigate('Patient Profile', item)}>
                    <PatientEntry text={item.name} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

        {/* Patient form modal */}
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
              <TextInput style={[modalStyles.input, { top: 140, left: 20}]} placeholder={'Registration number'} value={registrationNumber} onChangeText={text => setRegistrationNumber(text)}/>
              <TextInput style={[modalStyles.input, { top: 160, right: 10}]} placeholder={'Sex'} value={sex} onChangeText={text => setSex(text)}/>
              <TextInput style={[modalStyles.input, { top: 185, left: 40}]} placeholder={'City (town/village)'} value={city} onChangeText={text => setCity(text)}/>
              <TextInput style={[modalStyles.input, { top: 205, right: 5}]} placeholder={'Region'} value={region} onChangeText={text => setRegion(text)}/>
              <TextInput style={[modalStyles.input, { top: 245, leftt: 25}]} placeholder={'Ethnicity'} value={ethnicity} onChangeText={text => setEthnicity(text)}/>
              <TextInput style={[modalStyles.input, { top: 255, left: 15}]} placeholder={'Language'} value={language} onChangeText={text => setLanguage(text)}/>
             </KeyboardAvoidingView>

            {/* Button to close modal and add patient */}
                <Pressable
                  style={[modalStyles.buttonClose]}
                  onPress={() => { 
                    setModalVisible(!modalVisible)
                    handleAddPatientEntry()                    
                  }}
                >
                  <Text style={modalStyles.textStyle2}>Add Patient</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        {/* Plus button to open modal */}
        <Pressable
        style={[modalStyles.buttonAdd]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalStyles.textStyle}>+</Text>
      </Pressable>
      </View>

  );
}

