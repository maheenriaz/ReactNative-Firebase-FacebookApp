
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,Alert} from 'react-native';
import 'react-native-gesture-handler';
import MyProfile from './MyProfile';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import {Paragraph,  Button} from 'react-native-paper';
import  firebase from '@firebase/app'
import  '@firebase/auth'
import "@firebase/firestore";

class Signup extends React.Component {
  state={
     email:'',
     password:'',
     name:'',
     paragraph:'Write something about you',
     photourl:"https://i.stack.imgur.com/l60Hf.png",
     cover:'https://theoheartist.com/wp-content/uploads/sites/2/2015/01/fbdefault.png'
   }


    userSignup(email,password){
        console.log(this.state)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(user)=>{
           let details = {}
            details.email = email
            details.uid = user.user.uid
            details.name = this.state.name
            details.photourl= this.state.photourl
            details.cover= this.state.cover
            details.paragraph= this.state.paragraph
              firebase.firestore().collection("users").doc(user.user.uid)
              .set({
               details
              })                                                                  
              .then((data)=>{
                console.log(data)
                  this.props.navigation.navigate("Login")
              })
              .catch((err)=>{
                console.log(err.message)
              })
        } ) 
         .catch((err)=>{
            Alert.alert(err.message)
        })
    }


  render(props){
        return (
         <View>
             <View style={{marginTop:140,alignSelf:'center'}}>
                <AntDesign name="facebook-square" size={54} color="#3b5998" />
            </View>  
       
            <View style={{alignSelf:'center'}}>
                <View style={{flexDirection:'row'}}>
                <TextInput value={this.state.email} onChangeText={(text)=> this.setState({email:text})} icon="login" mode="contained" placeholder="Enter Email" style={{paddingLeft:17,fontSize:17,marginTop:38,width:280,height:44,borderRadius:26,borderColor:'black',backgroundColor:'white',elevation:3}}/>
                </View>
                <TextInput value={this.state.password} onChangeText={(text)=> this.setState({password:text})} placeholder="Enter Password" style={{paddingLeft:17,fontSize:17,marginTop:26,width:280,height:44,borderRadius:26,borderColor:'black',backgroundColor:'white',elevation:3}}/>
                <TextInput value={this.state.number} onChangeText={(text)=> this.setState({number:text})} placeholder="Enter Phone Number" style={{paddingLeft:17,fontSize:17,marginTop:26,width:280,height:44,borderRadius:26,borderColor:'black',backgroundColor:'white',elevation:3}}/>
               <TextInput value={this.state.name} onChangeText={(text)=> this.setState({name:text})} placeholder="Enter name" style={{paddingLeft:17,fontSize:17,marginTop:26,width:280,height:44,borderRadius:26,borderColor:'black',backgroundColor:'white',elevation:3}}/>
           </View>  

           <View style={{marginTop:30,width:270,color:'green',alignSelf:'center'}}>
               <TouchableOpacity >
                <Button onPress={()=> this.userSignup(this.state.email,this.state.password)} icon="login" mode="contained" style={{backgroundColor:'#3b5998'}} >
                        Signup
                </Button>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")}>
                   <Text style={{alignSelf:'center',fontSize:17,fontWeight:'bold',marginTop:3,color:'#3b5998'}}>Already have an annount? Login</Text>
                 </TouchableOpacity>
          </View>
 
 
 </View>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          );
    }
 
}
export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
