import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
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
    buttonAdd: {
      position: "absolute",
      borderRadius: 60,
      padding: 10,
      backgroundColor: "#B72303",
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      bottom: 35,
      right: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonClose: {
      position: "absolute",
      top: 650,
      right: 15,
      borderRadius: 5,
      width: 110,
      height: 40,
      backgroundColor: "#B72303",
      alignItems: "center",
      justifyContent: "center",
    },
    bClose: {
      //position: 'absolute',
      borderRadius: 60,
      padding: 10,
      backgroundColor: "#E1E1E1",
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 740,
      left: 167, 
    },
    close: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      position: 'absolute',
      justifyContent: 'center',
       
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 30,
    },
    textStyle2: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 15,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "left",
      fontSize: 25,
      fontWeight: 'bold',
      right: 60,

    },
    input: {
      fontSize: 10,
      color: 'gray',
      paddingVertical: 1,
      paddingHorizontal: 5,
      borderColor: 'gray',
      backgroundColor: '#E8EAED',
      borderRadius: 5,
      borderWidth: 1,
      width: 180,
      flexDirection: 'column',
      padding: 3,
      
 
    },  
    field: {
      fontSize: 15,
      lineHeight: 50,
      textAlign: 'left',
      right: 90,
      padding: 2,
    },
    fieldWrapper: {
      position: 'absolute',
      flexDirection: 'column',
      
    },
    fieldStyle: {
      flex: 1,
    },
    add: {
      alignItems: 'center',
      justifyContent: 'center',
 
     // flex: 1,
    },
    swiper: {
      
    },
  });