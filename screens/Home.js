import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
  Platform, TouchableOpacity, Keyboard, FlatList, ScrollView, SnapshotViewIOSComponent} from 'react-native';
import PatientEntry from '../patient/PatientEntry';
import {modalStyles} from "../styles/modalStyles";
import {styles} from "../styles/homework1Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Swiper from 'react-native-swiper/src';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import  Visit  from './visit';



export default function addPatient({navigation}) {

  /* Patient information variables */
  const [modalVisible, setModalVisible] = useState(false);
  const [patientList, setPatientList] = useState([]);
  const [visitList, setVisitList] = useState([]);
  const [name, setName] = useState();
  const [DOB, setDOB] = useState();
  const [registrationNumber, setRegistrationNumber] = useState();
  const [sex, setSex] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [ethnicity, setEthnicity] = useState();
  const [language, setLanguage] = useState();
  const [doctor, setDoctor] = useState();
  const [student, setStudent] = useState();
  const [primaryDiseases, setPrimaryDiseases] = useState();
  const [secondaryDiseases, setSecondaryDiseases] = useState();
  const [dischargedDate, setDischargedDate] = useState();
  const [notes, setNotes] = useState();
  const [date, setDate] = useState();
  const [searchBar, setSearchBar] = useState();


 /* Lets entered patient object be filled */ 
  const handleAddPatientEntry = () => {
    Keyboard.dismiss();
    //setDoctor("Josiah");

    // ********************************* we need to implement a visit list to have multiple visits **********************************

    //let form = {doctor, student, primaryDiseases, secondaryDiseases, dischargedDate, notes}    //this is the only way I could create the patient object without getting an error.  Not optimal I know, but it works
    setVisitList([...visitList, visit]);
    let patient = {name, DOB, registrationNumber, sex, city, region, ethnicity, language, date, doctor, student, primaryDiseases, secondaryDiseases, dischargedDate, notes}    //this is the only way I could create the patient object without getting an error.  Not optimal I know, but it works
    setPatientList([...patientList, patient]);
    setName(null);    //resets the memory of the patient form for next entry
    setDOB(null);
    setRegistrationNumber(null);
    setSex(null);
    setCity(null);
    setRegion(null);
    setEthnicity(null);
    setLanguage(null);
    setDoctor(null);
    setStudent(null);
    setPrimaryDiseases(null);
    setSecondaryDiseases(null);
    setDischargedDate(null);
    setNotes(null);
  }

  /* Adds a patient at start of app */
   const addStartingPatient = () => {
     let patient = {name:"Fitsum Maru", DOB:"05/14/1999", registrationNumber: 1234, sex:"Male", city:"Addis Ababa", 
                     region:"Addis Ababa", ethnicity:"Ethiopian (Habesha)", language:"Amharic", date: "11/04/2021", doctor:"Josiah", student:"Adam", primaryDiseases:"Nerd", secondaryDiseases:"Straight", dischargedDate: "11/04/2021", notes:"gagonitic"}
     setPatientList([...patientList, patient]);
   }
   useEffect(() => {
     addStartingPatient();
     }, [])


  return (
    /* Creation and display of patients */
    <View style={styles.container}>

        {/*searchbar*/}
        {/*  In case the search bar affects our app on the phone, this is the code we get rid of   */}
        <View style={modalStyles.fieldStyle}>
        <TextInput style={[modalStyles.searchBar, ]} placeholder={'search'} value={searchBar} onChangeText={text => setSearchBar(text)} /> 
        </View>

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
                    <Text style={modalStyles.field}>Date:</Text> 
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
                <TextInput style={[modalStyles.input, ]} placeholder={'Date'} value={date} onChangeText={text => setDate(text)} /> 
                <TextInput style={[modalStyles.input, ]} placeholder={'Doctor'} value={doctor} onChangeText={text => setDoctor(text)} /> 
                <TextInput style={[modalStyles.input, ]} placeholder={'Student'} value={student} onChangeText={text => setStudent(text)} />
                <TextInput style={[modalStyles.input,]} placeholder={'Primary diseases'} value={primaryDiseases} onChangeText={text => setPrimaryDiseases(text)}/>
                <TextInput style={[modalStyles.input,]} placeholder={'Secondary diseases'} value={secondaryDiseases} onChangeText={text => setSecondaryDiseases(text)}/>
                <TextInput style={[modalStyles.input, ]} placeholder={'mm/dd/yyyy'} value={dischargedDate} onChangeText={text => setDischargedDate(text)}/>
                <TextInput style={[modalStyles.input, ]} placeholder={'Notes'} value={notes} onChangeText={text => setNotes(text)}/>
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

