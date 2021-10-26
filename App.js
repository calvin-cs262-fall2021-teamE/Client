import React, { useState } from "react";
//import React, { component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, KeyboardAvoidingView, TextInput, SafeAreaView, 
ScrollView, Dimensions, Image, Button, DrawerContentScrollView, DrawerItemList, DrawerItem } from "react-native";
//import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
//import { Icon } from 'native-base';
import addPatient from "./screens/addPatient";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientProfile from "./screens/patientProfile";
import Header from "./shared/header";
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


export default function App(){
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={addPatient} 
        options={({ navigation }) => ({
          headerLeft: () => (
              <Header navigation={navigation}/>
          )
      })}  />

      <Stack.Screen name="Patient Profile" component={PatientProfile} />
         {/* // options={({ navigation }) => ({
          //   headerRight: () => (
          //     <Header navigation={navigation}/>)})} />  */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
