import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
    },
    modalView: {
        height: 775,
        width: 380,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flex: 1,
    },
    close: {
        bottom: 45,
        left: 168,
    },
    input: {
        fontSize: 12,
        color: 'gray',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderColor: 'gray',
        backgroundColor: '#E8EAED',
        borderRadius: 2,
        borderWidth: 0.5,
        width: 320,
        marginTop: 39,
        bottom: 130,
    },
    field: {
        fontSize: 15,
        lineHeight: 60,
        textAlign: 'left',
        padding: 2,
    },
    fieldStyle: {
        textAlign: 'left',
        width: 320,
    },
    logo: {
        resizeMode: 'contain',
        height: 175,
        width: 350,
    }
});
