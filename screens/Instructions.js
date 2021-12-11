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
    <View>
      <Text style={styles.instructions}>Instructions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  instructions: {

  },
})