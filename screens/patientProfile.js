import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { profileStyles } from '../styles/profileStyles';
import {styles} from "../styles/homework1Styles";



export default function PatientProfile({ route, navigation }) {
    return (
        <View>
            <View style={profileStyles.top}>
                <View style={profileStyles.square} />
                <View style={profileStyles.container}>
                    <Text style={profileStyles.name}>{route.params.name}</Text>
                    <Text>City of birth: {route.params.city}</Text>
                    <Text>Sex: {route.params.sex}</Text>
                    <Text>Registration Number: {route.params.registrationNumber}</Text>
                    <Text>Date of Birth: {route.params.DOB}</Text>
                    <Text>Langugage: {route.params.language}</Text>
                    <Text>Region: {route.params.region}</Text>
                    <Text>Ethnicity: {route.params.ethnicity}</Text>
                </View>
            </View>
            <View> 
                <Text style={profileStyles.visit}>Visits</Text>
            </View>
        </View>
    );
  }