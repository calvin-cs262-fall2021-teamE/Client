import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

/*
 * Displays the 'About' information of our app on the About Screen
 */
export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WELCOME TO OPUS!</Text>
      <Text> </Text>
      <Text>Opus is a mobile software that will record medical information input</Text>
      <Text>by EMA’s medical staff on their phones for ease of collective access. Opus</Text>
      <Text>allows doctors an offline input and storage of medical data which can then</Text>
      <Text> allows doctors an offline input and storage of medical data which can then</Text>
      <Text>uploaded to a server and updated locally once the user reaches an area with</Text>
      <Text> an internet connection. This added functionality is needed to allow the</Text>
      <Text>management of patient medical data when wifi and cellular reception are</Text>
      <Text>not available, a necessity for EMA as they send their medical staff deeper</Text>
      <Text>into the Myanmar jungles. After being completed, opus will hopefully easie</Text>
      <Text> the hardship that doctors in remote areas (with out access to internet connection) face.   </Text>
    </View>
  );
}