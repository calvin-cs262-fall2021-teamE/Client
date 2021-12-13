import { StyleSheet } from "react-native";


/* Style sheet for various styles adapted from a HW project */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    backgroundColor: '#F0F0F0',
  },
  tasksWrapper: {
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 10,
  },
  items: {
    marginTop: 10,
    borderColor: 'gray',
  },
  writeTaskWrapper: {
    position: 'absolute',
    top: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: '#C0C0C0',
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},
});

