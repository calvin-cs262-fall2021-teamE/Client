import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, KeyboardAvoidingView, TextInput } from "react-native";
import addPatient from "./screens/addPatient";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientProfile from "./screens/patientProfile";
//import Header from "./shared/header";


const Stack = createNativeStackNavigator();


export default function App(){
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={addPatient} />
        {/* //  options={({ navigation }) => ({
        //    headerRight: () => (
        //      <Header navigation={navigation}/>)})} /> */}

        <Stack.Screen name="Patient Profile" component={PatientProfile} />
          {/* // options={({ navigation }) => ({
          //   headerRight: () => (
          //     <Header navigation={navigation}/>)})} />  */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

