import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PatientEntry = (props) => {
    
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
        borderWidth: 1,
        borderColor: '#ECECEC',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 20,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#B72303',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default PatientEntry;
