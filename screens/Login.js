import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect } from 'react';
import {
    Alert, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Modal, Pressable,
    Platform, TouchableOpacity, Keyboard, FlatList, ScrollView, SnapshotViewIOSComponent
} from 'react-native';
import PatientEntry from '../patient/PatientEntry';
import { modalStyles } from "../styles/modalStyles";
import { styles } from "../styles/homework1Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


/* Login modal allowing user to enter credentuals to verify sync */
export default function Login() {

    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }
                } >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                    </View>
                </View>
            </Modal>
        </View>
    );
}