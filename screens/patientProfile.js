import React, { useState } from 'react';
import { Button, FlatList, KeyboardAvoidingView, Pressable, Text, TextInput, TouchableOpacity, Modal, ScrollView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { profileStyles } from '../styles/profileStyles';
import { modalStyles } from '../styles/modalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';  //for editing pencil
import EvilIcons from 'react-native-vector-icons/EvilIcons';    //for deleting trashcan
import VisitEntry from '../patient/VisitEntry';
import { styles } from "../styles/homework1Styles";


/* 
 * PatientProfile displays Patient-specific information along with various forms corresponding to the patients visit
 * to the doctor.
 */
export default function PatientProfile({ route, navigation }) {

    const [addVisitModalVisible, setAddVisitModalVisible] = useState(false);
    const [visitModalVisible, setVisitModalVisible] = useState(false);
    const [doctor, setDoctor] = useState();
    const [student, setStudent] = useState();
    const [primaryDiseases, setPrimaryDiseases] = useState();
    const [secondaryDiseases, setSecondaryDiseases] = useState();
    const [dischargedDate, setDischargedDate] = useState();
    const [note, setNote] = useState();
    const [date, setDate] = useState();
    const [editMode, setEditMode] = useState(false);    //used to track if the user is editing a visit
    const [index, setIndex] = useState();               //used to set and save the index of the visit clicked (could be leveraged more)
    var visitClickedIndex = 0;                          //This var is set to the index of the visit clicked to allow that visit's info to be shown
    let visitList = route.params.visits;                //list of visit objects is stored in this variable.  Passed here from home page


    {/* Sets all data fields to null */ }
    const setVisitFieldsToNull = () => {
        setDate(null);
        setDoctor(null);
        setStudent(null);
        setPrimaryDiseases(null);
        setSecondaryDiseases(null);
        setDischargedDate(null);
        setNote(null);
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
            <View><Text style={profileStyles.sectionTitle}>Visits</Text></View>



            {/*Visit list contatiner*/}

            <View style={profileStyles.tasksWrapper}>
                <ScrollView style={styles.items}>

                    {/* Visits displayed here */}
                    {visitList.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => {

                                /* sets variables to be shown in visit view modal */
                                setIndex(index);
                                visitClickedIndex = index;
                                setDate(visitList[visitClickedIndex].date)
                                setDoctor(visitList[visitClickedIndex].doctor)
                                setStudent(visitList[visitClickedIndex].student)
                                setPrimaryDiseases(visitList[visitClickedIndex].primaryDiseases)
                                setSecondaryDiseases(visitList[visitClickedIndex].secondaryDiseases)
                                setDischargedDate(visitList[visitClickedIndex].dischargedDate)
                                setNote(visitList[visitClickedIndex].note)

                                setVisitModalVisible(true);
                            }}>
                                <VisitEntry text={item.date} />
                            </TouchableOpacity>
                        )
                    })}
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
                    }}>
                    <View style={modalStyles.centeredView}>
                        <View style={modalStyles.modalView}>
    
                                <ScrollView style={styles.items}>
                                        <Text style={[modalStyles.modalText, ]}>Add a new visit</Text>


                                        {/* Names of information fields */}
                                        <View style={modalStyles.fieldStyle}>
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
                                            <TextInput style={[modalStyles.input,]} placeholder={'Date'} value={date} onChangeText={text => setDate(text)} />
                                            <TextInput style={[modalStyles.input,]} placeholder={'Doctor'} value={doctor} onChangeText={text => setDoctor(text)} />
                                            <TextInput style={[modalStyles.input,]} placeholder={'Student'} value={student} onChangeText={text => setStudent(text)} />
                                            <TextInput style={[modalStyles.input,]} placeholder={'Primary diseases'} value={primaryDiseases} onChangeText={text => setPrimaryDiseases(text)} />
                                            <TextInput style={[modalStyles.input,]} placeholder={'Secondary diseases'} value={secondaryDiseases} onChangeText={text => setSecondaryDiseases(text)} />
                                            <TextInput style={[modalStyles.input,]} placeholder={'mm/dd/yyyy'} value={dischargedDate} onChangeText={text => setDischargedDate(text)} />
                                            <TextInput style={[modalStyles.input,]} placeholder={'Notes'} value={note} onChangeText={text => setNote(text)} />
                                        </View>
                                </ScrollView>


                                {/* Button to close modal and add visit */}
                                <Pressable
                                    style={[modalStyles.buttonClose, { bottom: 100 }]}
                                    onPress={() => {
                                        setAddVisitModalVisible(!addVisitModalVisible)
                                        let visit = { date, doctor, student, primaryDiseases, secondaryDiseases, dischargedDate, note }
                                        visitList.unshift(visit);  //adds created visit to the patient's visit list
                                        setVisitFieldsToNull(); //prevents old data from showing up in add patient modal fields
                                    }}>
                                    <Text style={modalStyles.textStyle2}>Add Visit</Text>
                                </Pressable>


                                {/* Button to close modal without adding patient */}
                                <TouchableOpacity
                                    style={[modalStyles.close]}
                                    onPress={() => {
                                        setAddVisitModalVisible(!addVisitModalVisible)
                                    }}>
                                    <Icon name={'close-circle'} color={'#B72303'} size={30} />
                                </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>


            {/* DISPLAY visit modal */}
            <View style={modalStyles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={visitModalVisible}
                    onRequestClose={() => {
                        setVisitModalVisible(true);
                    }}>
                    <View style={modalStyles.centeredView}>
                        <View style={modalStyles.modalView}>


                            {/* Displays clicked Patient Visit */}
                            <View style={modalStyles.add}>
                                <Text style={[modalStyles.modalText, { right: 60 }]}> Visit - {date}</Text>
                                <View style={profileStyles.form}>
                                    <Text style={modalStyles.field}>Date: {date}</Text>
                                    <Text style={modalStyles.field}>Doctor: {doctor}</Text>
                                    <Text style={modalStyles.field}>Student: {student}</Text>
                                    <Text style={modalStyles.field}>Primary diseases: {primaryDiseases}</Text>
                                    <Text style={modalStyles.field}>Secondary diseases: {secondaryDiseases}</Text>
                                    <Text style={modalStyles.field}>Discharged Date: {dischargedDate}</Text>
                                    <Text style={modalStyles.field}>Notes: {note}</Text>
                                </View>
                            </View>


                            {/* Button to edit visit */}
                            <TouchableOpacity
                                style={[modalStyles.close]}
                                onPress={() => {
                                    setVisitFieldsToNull();  //Sets all data fields to null to more easily show errors in the app
                                    setVisitModalVisible(!visitModalVisible)
                                }} >
                                <Icon name={'close-circle'} color={'#B72303'} size={30} />
                            </TouchableOpacity>


                            {/* Button to delete visit */}
                            <TouchableOpacity
                                style={[modalStyles.delete]}
                                onPress={() => {
                                    setEditMode(false);  //makes edit modal invisible
                                    setVisitModalVisible(false) //makes visit viewing modal invisible (as well)
                                    let visitIndex = index;
                                    visitList = visitList.splice(visitIndex, 1);
                                    setVisitFieldsToNull();
                                }} >
                                <EvilIcons name={'trash'} color={'#B72303'} size={40} />
                            </TouchableOpacity>


                            {/* Button to close modal */}
                            <TouchableOpacity
                                style={[modalStyles.editVisit]}
                                onPress={() => {
                                    setEditMode(true);
                                }} >
                                <EvilIcons name={'pencil'} color={'#B72303'} size={40} />
                            </TouchableOpacity>


                        </View>
                    </View>
                </Modal>
            </View>


            {/* EDIT visit modal */}
            <View style={modalStyles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={editMode}
                    onRequestClose={() => {
                        setEditMode(true);
                    }}>
                    <View style={modalStyles.centeredView}>
                        <View style={modalStyles.modalView}>


                            <ScrollView style={styles.items}>
                                <Text style={[modalStyles.modalText, ]}>Edit {date} Visit</Text>


                                {/* Names of information fields */}
                                <View style={modalStyles.fieldStyle}>
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
                                    <TextInput style={[modalStyles.input,]} placeholder={date} value={date} onChangeText={text => setDate(text)} />
                                    <TextInput style={[modalStyles.input,]} placeholder={doctor} value={doctor} onChangeText={text => setDoctor(text)} />
                                    <TextInput style={[modalStyles.input,]} placeholder={student} value={student} onChangeText={text => setStudent(text)} />
                                    <TextInput style={[modalStyles.input,]} placeholder={primaryDiseases} value={primaryDiseases} onChangeText={text => setPrimaryDiseases(text)} />
                                    <TextInput style={[modalStyles.input,]} placeholder={secondaryDiseases} value={secondaryDiseases} onChangeText={text => setSecondaryDiseases(text)} />
                                    <TextInput style={[modalStyles.input,]} placeholder={dischargedDate} value={dischargedDate} onChangeText={text => setDischargedDate(text)} />
                                    <TextInput style={[modalStyles.input,]} placeholder={note} value={note} onChangeText={text => setNote(text)} />
                                </View>
                            </ScrollView>


                            {/* Button to close visit edit */}
                            <TouchableOpacity
                                style={[modalStyles.close]}
                                onPress={() => {
                                    setVisitFieldsToNull();  //Sets all data fields to null to more easily show errors in the app
                                    setEditMode(!editMode);  //makes edit modal invisible
                                    setVisitModalVisible(!visitModalVisible);  //makes visit viewing modal invisible (as well)
                                }} >
                                <Icon name={'close-circle'} color={'#B72303'} size={30} />
                            </TouchableOpacity>

                            {/* Button to close modal and save visit changes */}
                            <Pressable
                                style={[modalStyles.buttonClose, { bottom: 100 }]}
                                onPress={() => {
                                    setEditMode(false);  //makes edit modal invisible
                                    setVisitModalVisible(false) //makes visit viewing modal invisible (as well)

                                    //sets the old visit to the newly created visit
                                    let visit = { date, doctor, student, primaryDiseases, secondaryDiseases, dischargedDate, note }
                                    let visitIndex = index;
                                    visitList[visitIndex] = visit;   

                                    setVisitFieldsToNull(); //prevents old data from showing up in add patient modal fields
                                }}>
                                <Text style={modalStyles.textStyle2}>Save Changes</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>

            {/* Plus button to open ADD visit modal */}
            <TouchableOpacity
                style={[profileStyles.buttonAdd,]}
                onPress={() => setAddVisitModalVisible(true)}>
                <Icon name={'plus-circle'} color={'#B72303'} size={70} />
            </TouchableOpacity>
        </View>
    );
}