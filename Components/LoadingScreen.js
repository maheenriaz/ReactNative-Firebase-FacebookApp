
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,ActivityIndicator} from 'react-native';
import 'react-native-gesture-handler';
import {Paragraph,  Button} from 'react-native-paper';
import  firebase from '@firebase/app'



class LoadingScreen extends React.Component {
  render(props){
        return (
         <View style={styles.container}>
             <ActivityIndicator size="large" color="#d9534f" />
        </View>
      );
    }
 
}
export default LoadingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign:'center',
    justifyContent:'center'
  },
});
