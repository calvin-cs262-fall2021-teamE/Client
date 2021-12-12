import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
  Platform, TouchableOpacity, Keyboard, FlatList
} from 'react-native';
import PatientEntry from '../patient/PatientEntry';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Instructions from './Instructions'
import About from './About'
import Home from './Home'
//import updatePatients from '../patient/updatePatients';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { modalStyles } from "../styles/modalStyles";


/* 
 * Allows for drawer navigation to switch between the Home, Instructions, and About Screens.
 */
export default function DrawerScreen({ navigation }) {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} 
        // options={{headerRight: () => <TouchableOpacity
        //   style={[modalStyles.sync]}
        //   onPress={() => { Home.updatePatients()
        //   }} >
        //   <Icon name={'cloud-sync'} color={'#B72303'} size={40} />
        //</TouchableOpacity>}} 
        />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Help" component={Instructions} />
    </Drawer.Navigator>
      );
}

