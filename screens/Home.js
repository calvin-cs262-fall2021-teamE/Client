import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
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

//import Login from '../screens/Login';


/*
 * Main page where patients are displayed, added, and searched. Also holds menu, sync, and allows adding visits for patients.
*/
export default function Home({ navigation }) {


  const [open, setOpen] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [LoginModalVisible, setLoginModalVisible] = useState(false);

  const [data2, setData2] = useState([]);
  //const [text, setText] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [patientList, setPatientList] = useState([]);
  const [tempPatientList, setTempPatientList] = useState([]);
  const [visitList, setVisitList] = useState([]);
  const [searchBar, setSearchBar] = useState();


  /* Patient information variables */
  const [name, setName] = useState();
  // const [DOB, setDOB] = useState(new Date());
  const [registrationNumber, setRegistrationNumber] = useState();
  const [sex, setSex] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [ethnicity, setEthnicity] = useState();
  const [language, setLanguage] = useState();
  



  const [DOB, setDOB] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || DOB;
    setShow(Platform.OS === 'ios');
    setDOB(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };



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
    //   let patient2 = {name: text};
    // setPatientList([...patientList, patient2]);
  }

  function refreshPage() {
    window.location.reload(false);
  }


  /* Update patient information from database */

  function updatePatients() {

    fetch('https://opus-data.herokuapp.com/patients')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

    // for (let i = 0; i < data.length; i++) {
    //   for (let j = 0; j < patientList.length; j++) {
    //     if (patientList[j].registrationNumber == data[i].registrationnumber) {
    //       patientList.splice(j, 1);
    //     }
    //   }
    // }

    // for (let i = 0; i < patientList.length; i++) {
    //   uploadPatient(patientList[i]);
    // }

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
    //setPatientList([...patientList]);
  }


  //updates the list of patients shown to user based on what is in the search bar
  //Returns: a list of patients whoes names contain the text in the search bar
  function updatePatientListSearchBar (searchedText) {  

      let patientListWithSearchString = [];
      for (let i = 0; i < patientList.length; i++) {
        if (patientList[i].name.toLowerCase().includes(searchedText.toLowerCase()) || searchBar == "" || searchBar == null) {
          patientListWithSearchString.push(patientList[i]);  //adds patient from master list of patients to list that will be returned if that patient's name
        }                                                    //contains the string in the search bar
      }
      return patientListWithSearchString;  //returns updated patient list containing only patients whoes names include the search string
  }

  //not currentl used, but maybe userful later
  function updatePatientListSearchBar2 () {

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


    // *************************** uncomment to have preadded patient *************************************************************
   //   uploadPatients();
   //   updatePatients();
    

  return (

    <View style={styles.container}>

      {/* Searchbar View (handles text entering)*/}
      <View>
        <TextInput style={[modalStyles.searchBar,]} placeholder={'search'} value={searchBar}  onChangeText={text => handleSearchBarChange(text)} />
        {/*         onChange={() => setTempPatientList(updatePatientListSearchBar(searchBar))}  inside of TextInput does not work, but is close*/}

        
        {/* search Button   ----- maybe could be deleted*/}
        <TouchableOpacity
          style={[modalStyles.searchButton]}
          onPress={() => setTempPatientList(updatePatientListSearchBar(searchBar))} >
          <SearchIcon name={'search'} color={'#B72303'} size={22} />
        </TouchableOpacity> 

      </View>

      {/* Diplay of patient list on screen */}
      <ScrollView style={styles.tasksWrapper}>


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
                    <TextInput style={[modalStyles.input,]} placeholder={'mm/dd/yyyy'} value={DOB} onPressIn={showDatepicker} />               
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={DOB}
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
                  setModalVisible(!modalVisible)
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