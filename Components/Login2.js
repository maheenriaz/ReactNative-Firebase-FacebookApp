
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,Alert,AsyncStorage} from 'react-native';
import 'react-native-gesture-handler';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import {Paragraph,  Button} from 'react-native-paper';
import  firebase from '@firebase/app'
import LoadigScreen from './LoadingScreen'
import LoadingScreen from './LoadingScreen';

// import AsyncStorage from '@react-native-community/async-storage';

class Login2 extends React.Component {
  state={
    email:'',
    password:'',
  
  }
 
  userLogin(email,password){
       console.log(this.state)
     firebase.auth().signInWithEmailAndPassword(email, password)
       .then(async(user)=>{
        console.log("user", JSON.stringify(user.user.uid) )
          item=JSON.stringify(user.user.uid)
           await AsyncStorage.setItem('list',item)
         this.props.navigation.navigate("HomeScreen", item)     
       }) 
       .catch((err)=>{
           Alert.alert(err.message)
       })
   }

  render(props){
    // if(this.state.loading== false){
    //   return <LoadingScreen />
    // }
   
     return (
         <View >
            <View style={{marginTop:140,alignSelf:'center'}}>
                <AntDesign name="facebook-square" size={54} color="#3b5998" />
            </View>  
           
            <View style={{alignSelf:'center'}}>
                <View style={{flexDirection:'row'}}>
                <TextInput value={this.state.email} onChangeText={(text)=> this.setState({email:text})} icon="login" mode="contained" placeholder="Enter Email" style={{paddingLeft:17,fontSize:17,marginTop:38,width:280,height:44,borderRadius:26,borderColor:'black',backgroundColor:'white',elevation:3}}/>
                </View>
               <TextInput value={this.state.password} onChangeText={(text)=> this.setState({password:text})} placeholder="   Enter Password" style={{paddingLeft:17,fontSize:17,marginTop:26,width:280,height:44,borderRadius:26,borderColor:'black',backgroundColor:'white',elevation:3}}/>
           </View>  

           <View style={{marginTop:30,width:270,color:'green',alignSelf:'center'}}>
               <TouchableOpacity onPress={()=>this.userLogin(this.state.email,this.state.password)}>
               {/* onPress={()=>this.userLogin(this.state.email,this.state.password)} */}
                <Button  icon="login" mode="contained" style={{backgroundColor:'#3b5998'}} >
                        Login
                </Button>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")}>
                   <Text style={{alignSelf:'center',fontSize:17,fontWeight:'bold',marginTop:3,color:'#3b5998'}}>Already Login ?</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate("Signup")}>
                   <Text style={{alignSelf:'center',fontSize:17,fontWeight:'bold',marginTop:3,color:'#3b5998'}}>Signup ?</Text>
                 </TouchableOpacity>
          </View>
         
         
            </View>
 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          );
    }
 
}
export default Login2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
