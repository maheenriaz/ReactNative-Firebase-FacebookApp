import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image,TextInput,ScrollView,ImageBackground ,Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import 'react-native-gesture-handler';
import { Button,Card} from 'react-native-paper';
import { TouchableOpacity} from 'react-native-gesture-handler'
import Header4 from './Header4'
import CreatePost2 from './CreatePost2'
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import  firebase from '@firebase/app'
import "@firebase/firestore";
import 'firebase/storage';


class EditProfile extends React.Component {
  state={
    image1:'https://i.stack.imgur.com/l60Hf.png',
    setImage1:'',
    image2:'https://theoheartist.com/wp-content/uploads/sites/2/2015/01/fbdefault.png',
    setImage2:'', 
    textDisable:false,
    para:'',
    loader:false
  }
   componentDidMount=async()=>{
        let user = await AsyncStorage.getItem('list')
      console.log(user,"ttt")
      user=JSON.parse(user)
      User = user ? user :{} 
   firebase.firestore().collection("users").doc(User)
 .onSnapshot((data)=>{
   console.log(data.data().details.photourl,"yahooooooooooooooooooo")
   this.setState({image2:data.data().details.cover})
   this.setState({image1:data.data().details.photourl})
   this.setState({para:data.data().details.paragraph})
 })
   }
  pickImage =async()=>{
    await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   }).then(async(data)=>{
     const response=await fetch(data.uri)
     const blob =await response.blob()
     this.setState({loader:true})
     firebase.storage().ref(`profileImages/${data.uri}`).put(blob).on(
       "state_changed",snapshot=>{},error=>{console.log(error)},
       ()=>{
         firebase.storage().ref("profileImages").child(data.uri).getDownloadURL()
         .then(async(url)=>{
           this.setState({image1:url,setImage1:url,loader:true})
           firebase.firestore().collection("users").doc(User)
            .update({"details.photourl" : url})
            .then((data)=>{
              // console.log(data)
              // this.setState({image1: url})
              this.setState({loader:false})
              Alert.alert("Profile Pic Updated")
            })
            .catch((err)=>{console.log(err.message)})
          })
         .catch(err=>{console.log(err)})
     }     
     )
   })
   .catch((err)=>{
     Alert.alert(err.message)
   })
   
 }
   pickImage2 =async()=>{
    await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   }).then(async(data)=>{
     const response=await fetch(data.uri)
     const blob =await response.blob()
    this.setState({loader:true})
     firebase.storage().ref(`coverImages/${data.uri}`).put(blob).on(
       "state_changed",snapshot=>{},error=>{console.log(error)},
       ()=>{
         firebase.storage().ref("coverImages").child(data.uri).getDownloadURL()
         .then(async(url)=>{
           this.setState({image1:url,setImage1:url})
           firebase.firestore().collection("users").doc(User)
            .update({"details.cover" : url})
            .then((data)=>{
              this.setState({loader:false})
              Alert.alert("Cover Photo Updated")
            })
            .catch((err)=>{console.log(err.message)})
          })
         .catch(err=>{console.log(err)})
     }     
     )
   })
   .catch((err)=>{
     Alert.alert(err.message)
   })
   
 }

changeText=()=>{
    this.setState({loader:true})
    firebase.firestore().collection("users").doc(User)
    .update({"details.paragraph" : this.state.para})
    this.setState({loader:false})
    Alert.alert("Updated!!")
}
  render(){ 
  if(this.state.loader == true){
    return <ActivityIndicator size="large" color='#4267B2' style={{marginTop:300}} />
  }
  else{
  return (
    
     <View>
       <Header4 />
       <ScrollView>
       <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:17,marginTop:19,marginLeft:-55,fontWeight:'bold'}}>Profile Image</Text>
          <TouchableOpacity style={{width:90,height:30,marginTop:17,
                    backgroundColor:'#6477E0',borderRadius:20,marginLeft:5
                    }} onPress={this.pickImage} > 
                <View>
                <Text style={{alignSelf:'center',fontWeight:'bold',marginTop:5,fontSize:17,color:'white'}}>Edit</Text>
                </View>
            </TouchableOpacity>
       </View>

       <View style={{marginTop:30,alignSelf:'center',marginLeft:-41}}>
       {
           <Image style={{width:327,height:180,borderRadius:17}} source={{uri:this.state.image1}} />
        }
           </View>
 
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:17,marginTop:19,marginLeft:-30,fontWeight:'bold'}}>Cover Image</Text>
         <View style={{flexDirection:'row',marginLeft:-40}}>
          <TouchableOpacity style={{width:70,height:30,marginTop:17,
                    backgroundColor:'#6477E0',borderRadius:20,marginLeft:5
                    }} onPress={this.pickImage2} > 
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                     <Text style={{alignSelf:'center',fontWeight:'bold',marginTop:5,fontSize:17,color:'white'}}>Edit</Text>
               </View>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{width:70,height:30,marginTop:17,
                    backgroundColor:'#6477E0',borderRadius:20,marginLeft:5
                    }} onPress={()=>this.uploadImage(this.state.image2,"text")} > 
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                     <Text style={{alignSelf:'center',fontWeight:'bold',marginTop:5,fontSize:17,color:'white'}}>Upload</Text>
               </View>
            </TouchableOpacity> */}
          
       </View>
     
       </View>
  
       <View style={{marginTop:30,alignSelf:'center',marginLeft:-41}}>
        {
           <Image style={{width:327,height:180,borderRadius:17}} source={{uri:this.state.image2}} />
        }

        </View>
  
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{fontSize:17,marginTop:27,marginLeft:-55,fontWeight:'bold'}}>All Details </Text>
          <TouchableOpacity style={{width:90,height:30,marginTop:17,
                    backgroundColor:'#6477E0',borderRadius:20,marginLeft:5
                    }}  > 
                <View>
                <Text style={{alignSelf:'center',fontWeight:'bold',marginTop:5,fontSize:17,color:'white'}}>Edit</Text>
                </View>
            </TouchableOpacity>
       </View>
  

       <View style={{marginTop:30}}>
        <View style={{flexDirection:'row'}}>
         <Text style={{marginLeft:25,fontSize:17,fontWeight:'bold',marginTop:6}}>Describe yourself!!</Text>
         <TouchableOpacity style={{width:90,height:30,
                    backgroundColor:'#6477E0',borderRadius:20,marginLeft:105
                    }} onPress={this.changeText} > 
                <View>
                <Text  style={{alignSelf:'center',fontWeight:'bold',marginTop:5,fontSize:17,color:'white'}} >Update</Text>
                </View>
            </TouchableOpacity>
           
       </View>
       <View >
          <TextInput value={this.state.para} onChangeText={(text)=> this.setState({para:text})} style={{marginTop:10,width:300,height:90,marginLeft:32,backgroundColor:'#dfdfdf',textAlignVertical:'top',padding:10}}/>
       </View>
        <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
              <MaterialIcons  name="video-call" size={24} color="white" />
           </View>
        <View>
           <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Your Followers</Text>
        </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
            <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
                <Entypo  name="images" size={24} color="#ffff" />
                </View>
                <View>
             <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>www.buddies.com</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <AntDesign  name="user" size={24} color="white" />
            </View>
            <View>
             <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Current Town/City</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <AntDesign  name="smileo" size={24} color="white" />
            </View>
            <View>
             <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Workplace</Text>
         </View>
         </View>
        
         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <Entypo  name="location" size={24} color="#ffff" />
            </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Education</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
             <MaterialCommunityIcons name="image-filter-vintage" size={24} color="#ffff" />
            </View>
            <View>
             <Text  style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Hometown</Text>
         </View>
         </View>

        <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <MaterialCommunityIcons  name="image-filter-vintage" size={24} color="#ffff" />
             </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Relationship Status</Text>
         </View>
         </View>
     </View>


      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
          <Text style={{fontSize:17,marginTop:27,marginLeft:-55,fontWeight:'bold'}}>Hobbies </Text>
          <TouchableOpacity style={{width:90,height:30,marginTop:17,
                    backgroundColor:'#6477E0',borderRadius:20,marginLeft:5
                    }}  > 
                <View>
                <Text style={{alignSelf:'center',fontWeight:'bold',marginTop:5,fontSize:17,color:'white'}}>Edit</Text>
                </View>
            </TouchableOpacity>
       </View>

       <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
          <Text style={{fontSize:17,marginTop:27,marginLeft:-55,fontWeight:'bold'}}>Featured List </Text>
          <TouchableOpacity style={{width:90,height:30,marginTop:17,
                    backgroundColor:'#6477E0',borderRadius:20,marginLeft:5
                    }}  > 
                <View>
                <Text style={{alignSelf:'center',fontWeight:'bold',marginTop:5,fontSize:17,color:'white'}}>Edit</Text>
                </View>
            </TouchableOpacity>
       </View>
    
    
       <View style={{marginTop:30,paddingLeft:10}}>
        <View style={{flexDirection:'row',flexShrink:1}}>
            <Image style={{height:100,width:120,borderRadius:10,flexShrink:1}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrkvgC3uCQG0NhyjmS8um31Cuh5sQs6ikrDw&usqp=CAU'}} />
            <Image style={{height:100,width:120,borderRadius:10,marginLeft:10,flexShrink:1}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPlrk2E5pNB7TQtEiZN6ZJSGZWq6cei5IbIA&usqp=CAU'}} />
            <Image style={{height:100,width:120,borderRadius:10,marginLeft:10,flexShrink:1}} source={{uri:'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
            <Image style={{height:100,width:120,borderRadius:10,flexShrink:1}} source={{uri:'https://wwwnc.cdc.gov/travel/images/thailand.jpg'}} />
            <Image style={{height:100,width:120,borderRadius:10,marginLeft:10,flexShrink:1}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJRakgBAob7T-M-b2ucKJQyklR6vy7fMh3lQ&usqp=CAU'}} />
       <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>  
            <Image  style={{height:100,width:120,borderRadius:10,marginLeft:10,flexShrink:1}} source={{uri:'https://abtamag.com/wp-content/uploads/2019/11/Intrepid_Worldwide_20201-760x490.jpg'}}/>
        </TouchableOpacity>
        </View>
    </View>
    
    
    
    
    
    
      <View style={{marginTop:100}}>

</View>
        </ScrollView>
   </View>
  );}
}
}
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
