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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
               <KeyboardAvoidingView style={modalStyles.add}
               behavior = 'postion'>
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
            <View style={modalStyles.fieldWrapper} >
              <TextInput style={[modalStyles.input, ]} placeholder={'Full name'} value={name} onChangeText={text => setName(text)} /> 
              <TextInput style={[modalStyles.input, ]} placeholder={'mm/dd/yyyy'} value={DOB} onChangeText={text => setDOB(text)} />
              <TextInput style={[modalStyles.input, ]} placeholder={'Registration number'} value={registrationNumber} onChangeText={text => setRegistrationNumber(text)}/>
              <TextInput style={[modalStyles.input, ]} placeholder={'M/F'} value={sex} onChangeText={text => setSex(text)}/>
              <TextInput style={[modalStyles.input, ]} placeholder={'City (town/village)'} value={city} onChangeText={text => setCity(text)}/>
              <TextInput style={[modalStyles.input, ]} placeholder={'Region'} value={region} onChangeText={text => setRegion(text)}/>
              <TextInput style={[modalStyles.input, ]} placeholder={'Ethnicity'} value={ethnicity} onChangeText={text => setEthnicity(text)}/>
              <TextInput style={[modalStyles.input, ]} placeholder={'Language'} value={language} onChangeText={text => setLanguage(text)}/>
             </View>

            {/* Button to close modal and add patient */}
                <TouchableOpacity
                  style={[modalStyles.buttonClose]}
                  onPress={() => { 
                    setModalVisible(!modalVisible)
                    handleAddPatientEntry()                    
                  }}
                >
                  <Text style={modalStyles.textStyle2}>Add Patient</Text>
                </TouchableOpacity>
              
              </KeyboardAvoidingView> 

            {/* 'Add Visit' form */}
              <KeyboardAvoidingView style={modalStyles.add}>

              <Text style={[modalStyles.modalText]}>Add a new visit</Text>
              {/* Names of information fields */}
                <View>
                    <Text style={modalStyles.field}>Doctor:</Text> 
                    <Text style={modalStyles.field}>Student:</Text> 
                    <Text style={modalStyles.field}>Primary diseases:</Text> 
                    <Text style={modalStyles.field}>Secondary diseases:</Text> 
                    <Text style={modalStyles.field}>Discharged date:</Text> 
                    <Text style={modalStyles.field}>Notes:</Text> 
                    <Text style={modalStyles.field}>Attatchments:</Text> 
                  </View>

                {/* Fields where information is entered */}
                <View style={modalStyles.fieldWrapper} >
                <TextInput style={[modalStyles.input, ]} placeholder={'Full Name'} value={name} onChangeText={text => setName(text)} /> 
                <TextInput style={[modalStyles.input, ]} placeholder={'Full Name'} value={DOB} onChangeText={text => setDOB(text)} />
                <TextInput style={[modalStyles.input,]} placeholder={'Disease'} value={registrationNumber} onChangeText={text => setRegistrationNumber(text)}/>
                <TextInput style={[modalStyles.input,]} placeholder={'Disease'} value={sex} onChangeText={text => setSex(text)}/>
                <TextInput style={[modalStyles.input, ]} placeholder={'mm/dd/yyyy'} value={city} onChangeText={text => setCity(text)}/>
                <TextInput style={[modalStyles.input, ]} placeholder={'Notes'} value={region} onChangeText={text => setRegion(text)}/>
                </View>

              {/* Button to close modal and add visit */}
                <Pressable
                  style={[modalStyles.buttonClose,]}
                  onPress={() => { 
                    setModalVisible(!modalVisible)
                    handleAddPatientEntry()                    
                  }}
                >
                  <Text style={modalStyles.textStyle2}>Add Visit</Text>
                </Pressable>
                
              </KeyboardAvoidingView>
              </Swiper>

              {/* Button to close modal without adding patient */}
            <TouchableOpacity
                  style={[modalStyles.close]}
                  onPress={() => { 
                    setModalVisible(!modalVisible)                  
                  }}
                >
                  <Icon name={'close-circle'} color={'#B72303'} size={30}/>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>
        </View>

        {/* Plus button to open modal */}
        <TouchableOpacity
       style={[modalStyles.buttonAdd]}
        onPress={() => setModalVisible(true)}
      >
        <Icon name={'plus-circle'} color={'#B72303'} size={70}/>
      </TouchableOpacity>
      </View>
  );
}

