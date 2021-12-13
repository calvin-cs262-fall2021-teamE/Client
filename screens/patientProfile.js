import React, { useState } from 'react';
import { Alert, Button, FlatList, KeyboardAvoidingView, Pressable, Text, TextInput, TouchableOpacity, Modal, ScrollView, View } from 'react-native';
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
import DateTimePicker from '@react-native-community/datetimepicker';


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
    const [editMode, setEditMode] = useState(false);    
    const [index, setIndex] = useState();               
    const [deleteDoubleCheckVisible, setDeleteDoubleCheckVisible] = useState(false);   
    var visitClickedIndex = 0;                          
    let visitList = route.params.visits;                


    /* Code for Calender */
    const [d, setD] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || d;
        setShow(Platform.OS === 'ios');
        setD(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };


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
                                <Text style={[modalStyles.modalText,]}>Add a new visit</Text>

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
                                    <TextInput style={[modalStyles.input,]} placeholder={'mm/dd/yyyy'} value={d.toLocaleDateString()} onPressIn={showDatepicker} onEndEditing={() => setDate(d.toLocaleDateString('en-US'))} />
                                    {show && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={d}
                                            mode={"date"}
                                            format="DD-MM-YYYY"
                                            display="default"
                                            onChange={onChange}
                                        />
                                    )}
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
                        <View style={profileStyles.modalView}>

                            {/* Displays clicked Patient Visit */}
                            <Text style={[profileStyles.modalText, {}]}> Visit - {date}</Text>
                            <View style={profileStyles.form}>
                                <Text style={profileStyles.field}>Date: {date}</Text>
                                <Text style={profileStyles.field}>Doctor: {doctor}</Text>
                                <Text style={profileStyles.field}>Student: {student}</Text>
                                <Text style={profileStyles.field}>Primary diseases: {primaryDiseases}</Text>
                                <Text style={profileStyles.field}>Secondary diseases: {secondaryDiseases}</Text>
                                <Text style={profileStyles.field}>Discharged Date: {dischargedDate}</Text>
                                <Text style={profileStyles.field}>Notes: {note}</Text>
                            </View>
                
                            {/* Button to close modal */}
                            <TouchableOpacity
                                style={[profileStyles.close]}
                                onPress={() => {
                                    setVisitFieldsToNull();  //Sets all data fields to null to more easily show errors in the app
                                    setVisitModalVisible(!visitModalVisible)
                                }} >
                                <Icon name={'close-circle'} color={'#B72303'} size={30} />
                            </TouchableOpacity>


                            {/* Button to delete visit */}
                            <TouchableOpacity
                                style={[profileStyles.delete]}
                                onPress={() => {
                                    Alert.alert(
                                        "Delete Visit",
                                        "Are you sure you want to delete this visit?",
                                        [
                                            {
                                                text: "Cancel",
                                                onPress: () => console.log("Cancel Pressed")
                                            },
                                            {
                                                text: "Yes", onPress: () => {
                                                    setEditMode(false);  //makes edit modal invisible
                                                    setVisitModalVisible(false) //makes visit viewing modal invisible (as well)
                                                    let visitIndex = index;
                                                    visitList = visitList.splice(visitIndex, 1);
                                                    setVisitFieldsToNull();
                                                }
                                            }
                                        ]
                                    );
                                }} >
                                <EvilIcons name={'trash'} color={'#B72303'} size={65} />
                            </TouchableOpacity>


                            {/* Button to edit visit */}
                            <TouchableOpacity
                                style={[profileStyles.editVisit]}
                                onPress={() => {
                                    setEditMode(true);
                                }} >
                                <EvilIcons name={'pencil'} color={'#B72303'} size={65} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>


            {/* DELETE visit double check modal */}
            <View style={profileStyles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={deleteDoubleCheckVisible}
                    onRequestClose={() => {
                        setDeleteDoubleCheckVisible(true);
                    }}>
                    <View style={profileStyles.centeredView}>
                        <View style={profileStyles.deleteDoubleCheckModal}>
                            <Text> Are You Sure You Want To Delete This Visit? </Text>


                            {/* Button to delete visit*/}
                            <Pressable
                                style={[modalStyles.buttonClose, { bottom: 200 }]}
                                onPress={() => {
                                    setDeleteDoubleCheckVisible(false);
                                    setEditMode(false);  //makes edit modal invisible
                                    setVisitModalVisible(false) //makes visit viewing modal invisible (as well)
                                    let visitIndex = index;
                                    visitList = visitList.splice(visitIndex, 1);
                                    setVisitFieldsToNull();
                                }}>
                                <Text style={modalStyles.textStyle2}>Delete Visit</Text>
                            </Pressable>


                            {/* Button to close modal and NOT delete visit*/}
                            <Pressable
                                style={[profileStyles.buttonGoBack, { bottom: 200 }]}
                                onPress={() => {
                                    setDeleteDoubleCheckVisible(false);
                                }}>
                                <Text style={modalStyles.textStyle2}>Go Back</Text>
                            </Pressable>
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
                                <Text style={[modalStyles.modalText,]}>Edit {date} Visit</Text>

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
                                    <TextInput style={[modalStyles.input,]} placeholder={'mm/dd/yyyy'} value={d.toLocaleDateString('en-US')} onPressIn={showDatepicker} onEndEditing={() => setDate(d.toLocaleDateString('en-US'))} />
                                    {show && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={d}
                                            mode={"date"}
                                            format="DD-MM-YYYY"
                                            display="default"
                                            onChange={onChange} />)}
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
                                    setEditMode(false);
                                    setVisitModalVisible(false)
                                    let visit = { date, doctor, student, primaryDiseases, secondaryDiseases, dischargedDate, note }
                                    let visitIndex = index;
                                    visitList[visitIndex] = visit;
                                    setVisitFieldsToNull();
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