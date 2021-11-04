import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function About() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Opus is a mobile software that will record medical information input 
          by EMA’s medical staff on their phones for ease of collective access. Opus 
          allows doctors an offline input and storage of medical data which can then 
          uploaded to a server and updated locally once the user reaches an area with
           an internet connection. This added functionality is needed to allow the 
           management of patient medical data when wifi and cellular reception are 
           not available, a necessity for EMA as they send their medical staff deeper
            into the Myanmar jungles. After being completed, opus will hopefully easie 
            the hardship that doctors in remote areas (with out access to internet connection) face.   </Text>
      </View>
    );
  }