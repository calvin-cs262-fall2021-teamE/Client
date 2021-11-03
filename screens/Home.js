import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
  Platform, TouchableOpacity, Keyboard, FlatList, ScrollView} from 'react-native';
import PatientEntry from '../patient/PatientEntry';
import {modalStyles} from "../styles/modalStyles";
import {styles} from "../styles/homework1Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Swiper from 'react-native-swiper';
//import  Visit  from './visit';



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
    let patient = {name, DOB, registrationNumber, sex, city, region, ethnicity, language}    //this is the only way I could create the patient object without getting an error.  Not optimal I know, but it works
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

  /* Adds a patient at start of app */
  // const addStartingPatient = () => {
  //   let patient = {name:"Fitsum Maru", DOB:"05/14/1999", registrationNumber: 1234, sex:"Male", city:"Addis Ababa", 
  //                   region:"Addis Ababa", ethnicity:"Ethiopian (Habesha)", language:"Amharic"}
  //   setPatientList([...patientList, patient]);
  // }
  // useEffect(() => {
  //   addStartingPatient();
  //   }, [])


  return (
    /* Creation and display of patients */
    <View style={styles.container}>

        {/*Patients*/}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Patients</Text> 
          <ScrollView style={styles.items}>

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
          </ScrollView>
        </View>

        {/* 'Add Patient' + 'Add Visit' form modal */}
        <View style={modalStyles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(true);
            }}
          >

            <View style={modalStyles.centeredView}>
              <View style={modalStyles.modalView}>

              <Swiper style={modalStyles.swiper}
                      from={0}
                      minDistanceForAction={0.1}
                      loop={false}
                      controlsProps={{
                        dotsTouchable: true,
                      }}
                    > 
               <View style={modalStyles.add}>
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

          {/* Fields where information is entered */}
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={modalStyles.fieldWrapper} >
              <TextInput style={[modalStyles.input, { top: 169, right: 23}]} placeholder={'Full name'} value={name} onChangeText={text => setName(text)} /> 
              <TextInput style={[modalStyles.input, { top: 195, left: 32}]} placeholder={'mm/dd/yyyy'} value={DOB} onChangeText={text => setDOB(text)} />
              <TextInput style={[modalStyles.input, { top: 223, left: 80}]} placeholder={'Registration number'} value={registrationNumber} onChangeText={text => setRegistrationNumber(text)}/>
              <TextInput style={[modalStyles.input, { top: 250, right: 38}]} placeholder={'M/F'} value={sex} onChangeText={text => setSex(text)}/>
              <TextInput style={[modalStyles.input, { top: 277, left: 70}]} placeholder={'City (town/village)'} value={city} onChangeText={text => setCity(text)}/>
              <TextInput style={[modalStyles.input, { top: 305, right: 15}]} placeholder={'Region'} value={region} onChangeText={text => setRegion(text)}/>
              <TextInput style={[modalStyles.input, { top: 331, left: 3}]} placeholder={'Ethnicity'} value={ethnicity} onChangeText={text => setEthnicity(text)}/>
              <TextInput style={[modalStyles.input, { top: 358, left: 5}]} placeholder={'Language'} value={language} onChangeText={text => setLanguage(text)}/>
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

            {/* 'Add Visit' form */}
              <View style={modalStyles.add}>

              <Text style={[modalStyles.modalText, {right: 80}]}>Add a new visit</Text>
              {/* Names of information fields */}
                <View>
                    <Text style={modalStyles.field}>Doctor:</Text> 
                    <Text style={modalStyles.field}>Student:</Text> 
                    <Text style={modalStyles.field}>Primary diseases:</Text> 
                    <Text style={modalStyles.field}>Secondary diseases:</Text> 
                    <Text style={modalStyles.field}>Discharged date:</Text> 
                    <Text style={modalStyles.field}>Notes:</Text> 
                    <Text style={modalStyles.field}>Attatchments:</Text> 

                {/* Fields where information is entered */}
                <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={modalStyles.fieldWrapper} >
                <TextInput style={[modalStyles.input, { top: 17, right: 30}]} placeholder={'Full Name'} value={name} onChangeText={text => setName(text)} /> 
                <TextInput style={[modalStyles.input, { top: 43, right: 20}]} placeholder={'Full Name'} value={DOB} onChangeText={text => setDOB(text)} />
                <TextInput style={[modalStyles.input, { top: 70, left: 40}]} placeholder={'Disease'} value={registrationNumber} onChangeText={text => setRegistrationNumber(text)}/>
                <TextInput style={[modalStyles.input, { top: 97, left: 57}]} placeholder={'Disease'} value={sex} onChangeText={text => setSex(text)}/>
                <TextInput style={[modalStyles.input, { top: 123, left: 38}]} placeholder={'mm/dd/yyyy'} value={city} onChangeText={text => setCity(text)}/>
                <TextInput style={[modalStyles.input, { top: 150, right: 38}]} placeholder={'Notes'} value={region} onChangeText={text => setRegion(text)}/>
                </KeyboardAvoidingView>

              {/* Button to close modal and add visit */}
                <Pressable
                  style={[modalStyles.buttonClose, {left: 120, top: 600}]}
                  onPress={() => { 
                    setModalVisible(!modalVisible)
                    handleAddPatientEntry()                    
                  }}
                >
                  <Text style={modalStyles.textStyle2}>Add Visit</Text>
                </Pressable>
                </View>
              </View>
              </Swiper>

              {/* Button to close modal without adding patient */}
            <Pressable
                  style={[modalStyles.bClose]}
                  onPress={() => { 
                    setModalVisible(!modalVisible)                  
                  }}
                >
                  <Text style={modalStyles.close}>x</Text>
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

