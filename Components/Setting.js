
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,Alert,AsyncStorage} from 'react-native';
import 'react-native-gesture-handler';
import Login2 from './Login2';
import HomeScreen from './HomeScreen';
import MyProfile from './MyProfile';
import Header5 from './Header5';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import * as firebase from 'firebase/app';

class Setting extends React.Component {
state={
  email:'',
  logout:true
}

userLogout(){
  firebase.auth().signOut()
  .then(()=>{
     AsyncStorage.removeItem('list',()=>{
      this.setState({logout:false});
       console.log("deleted")
     });
   
    this.props.navigation.navigate("Login")
  })
}


  render(){
  
        return (
          <View>
             <Header5   />
<ScrollView>
             <View style={{marginTop:10}}>
        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
              <MaterialIcons  name="video-call" size={24} color="white" />
           </View>
        <View>
           <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Edit Profile</Text>
        </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
            <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
                <Entypo  name="images" size={24} color="#ffff" />
                </View>
                <View>
             <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Story Items</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <AntDesign  name="user" size={24} color="white" />
            </View>
            <View>
             <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Archive Items</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <AntDesign  name="smileo" size={24} color="white" />
            </View>
            <View>
             <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Saved Items</Text>
         </View>
         </View>
        
         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <Entypo  name="location" size={24} color="#ffff" />
            </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>View as</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
             <MaterialCommunityIcons name="image-filter-vintage" size={24} color="#ffff" />
            </View>
            <View>
             <Text  style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Activity Log</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <FontAwesome  name="dollar" size={24} color="#ffff" />
            </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Timeline Review</Text>
         </View>
         </View>


         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <MaterialIcons   name="video-call" size={24} color="white" />
             </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Manage Post</Text>
         </View>
         </View>
         
         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:30,marginLeft:20}}>
           <Ionicons  name="ios-color-palette" size={24} color="#ffff" />
             </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>View Privacy Shortcuts</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <MaterialCommunityIcons  name="image-filter-vintage" size={24} color="#ffff" />
             </View>
             <TouchableOpacity onPress={()=>this.userLogout()}>
            <View>
            {/* onPress={()=>this.userLogout()} */}
             <Text   style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Logout</Text>
           </View>
         </TouchableOpacity>
         </View>
     </View>
      
     <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:17,marginTop:19,marginLeft:-55,fontWeight:'bold'}}>Your Profile Link</Text>
          <TouchableOpacity style={{width:90,height:30,marginTop:17,
                    backgroundColor:'#6477E0',borderRadius:20,marginLeft:5
                    }}  > 
                <View>
                <Text style={{alignSelf:'center',fontWeight:'bold',marginTop:5,fontSize:17,color:'white'}}>Copy</Text>
                </View>
            </TouchableOpacity>
       </View>
</ScrollView>
         </View>
          );
                 
                
    }
 
}
export default Setting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
