import React, { useState } from 'react';
import { Button, FlatList, KeyboardAvoidingView, Pressable, Text, TextInput, TouchableOpacity, Modal, ScrollView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { profileStyles } from '../styles/profileStyles';
import { modalStyles } from '../styles/modalStyles';
import {styles} from "../styles/homework1Styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import PatientEntry from '../patient/PatientEntry';



export default function PatientProfile({ route, navigation }) {
    const [addVisitModalVisible, setAddVisitModalVisible] = useState(false);
    const [visitModalVisible, setVisitModalVisible] = useState(false);
    const [doctor, setDoctor] = useState();
    const [student, setStudent] = useState();
    const [primaryDiseases, setPrimaryDiseases] = useState();
    const [secondaryDiseases, setSecondaryDiseases] = useState();
    const [dischargedDate, setDischargedDate] = useState();
    const [notes, setNotes] = useState();
    const [date, setDate] = useState();
    var visitClickedIndex = 0;   //This var is set to the index of the visit clicked to allow that visit's info to be shown
    let visitList = route.params.visits;    //list of visit objects is stored in this variable.  Passed here from home page


    {/* Sets all data fields to null */}
    const setVisitFieldsToNull = () => {
        setDate(null);
        setDoctor(null);
        setStudent(null);
        setPrimaryDiseases(null);
        setSecondaryDiseases(null);
        setDischargedDate(null);
        setNotes(null);
    }

    return (

        /*Displays the Patient information*/
        <View>
            <View style={profileStyles.top}>
                <View style={profileStyles.square} />
                <View style={profileStyles.container}>
                    <Text style={profileStyles.name}>{route.params.name}</Text>
                    <Text>Date of Birth: {route.params.DOB}</Text>
                    <Text>Sex: {route.params.sex}</Text>
                    <Text>City of birth: {route.params.city}</Text>                  
                    <Text>Registration Number: {route.params.registrationNumber}</Text>   
                    <Text>Language: {route.params.language}</Text>
                    <Text>Region: {route.params.region}</Text>
                    <Text>Ethnicity: {route.params.ethnicity}</Text>
                </View>
            </View>

            {/*Visit list contatiner*/}
            <View style={styles.container}>
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Visits</Text> 
                    <ScrollView style={styles.items}>

                        {/* Visits displayed here */}
                        {visitList.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {

                                    {/* sets variables to be shown in visit view modal */}
                                    visitClickedIndex = index;
                                    setDate(visitList[visitClickedIndex].date)
                                    setDoctor(visitList[visitClickedIndex].doctor)
                                    setStudent(visitList[visitClickedIndex].student)
                                    setPrimaryDiseases(visitList[visitClickedIndex].primaryDiseases)
                                    setSecondaryDiseases(visitList[visitClickedIndex].secondaryDiseases)
                                    setDischargedDate(visitList[visitClickedIndex].dischargedDate)
                                    setNotes(visitList[visitClickedIndex].note)

                                    setVisitModalVisible(true);
                                    }}>
                                    <PatientEntry text={item.date} />
                                </TouchableOpacity>
                            )}) }
                    </ScrollView>
                </View>


                {/* 'Add Visit' form modal */}
                <View style={modalStyles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={addVisitModalVisible}
                        onRequestClose={() => {
                        setAddVisitModalVisible(true);
                        }}
                    >
                        <View style={modalStyles.centeredView}>
                            <View style={modalStyles.modalView}>
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
                                        setAddVisitModalVisible(!addVisitModalVisible)
                                        let visit = {date, doctor, student, primaryDiseases, secondaryDiseases, dischargedDate, notes}
                                        visitList.unshift(visit);  //adds created visit to the patient's visit list
                                        setVisitFieldsToNull(); //prevents old data from showing up in add patient modal fields
                                        }}
                                    >
                                        <Text style={modalStyles.textStyle2}>Add Visit</Text>
                                    </Pressable>
                                </KeyboardAvoidingView>


                                {/* Button to close modal without adding patient */}
                                <TouchableOpacity
                                    style={[modalStyles.close]}
                                    onPress={() => { 
                                        setAddVisitModalVisible(!addVisitModalVisible)                  
                                    }}
                                    >
                                        <Icon name={'close-circle'} color={'#B72303'} size={30}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>


                {/* Plus button to open ADD visit modal */}
                <TouchableOpacity
                style={[modalStyles.buttonAdd]}
                onPress={() => setAddVisitModalVisible(true)}
                >
                    <Icon name={'plus-circle'} color={'#B72303'} size={70}/>
                </TouchableOpacity>


                {/* DISPLAY visit modal button */}
                <View style={modalStyles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={visitModalVisible}
                        onRequestClose={() => {
                        setVisitModalVisible(true);
                        }}
                    >
                        <View style={modalStyles.centeredView}>
                            <View style={modalStyles.modalView}> 
                            
                                {/* Displays clicked Patient Visit */}
                                <View style={modalStyles.add}>
                                    <Text style={[modalStyles.modalText, {right: 60}]}> Visit - {date}</Text>
                                
                                    <View style={profileStyles.form}>
                                        <Text style={modalStyles.field}>Date: {date}</Text> 
                                        <Text style={modalStyles.field}>Doctor: {doctor}</Text> 
                                        <Text style={modalStyles.field}>Student: {student}</Text> 
                                        <Text style={modalStyles.field}>Primary diseases: {primaryDiseases}</Text> 
                                        <Text style={modalStyles.field}>Secondary diseases: {secondaryDiseases}</Text> 
                                        <Text style={modalStyles.field}>Discharged Date: {dischargedDate}</Text> 
                                        <Text style={modalStyles.field}>Notes: {notes}</Text>
                                    </View>   
                                </View>


                                {/* Button to close modal */}
                                <TouchableOpacity
                                    style={[modalStyles.close]}
                                    onPress={() => { 
                                        setVisitFieldsToNull();  //Sets all data fields to null to more easily show errors in the app
                                        setVisitModalVisible(!visitModalVisible)                  
                                    }}
                                    >
                                    <Icon name={'close-circle'} color={'#B72303'} size={30}/>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </View>
    );
  }