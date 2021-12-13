import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


/*
 * Displays the 'About' information of our app on the About Screen
 */
export default function About() {
  return (
    <View >
      <Text style={styles.title}>
        OPUS
      </Text>
      <Text style={styles.vision}>
      Earth Mission Asia (EMA), a medical organization that works in the jungles of Myanmar, has need of software that will record medical information input by EMA’s medical staff on their phones. Unlike Patientware, the software currently in use, which can only be used when connected to the Internet, our product will allow for offline input and storage of medical data which can then be uploaded to a server and then updated locally once an Internet connection is reached. This added functionality is needed to allow the management of patient medical data when wifi and cellular reception are not available, a necessity for EMA as they send their medical staff deeper into the Myanmar jungles.</Text>
      <Text style={styles.our}> Our team </Text>
      <Text style={styles.team}>
        Adam Brink {'\n'}
        Owen Pruim {'\n'}
        Josiah Ryan {'\n'}
        Fitsum Maru
      </Text>
    </View>
  );
}

// Style sheet
const styles = StyleSheet.create({
  vision: {
    top: 15,
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 25,
  },
  team: {
   top: 60,
   marginLeft: 20, 
   lineHeight: 25, 
  },
  our: {
    top: 60, 
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',  
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  }
})