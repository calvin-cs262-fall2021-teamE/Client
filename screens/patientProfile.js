import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { profileStyles } from '../styles/profileStyles';
import { modalStyles } from '../styles/modalStyles';
import {styles} from "../styles/homework1Styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';



export default function PatientProfile({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
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
            <View> 
                <Text style={profileStyles.visit}>Visits</Text>

          {/* Icon to open form */}
                <TouchableOpacity
                    style={[modalStyles.patientFormButton]} /*style={[modalStyles.buttonAdd]}  */
                    onPress={() => setModalVisible(true)}
                    >
                    <Icon2 name={'filetext1'} color={'#B72303'} size={70}/>
                </TouchableOpacity>
            </View>

            {/* 'Add Patient' + 'Add Visit' form modal */}
            <View style={modalStyles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(true);
                    }}
                >
                    <View style={modalStyles.centeredView}>
                        <View style={modalStyles.modalView}> 
                        
                            {/* Form */}
                            <View style={modalStyles.add}>

                            <Text style={[modalStyles.modalText, {right: 60}]}> Visit - {route.params.date}</Text>
                            

                                <View style={profileStyles.form}>
                                    <Text style={modalStyles.field}>Date: {route.params.date}</Text> 
                                    <Text style={modalStyles.field}>Doctor: {route.params.doctor}</Text> 
                                    <Text style={modalStyles.field}>Student: {route.params.student}</Text> 
                                    <Text style={modalStyles.field}>Primary diseases: {route.params.primaryDiseases}</Text> 
                                    <Text style={modalStyles.field}>Secondary diseases: {route.params.secondaryDiseases}</Text> 
                                    <Text style={modalStyles.field}>Discharged Date: {route.params.dischargedDate}</Text> 
                                    <Text style={modalStyles.field}>Notes: {route.params.notes}</Text>
                                </View>   
                            </View>

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
        </View>
    );
  }