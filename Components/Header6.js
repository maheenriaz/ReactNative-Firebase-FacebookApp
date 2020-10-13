
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
import 'firebase/storage';

class Header6 extends React.Component {
  savePost=async()=>{                             
    var user = await AsyncStorage.getItem('list')
    user=JSON.parse(user)
    User = user ? user :{} 
  firebase.firestore().collection("post").doc(this.props.id)
  .update({"description": this.props.text})
  .then((msg)=>{
    Alert.alert("Post has been updated!!")
  })
  

  }
  render(){
    console.log(this.props.text,"lopppp")
        return (
         <View>
              <View style={{justifyContent:'space-between',flexDirection:'row',marginTop: Constant.statusBarHeight,height:50,backgroundColor:'white'}}>
           <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:19}}>
               <AntDesign  onPress={()=> this.props.navigation.navigate("HomeScreen")} style={{marginLeft:10}} name="left" size={17} color="#4267B2" />
               <Text style={{marginLeft:10,fontSize:17,marginTop:-3,fontWeight:'bold'}}
               >Create Post</Text>
           </View>
           <TouchableOpacity onPress={this.savePost}>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:80,marginTop:16}}>
                <FontAwesome name="share" size={17} color="#4267B2" />
                <Text style={{fontSize:17,marginTop:-3,fontWeight:'bold'}}>Saved</Text>
             </View>
             </TouchableOpacity>
             </View>
             </View>
          );
    }
 
}
export default Header6;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
