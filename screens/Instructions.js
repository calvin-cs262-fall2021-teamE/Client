import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


/*
 * Displays instructions on how to use the app on the Instructions screen
 */
export default function Instructions() {
  return (
    <View style={{ flex: 1, justifyContent: 'right', alignItems: 'left' }}>
      <Text style = {{fontweight: 'bold'}}>Section 1 :- Creating a patient profile:</Text>
      <Text>  -	Start by clicking the add a patient button (“+” button) at the bottom right corner</Text>
      <Text>  -	Fill out all the necessary fields that appear on the popup page.</Text>
      <Text>  -	Click the “add patient” button. This should create a new profile for the patient at hand</Text>
      <Text> </Text>
      <Text style = {{fontweight: 'bold'}}>Section 2 :- Accessing visit forms that already exist:</Text>
      <Text>  -	Start by searching the name of the desired patient</Text>
      <Text>  -	Proceed by clicking on the patient profile that appears on the home screen </Text>
      <Text>  - You should see a list of previous patient visits. Select the desired form</Text>
      <Text> </Text>
      <Text style = {{fontweight: 'bold'}}>Section 3:- Finding and editing/updating a patient visit that already exists: </Text>
      <Text>  -	Click on the search bar and proceed by entering the full name of the patient.</Text>
      <Text>  -	Click on the first patient profile that appear on the home screen</Text>
      <Text>  -	After being redirected to the next page, click on visit form you want to edit</Text>
      <Text>  -	Click on the delete button to delete or the edit button to edit the visit form</Text>
      <Text> </Text>
      <Text style = {{fontweight: 'bold'}}>Section 4:- Syncing the patient  database: </Text>
      <Text>  -	Click on the sync button at the top right corner</Text>
      <Text>  - This should synchronize your database accross all your devices</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  instructions: {

  },
})