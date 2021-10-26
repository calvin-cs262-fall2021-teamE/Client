import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { globalStyles } from '../styles/global';
import AddPatient from "../screens/addPatient";
// import { createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem, 
// } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



export default function Header({ navigation }) {
    return (
        <View>
            <TouchableOpacity /*onPress={() => navigation.openDrawer()}*/>
                <Text style={globalStyles.menu}>=</Text>
            </TouchableOpacity>
        </View>
    );
};