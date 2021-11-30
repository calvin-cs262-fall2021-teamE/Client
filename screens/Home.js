import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
  Platform, TouchableOpacity, Keyboard, FlatList, ScrollView, SnapshotViewIOSComponent
} from 'react-native';
import PatientEntry from '../patient/PatientEntry';
import { modalStyles } from "../styles/modalStyles";
import { styles } from "../styles/homework1Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Login from '../screens/Login';


/*
 * Main page where patients are displayed, added, and searched. Also holds menu and allows adding visits for patients.
*/
export default function Home({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [LoginModalVisible, setLoginModalVisible] = useState(false);

  const [data2, setData2] = useState([]);

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


  const Login = () => {
     return (

    <View>
    <Modal
      animationType="none"
      transparent={true}
      visible={LoginModalVisible}
      onRequestClose={() => {
        setLoginModalVisible(false);
      }
      } >
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
        </View>
      </View>
    </Modal>
  </View>
     );
 }


  /* Sync button to login and sync patient information */
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={[modalStyles.sync]}
          onPress={updatePatients} >
          <Icon name={'cloud-sync'} color={'#B72303'} size={40} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);



  /* Lets patient object be filled with input information */
  const handleAddPatientEntry = () => {
    Keyboard.dismiss();
    //let form = {doctor, student, primaryDiseases, secondaryDiseases, dischargedDate, notes}    //this is the only way I could create the patient object without getting an error.  Not optimal I know, but it works
    //  setVisitList([...visitList, visit]);
    let visits = [];
    let patient = { name, DOB, registrationNumber, sex, city, region, ethnicity, language, visits }    //this is the only way I could create the patient object without getting an error.  Not optimal I know, but it works
    setPatientList([...patientList, patient]);
    setName(null);

    setDOB(null);
    setRegistrationNumber(null);
    setSex(null);
    setCity(null);
    setRegion(null);
    setEthnicity(null);
    setLanguage(null);
    setModalVisible(false);
    navigation.navigate('Patient Profile', patient);
  }


  /* Lets entered visit object be filled */
  const handleAddVisitEntry = (visits) => {
    Keyboard.dismiss();
    let patient = paitentList.pop();    //removes most recently created patient from patient list *******pop may not work on this variable
    patient.visits = [{ date, doctor, student, primaryDiseases, secondaryDiseases, dischargedDate, notes }] //adds forms to that patient
    setPatientList([...patientList, patient]);     //pushes that patient back onto list
    setDate(null);
    setDoctor(null);
    setStudent(null);
    setPrimaryDiseases(null);
    setSecondaryDiseases(null);
    setDischargedDate(null);
    setNotes(null);
  }


  /* Update patient information from database */
  function updatePatients() {
    fetch('https://cs262-monopoly.herokuapp.com/patients')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    for (let i = 0; i < data.length; i++) {
      let patient = {
        name: (data[i].name), DOB: data[i].dob, registrationNumber: data[i].registrationnumber, sex: data[i].sex, city: data[i].city,
        region: data[i].region, ethnicity: data[i].ethnicity, language: data[i].lang, visits: []
      }
      patientList.push(patient);
    }
  }

  return (

    <View style={styles.container}>

      {/* searchbar */}
      <View>
        <TextInput style={[modalStyles.searchBar,]} placeholder={'search'} value={searchBar} onChangeText={text =>
          setSearchBar(text)} />
      </View>


      {/* Diplay of patient list on screen */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Patients</Text>
        {
          patientList.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => navigation.navigate('Patient Profile', item)}>
                <PatientEntry text={item.name} />
              </TouchableOpacity>)
          })
        }
      </View>


      {/* 'Add Patient' form modal */}
      <View style={modalStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }} >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>


              { /* 'Add Patient' portion of modal allowing for creation of a new patient object */}
              <ScrollView style={styles.items}>
                <KeyboardAvoidingView style={modalStyles.add}
                  behavior='postion'>
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


                  {/* Fields where patient information is entered */}
                  <View style={modalStyles.fieldWrapper} >
                    <TextInput style={[modalStyles.input,]} placeholder={'Full name'} value={name} onChangeText={text => setName(text)} />
                    <TextInput style={[modalStyles.input,]} placeholder={'mm/dd/yyyy'} value={DOB} onChangeText={text => setDOB(text)} />
                    <TextInput style={[modalStyles.input,]} placeholder={'Registration number'} value={registrationNumber} onChangeText={text => setRegistrationNumber(text)} />
                    <TextInput style={[modalStyles.input,]} placeholder={'M/F'} value={sex} onChangeText={text => setSex(text)} />
                    <TextInput style={[modalStyles.input,]} placeholder={'City (town/village)'} value={city} onChangeText={text => setCity(text)} />
                    <TextInput style={[modalStyles.input,]} placeholder={'Region'} value={region} onChangeText={text => setRegion(text)} />
                    <TextInput style={[modalStyles.input,]} placeholder={'Ethnicity'} value={ethnicity} onChangeText={text => setEthnicity(text)} />
                    <TextInput style={[modalStyles.input,]} placeholder={'Language'} value={language} onChangeText={text => setLanguage(text)} />
                  </View>
                </KeyboardAvoidingView>
              </ScrollView>


              {/* Button to close modal and add patient object */}
              <TouchableOpacity
                style={[modalStyles.buttonClose]}
                onPress={() => {
                  handleAddPatientEntry()
                }}>
                <Text style={modalStyles.textStyle2}>Add Patient</Text>
              </TouchableOpacity>


              {/* Button to close modal without adding patient or visit form */}
              <TouchableOpacity
                style={[modalStyles.close]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }} >
                <Icon name={'close-circle'} color={'#B72303'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>


      {/* Plus button to open modal to add patient and/or visit form */}
      <TouchableOpacity
        style={[modalStyles.buttonAdd]}
        onPress={() => setModalVisible(true)} >
        <Icon name={'plus-circle'} color={'#B72303'} size={70} />
      </TouchableOpacity>
    </View>

  );
}



