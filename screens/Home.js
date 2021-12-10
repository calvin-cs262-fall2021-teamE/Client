import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  Alert, KeyboardAvoidingView, Image, StyleSheet, Text, View, TextInput, Modal, Pressable,
  Platform, TouchableOpacity, Keyboard, FlatList, ScrollView, SnapshotViewIOSComponent, Button,
} from 'react-native';
import PatientEntry from '../patient/PatientEntry';
import { modalStyles } from "../styles/modalStyles";
import { styles } from "../styles/homework1Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import SearchIcon from 'react-native-vector-icons/Fontisto';
import {loginStyles} from '../styles/loginStyles';


/*
 * Main page where patients are displayed, added, and searched. Also holds menu, sync, and allows adding visits for patients.
*/
export default function Home({ navigation }) {

  /* Random variables */
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [LoginModalVisible, setLoginModalVisible] = useState(false);
  const [data2, setData2] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [patientList, setPatientList] = useState([]);
  const [tempPatientList, setTempPatientList] = useState([]);
  const [visitList, setVisitList] = useState([]);
  const [searchBar, setSearchBar] = useState();


  /* Patient information variables */
  const [name, setName] = useState();
  const [registrationNumber, setRegistrationNumber] = useState();
  const [sex, setSex] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [ethnicity, setEthnicity] = useState();
  const [language, setLanguage] = useState();
  const [DOB, setDOB] = useState();


  /* Code for Calender */
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };


  /* Sync button to login and sync patient information */
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={[modalStyles.sync]}
          onPress={() => setLoginModalVisible(true)} >
          <Icon name={'cloud-sync'} color={'#B72303'} size={40} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);


  /* Lets patient object be filled with input information */
  const handleAddPatientEntry = () => {
    Keyboard.dismiss();
    let visits = [];
    let patient = { name, DOB, registrationNumber, sex, city, region, ethnicity, language, visits }
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


  /* Resests information entry fields when modal is closed */
  const setNull = () => {
    setName(null);
    setDOB(null);
    setRegistrationNumber(null);
    setSex(null);
    setCity(null);
    setRegion(null);
    setEthnicity(null);
    setLanguage(null);
    setDate(new Date());
  }


  /* Uploads patient information to database */
  function uploadPatient(patient) {
    fetch('https://opus-data.herokuapp.com/patients', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "registrationNumber": patient.registrationNumber, "name": patient.name, "sex": patient.sex, "DOB": patient.DOB, "city": patient.city,
        "region": patient.region, "ethnicity": patient.ethnicity, "lang": patient.language
      })
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function uploadVisit(visit) {
    fetch('https://opus-data.herokuapp.com/patients', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "visitDate": visit.visitdate, "patient": visit.patient, "doctor": visit.doctor, "student": visit.student, "primarydiseases": visit.primaryDiseases,
        "secondarydiseases": visit.secondaryDiseases, "dischargeddate": visit.dischargedDate, "notes": visit.note
      })
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }


  /* Update patient information from database */
  function updatePatients() {
    let pListLen = patientList.length;
    setLoginModalVisible(false);
    fetch('https://opus-data.herokuapp.com/patients')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    for (let i = 0; i < patientList.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (patientList[i].registrationNumber == data[j].registrationnumber) {
          patientList.splice(i);
          i--;
        }
      }
    }
    for (let i = 0; i < patientList.length; i++) {
      uploadPatient(patientList[i]);
      // for (let j = 0; j < patientList[i].visits.length; j++) {
      //   uploadVisit(patientList[i].visits[j]);
      // }
    }
    fetch('https://opus-data.herokuapp.com/patients')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    for (let i = 0; i < patientList.length; i++) {
      patientList.shift();
    }
    for (let i = 0; i < data.length; i++) {
      let patient = {
        name: (data[i].name), DOB: data[i].dob, registrationNumber: data[i].registrationnumber, sex: data[i].sex, city: data[i].city,
        region: data[i].region, ethnicity: data[i].ethnicity, language: data[i].lang, visits: []
      }
      patientList.push(patient);
    }
    fetch('https://opus-data.herokuapp.com/visits')
      .then((response) => response.json())
      .then((json) => setData2(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    for (let i = 0; i < data2.length; i++) {
      let visit = { date: data2[i].visitdate, doctor: data2[i].doctor, student: data2[i].student, primaryDiseases: data2[i].primarydiseases, secondaryDiseases: data2[i].secondarydiseases, dischargedDate: data2[i].dischargeddate, note: data2[i].notes };
      for (let j = 0; j < patientList.length; j++) {
        if (patientList[j].registrationNumber == data2[i].patient) {
          patientList[j].visits.push(visit);
        }
      }
    }
    if (pListLen != patientList.length) {
      Alert.alert("Succesfully Synced with Server!");
    }
    else {
      if (pListLen == 0) {
        Alert.alert("Communication with Server Failed. Please try again.")
      }
    }

  }

  /* Authenticate user info for login */
  function authenticateLogin() {
    if ((username == 'adamBrink') && (password == 'blueberry')) {
      updatePatients();
    }
    else {
      Alert.alert("Incorrect username or password");
    }
  }


  /* Code to handle searching for patients using a search bar */
  function updatePatientListSearchBar(searchedText) {
    let patientListWithSearchString = [];
    for (let i = 0; i < patientList.length; i++) {
      if (patientList[i].name.toLowerCase().includes(searchedText.toLowerCase()) || searchBar == "" || searchBar == null) {
        patientListWithSearchString.push(patientList[i]);  //adds patient from master list of patients to list that will be returned if that patient's name
      }                                                    //contains the string in the search bar
    }
    return patientListWithSearchString;  //returns updated patient list containing only patients whoes names include the search string
  }
  //not currentl used, but maybe userful later
  function updatePatientListSearchBar2() {
    let patientListWithSearchString = [];
    for (let i = 0; i < patientList.length; i++) {
      if (patientList[i].name.toLowerCase().includes(searchBar.toLowerCase()) || searchBar == "" || searchBar == null) {
        patientListWithSearchString.push(patientList[i]);
      }
    }
    return patientListWithSearchString;  //returns updated patient list containing only patients whoes names include the search string
  }
  function handleSearchBarChange(text) {  //called when search bar texted is updated, updates searchBar var and updates shown patient list
    setSearchBar(text);
    setTempPatientList(updatePatientListSearchBar(text));
  }
  function change2() {    // not currently used, but maybe useful later
    setTempPatientList(updatePatientListSearchBar2());
  }
  useEffect(() => {
    setTempPatientList(patientList);
  });



  return (
    <View style={styles.container}>
      <ScrollView style={[styles.tasksWrapper, styles.absoluteFill]} >

        {/* Searchbar View (handles text entering)*/}
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={[modalStyles.searchBar,]} placeholder={'search...'} value={searchBar} onChangeText={text => handleSearchBarChange(text)} />
          <TouchableOpacity
            style={[modalStyles.searchButton]}
            onPress={() => setTempPatientList(updatePatientListSearchBar(searchBar))} >
            <SearchIcon name={'search'} color={'#B72303'} size={22} />
          </TouchableOpacity>
        </View>


        {/* Diplay of patient list on screen */}
        <Text style={styles.sectionTitle}>Patients</Text>
        {
          tempPatientList.map((item, index) => {
            //if (searchBar == "")  {  //not searching a patient, displays all patients
            return (
              <TouchableOpacity key={index} onPress={() => navigation.navigate('Patient Profile', item)}>
                <PatientEntry text={item.name} />
              </TouchableOpacity>)
          })
        }
      </ScrollView>


      {/* Login Modal */}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={LoginModalVisible}
          onRequestClose={() => {
            setLoginModalVisible(false);
          }
          } >
          <View style={loginStyles.centeredView}>
            <View style={loginStyles.modalView}>
              <Text style={styles.sectionTitle}>Login </Text>

              {/* Button to exit login */}
              <TouchableOpacity
                style={loginStyles.close}
                onPress={() => {
                  setLoginModalVisible(false);
                  setNull();
                }} >
                <Icon name={'close-circle'} color={'#B72303'} size={30} />
              </TouchableOpacity>

              {/* Fields */}
              <Image style={loginStyles.logo} source={require('../opusLogo.png')} />

              <View style={loginStyles.fieldStyle}>
                <Text style={loginStyles.field}>Username: </Text>
                <Text style={loginStyles.field}>Password: </Text>
              </View>

              <TextInput style={[loginStyles.input,]} placeholder={'Username'}
                placeholder={'Username'} value={username} onChangeText={text => setUsername(text)} />
              <TextInput style={[loginStyles.input,]} placeholder={'Password'}
                placeholder={'Password'} secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} />
              
              {/* Button to submit login */}
              <TouchableOpacity
                style={[modalStyles.buttonClose]}
                onPress={() => {
                  authenticateLogin()
                }}>
                <Text style={modalStyles.textStyle2}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
                    <Text style={modalStyles.field}>Name: </Text>
                    <Text style={modalStyles.field}>Date of Birth: </Text>
                    <Text style={modalStyles.field}>Registration number: </Text>
                    <Text style={modalStyles.field}>Sex: </Text>
                    <Text style={modalStyles.field}>City (town/village): </Text>
                    <Text style={modalStyles.field}>Region: </Text>
                    <Text style={modalStyles.field}>Ethnicity: </Text>
                    <Text style={modalStyles.field}>Language: </Text>
                  </View>


                  {/* Fields where patient information is entered */}
                  <View style={modalStyles.fieldWrapper} >
                    <TextInput style={[modalStyles.input,]} placeholder={'Full name'} value={name} onChangeText={text => setName(text)} />
                    <TextInput style={[modalStyles.input,]} placeholder={'mm/dd/yyyy'} value={date.toLocaleDateString()} onPressIn={showDatepicker} onEndEditing={() => setDOB(date.toLocaleDateString('en-US'))} />
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={"date"}
                        format="DD-MM-YYYY"
                        display="default"
                        onChange={onChange}
                      />
                    )}
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
                  setModalVisible(!modalVisible);
                  setNull();
                }} >
                <Icon name={'close-circle'} color={'#B72303'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View >


      {/* Plus button to open modal to add patient and/or visit form */}
      < TouchableOpacity
        style={[modalStyles.buttonAdd]}
        onPress={() => setModalVisible(true)
        } >
        <Icon name={'plus-circle'} color={'#B72303'} size={70} />
      </TouchableOpacity >
    </View >

  );
}