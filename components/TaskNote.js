import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class TaskNote extends Component {
  render() {
    return (
      <View key={this.props.keyVal} style={styles.taskNote}>

        <Text style={styles.taskNoteText}>{this.props.val.date}</Text>
        <Text style={styles.taskNoteText}>{this.props.val.note}</Text>

        <TouchableOpacity style={styles.taskNoteDelete} onPress={this.props.deleteMethod}>
          <Text style={styles.taskNoteDeleteText}>D</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskNote: {
    position: "relative",
    padding: 28,
    paddingRight: 100,
    borderBottomColor: "#ededed",
    borderBottomWidth: 2
  },
  taskNoteText: {
    paddingLeft: 20,
    borderLeftColor: "#E91E63",
    borderLeftWidth: 10,
  },
  taskNoteDelete: {
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },

});
