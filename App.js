import React, { useState } from "react";
//import React, { component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, KeyboardAvoidingView, TextInput, SafeAreaView, 
ScrollView, Dimensions, Image, Button, DrawerContentScrollView, DrawerItemList, DrawerItem } from "react-native";
//import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
//import { Icon } from 'native-base';
import DrawerScreen from "./screens/DrawerScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from "@react-navigation/drawer";
import PatientProfile from "./screens/patientProfile";
//import Header from "./shared/header";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();


export default function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DrawerScreen" component={DrawerScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Patient Profile" component={PatientProfile} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}