import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { profileStyles } from '../styles/profileStyles';



export default function PatientProfile({ route, navigation }) {
    return (

        /* Displays patient information */
        <View style={profileStyles.container}>
            <Text>{ route.params.name }</Text>
            <Text>{ route.params.city }</Text>
            <Text>{ route.params.sex }</Text>
            <Text>Hi, this is the patient profile</Text>
        </View>
    );
  }