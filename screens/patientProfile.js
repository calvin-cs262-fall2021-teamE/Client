import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { profileStyles } from '../styles/profileStyles';



export default function PatientProfile({ route, navigation }) {
    return (

        /* Displays patient information */
        <View style={profileStyles.title}>
            <Text>Name:  { route.params.name }</Text>
            <Text>City of birth:  { route.params.city }</Text>
            <Text>Sex:  { route.params.sex }</Text>
            <Text>Registration Number:  { route.params.registrationNumber }</Text>
            <Text>Date of Birth:  { route.params.DOB }</Text>
            <Text>Langugage:  { route.params.language }</Text>
            <Text>Region:  { route.params.region }</Text>
            <Text>Ethnicity:  { route.params.ethnicity }</Text>
        </View>
    );
  }