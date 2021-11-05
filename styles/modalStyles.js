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
      flex: 1,
      //padding: 10,
      //backgroundColor: "#B72303",
      width: 80,
      height: 80,
      alignItems: "center",
      justifyContent: "flex-end",
      bottom: 28,
      right: 30,
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 2
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 4,
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
    close:{
      justifyContent:'center',
      alignItems:'center',
      width: 31,
      height: 31,
      //borderWidth: 1,
      //borderRadius: 15,
      bottom: 732,
      left: 167,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      }
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
      width: 300,
      marginTop:39,
    },  
    field: {
      fontSize: 15,
      lineHeight: 60,
      textAlign: 'left',
      padding: 2,
    },
    fieldWrapper: {
      position: 'absolute',
      paddingTop: 64,
      paddingLeft: 5,

    },
    fieldStyle: {

    },
    add: {
     flex: 1,
    // justifyContent: 'flex-beginning',
    },
    swiper: {
    },
    searchBar: {
      fontSize: 18,
      color: 'gray',
      paddingVertical: 1,
      paddingHorizontal: 10,
      borderColor: 'gray',
      backgroundColor: '#E8EAED',
      borderRadius: 2,
      borderWidth: 0.5,
      width: 372,
      marginTop: 20,
      marginLeft: 20,
    },  
    patientFormButton: {
      position: "absolute",
      borderRadius: 60,
      //padding: 10,
      //backgroundColor: "#B72303",
      width: 80,
      height: 80,
     // alignItems: "center",
    //  top: 100,
      //left: 100,
      paddingTop: 60,
      paddingLeft: 20

    },
  });