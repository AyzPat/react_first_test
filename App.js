import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.headerText}>
              Hello</Text>
            <Text style={styles.secondaryText}>
              This is level 2 text</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.headerText}>
              Hello There</Text>
            <Text style={styles.secondaryText}>
              This is level 2 text</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height :'100%'
  },
  headerText: {
    fontSize: 50,
    color: 'blue'
  },
  secondaryText: {
    fontSize: 25,
    color: '#333',
  }
});
