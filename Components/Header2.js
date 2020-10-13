
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,Alert,AsyncStorage} from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from '@firebase/app'
import "@firebase/firestore";
import {firebaseConfig} from '../config'

firebase.initializeApp(firebaseConfig);

class Header2 extends React.Component {
  savePost=async()=>{
    let user = await AsyncStorage.getItem('list')
    console.log(user)
    user=JSON.parse(user)
    console.log(user,"hh")
    User = user ? user :{} 
    console.log(User)
    firebase.firestore().collection("post")
    .add({
      uid:User,
      description: this.props.text,
      image: this.props.image2,
      dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),  
    })  
  .then(()=> {
      Alert.alert("Your Post has been updated!!")
      this.props.navigation.navigate("MyProfile")
  })
  .catch((error) =>{
    Alert.alert("Error writing document: ", error);
  });
  }
  render(){
        return (
         <View >
              <View style={{justifyContent:'space-between',flexDirection:'row',marginTop: Constant.statusBarHeight,height:50,backgroundColor:'white'}}>
           <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:19}}>
               <AntDesign  onPress={()=> this.props.navigation.navigate("HomeScreen")} style={{marginLeft:10}} name="left" size={17} color="#4267B2" />
               <Text style={{marginLeft:10,fontSize:17,marginTop:-3,fontWeight:'bold'}}
               >Create Post</Text>
           </View>
           <TouchableOpacity onPress={this.savePost}>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:80,marginTop:16}}>
                <FontAwesome name="share" size={17} color="#4267B2" />
                <Text style={{fontSize:17,marginTop:-3,fontWeight:'bold'}}>Share</Text>
             </View>
             </TouchableOpacity>
             </View>
             </View>
          );
    }
 
}
export default Header2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
