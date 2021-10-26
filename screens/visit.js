// import { StatusBar } from 'expo-status-bar';
// import React, {useState, useEffect} from 'react';
// import { Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
//   Platform, TouchableOpacity, Keyboard, FlatList} from 'react-native';
// import {modalStyles} from "../styles/modalStyles";


// export default function Visit() {
// return (

//     /* Names of information fields */
//     <View>
//         <Text style={modalStyles.field}>Doctor:</Text> 
//         <Text style={modalStyles.field}>Student:</Text> 
//         <Text style={modalStyles.field}>Primary diseases:</Text> 
//         <Text style={modalStyles.field}>Secondary diseases:</Text> 
//         <Text style={modalStyles.field}>Discharged date:</Text> 
//         <Text style={modalStyles.field}>Notes:</Text> 
//         <Text style={modalStyles.field}>Attatchments:</Text> 

//     {/* Fields where information is entered */}
//     <KeyboardAvoidingView
//     behavior={Platform.OS === "ios" ? "padding" : "height"}
//     style={modalStyles.fieldWrapper} >
//     <TextInput style={[modalStyles.input, { top: 100, right: 15}]} placeholder={'Name'} value={name} onChangeText={text => setName(text)} /> 
//     <TextInput style={[modalStyles.input, { top: 124, left: 40}]} placeholder={'Name'} value={DOB} onChangeText={text => setDOB(text)} />
//     <TextInput style={[modalStyles.input, { top: 145, left: 88}]} placeholder={'Disease'} value={registrationNumber} onChangeText={text => setRegistrationNumber(text)}/>
//     <TextInput style={[modalStyles.input, { top: 170, right: 30}]} placeholder={'Disease'} value={sex} onChangeText={text => setSex(text)}/>
//     <TextInput style={[modalStyles.input, { top: 193, left: 80}]} placeholder={'Date'} value={city} onChangeText={text => setCity(text)}/>
//     <TextInput style={[modalStyles.input, { top: 215, right: 7}]} placeholder={'Notes'} value={region} onChangeText={text => setRegion(text)}/>
//     </KeyboardAvoidingView>

//     </View>
//  );
// }