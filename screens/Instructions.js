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
    <View style={[{marginTop: 10}]}>
      <Text style={styles.heading}>Creating a patient profile:</Text>
      <Text style={styles.instructions}> 
        -	Click the "+" button in the bottom right corner of the home screen {'\n'}
        -	Fill out all of the necessary fields{'\n'}
        -	Click the “Add Patient” button in the bottom right corner{'\n'}
      </Text>

      <Text style={styles.heading}>Accessing patient profile:</Text>
      <Text style={styles.instructions}>  
        -	Look for desired patient or search for the name using the search bar at the top of the home screen{'\n'}
        -	Click on the patient; you will be taken to their profile page{'\n'}
        - You should see a list of previous patient visits. Click on any visit form to view it's details{'\n'}
      </Text>

      <Text style={styles.heading}>Add/edit a patient visit: </Text>
      <Text style={styles.instructions}>  
        -	Access a patient's profile{'\n'}
        -	Click the "+" button in the bottom right corner of the profile screen{'\n'}
        -	Fill out all of the necessary fields{'\n'}
        -	Click the "Add Visit" button in the bottom right corner{'\n'}
        - To edit a visit, view the details of desired visit and click the pencil icon{'\n'}
        - Edit desired information then click the "Save Changes" button in the bottom right corner{'\n'}
        - To delete a visit, view the details of desired visit and click the trash can icon then confirm deletion{'\n'}
      </Text>

      <Text style={styles.heading}>Syncing the patient database: </Text>
      <Text style={styles.instructions}>  
        -	Click on the cloud button in the top right corner of the home screen. This will download all patients from the server
          and upload any patients you have created
      </Text>
    </View>
  );
}

// Style Sheet
const styles = StyleSheet.create({
  instructions: {
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 20,
  },
  heading: {
    paddingTop: 10,
    marginLeft: 20,
    fontWeight: 'bold',
  }
})