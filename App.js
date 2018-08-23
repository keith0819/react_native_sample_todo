import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import TaskNote from './components/TaskNote';

export default class App extends React.Component {

  state = {
    taskNoteArray: [ {'note': 'TEST TASK NOTE 01'}, ],
    taskNoteText: "",
  }

  render() {

    let taskNotes = this.state.taskNoteArray.map((val, key) => {
      return <TaskNote key={key} keyVal={key} val={val} deleteMethod={ () => this.deleteMethod(key) } />
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>- TASK NOTE -</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {taskNotes}
        </ScrollView>

        <View style={styles.footer}>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
            placeholder="> ENTER YOUR TASK"
            placeholderTextColor="#ffffff"
          ></TextInput>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 45,
    paddingLeft: 28,
    paddingRight: 28,
    paddingBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#E91E63',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderRightColor: '#ccc',
    borderLeftColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -40,
    zIndex: 10,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#ffffff',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: '#252525',
    borderTopColor: '#ededed',
    borderTopWidth: 10,
  }
});
