import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


/*
 * Displays instructions on how to use the app on the Instructions screen
 */
export default function Instructions() {
  return (
    <View style={{ flex: 1, justifyContent: 'right', alignItems: 'left' }}>
      <Text>Getting Started:</Text>
      <Text>  -	Start by downloading the app</Text>
      <Text>  -	Open the app</Text>
      <Text> </Text>
      <Text>Creating a patient profile</Text>
      <Text>To create a patient profile:</Text>
      <Text>  -	Start by clicking the add a patient button (add button) at the bottom right corner</Text>
      <Text>  -	Fill out all the necessary forms on the popup page that appears after you click the add button</Text>
      <Text>  -	Click done. This should create a new profile for the patient at hand</Text>
      <Text>NOTE: </Text>
      <Text>Make sure you fill out all the required forms as they are needed for creating the appropriate patient forms</Text>
      <Text> </Text>
      <Text>Finding and editing/updating a patient that already exists</Text>
      <Text>To find a patient that already exists:</Text>
      <Text>  -	Click on the search bar and proceed by entering the full name of the patient</Text>
      <Text>  -	Click on the first patient profile that appear on the </Text>
      <Text>  -	After being redirected to the next page, click on the edit button to edit a patient</Text>
      <Text>  -	Click on the delete button to delete a patient</Text>
      <Text> </Text>
      <Text>Syncing the patient profile database</Text>
      <Text>To sync your patient profile:</Text>
      <Text>  -	Click on the sync button at the top right corner</Text>
    </View>
  );
}