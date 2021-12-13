import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


/*
 * VisitEntry displays list of visits on the screen 
 */
const VisitEntry = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}>
                    <Icon name={'file-document'} color={'#B72303'} size={45} />
                </View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

// Style sheet
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3,
        borderWidth: 1,
        borderColor: '#ECECEC',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
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

export default VisitEntry;
