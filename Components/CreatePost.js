import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,ScrollView, Alert ,ActivityIndicator} from 'react-native';
import Header2 from './Header2';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import  firebase from '@firebase/app'
import "@firebase/firestore";
import 'firebase/storage';
import { storage } from 'firebase';

export default class CreatePost extends React.Component{
  state={
    text:'',
   image2:'',
    setImage2:'',
    loader:false
}
  pickImage2 =async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then(async(data)=>{
      const response=await fetch(data.uri)
      const blob =await response.blob()
      firebase.storage().ref(`images/${data.uri}`).put(blob).on(
        "state_changed",snapshot=>{},error=>{console.log(error)},
        ()=>{
        // this.setState({loader:true})
          firebase.storage().ref("images").child(data.uri).getDownloadURL()
          .then(url=>{
            this.setState({image2:url,setImage2:url})
            Alert.alert("Image Uploaded")
          })
          .catch(err=>{console.log(err)})
      }
        
      )
    })
    .catch((err)=>{
      Alert.alert(err.message)
    })
  }
  
  render(){ 
     if(this.state.loader == true){
    return <ActivityIndicator size="large" color='#4267B2' style={{marginTop:300}} />
  }
  else{ 
  return (
    <View>
     
      <Header2 text={this.state.text} image2={this.state.image2}  navigation={this.props.navigation}/>
      <ScrollView>
       <View style={{flexDirection:'row',marginTop:20}}>
           <View>
               <Image style={{marginLeft:9,height:50,width:50,resizeMode:'cover',borderRadius:920}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'}} />
            </View>
            <View style={{marginLeft:10}}>
               <Text style={{fontSize:17,fontWeight:'bold'}}>Ofem Ekapong</Text>
               <View style={{flexDirection:'row'}}>
                   <View>
                       <Text style={{borderWidth:1,borderColor:'#CACACA',borderRadius:3}}>
                       <MaterialIcons name="public" size={15} color="black" />Public
                           </Text>
                   </View>
                   <View>
                    <Text style={{borderWidth:1,borderColor:'#CACACA',marginLeft:5,borderRadius:3}}>
                         <AntDesign name="plus" size={15} color="black" />Album
                            </Text>
                   </View>
               </View>
            </View>
       </View>
      

      <View style={styles.textAreaContainer} >
          <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Hey Buddy! What's Up?"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          onChangeText={(text)=> this.setState({text}) }
        />
      </View>

      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
              <MaterialIcons  name="video-call" size={24} color="white" />
           </View>
        <View>
           <Text  style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Create Meeting</Text>
        </View>
         </View>

<TouchableOpacity onPress={this.pickImage2}>
         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
            <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
                <Entypo  name="images" size={24} color="#ffff" />
                </View>
                <View>
             <Text  style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}} >Images/Videos</Text>
         </View>
         </View>
         </TouchableOpacity>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <AntDesign  name="user" size={24} color="white" />
            </View>
            <View>
             <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Tag Friend</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <AntDesign  name="smileo" size={24} color="white" />
            </View>
            <View>
             <Text style={{marginLeft:14,fontSize:20,color:'#605F5F',fontWeight:'bold',marginTop:-30}}>Actiity/Feeling</Text>
         </View>
         </View>
        
         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <Entypo  name="location" size={24} color="#ffff" />
            </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>CheckIn</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
           <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
             <MaterialCommunityIcons name="image-filter-vintage" size={24} color="#ffff" />
            </View>
            <View>
             <Text  style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>3D Image</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <FontAwesome  name="dollar" size={24} color="#ffff" />
            </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Sell Something</Text>
         </View>
         </View>


         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <MaterialIcons   name="video-call" size={24} color="white" />
             </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Go Live</Text>
         </View>
         </View>
         
         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:30,marginLeft:20}}>
           <Ionicons  name="ios-color-palette" size={24} color="#ffff" />
             </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Background Color</Text>
         </View>
         </View>

         <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:10}}>
         <View style={{backgroundColor:'#4267B2',padding:8,borderRadius:25,marginLeft:20}}>
           <MaterialCommunityIcons  name="image-filter-vintage" size={24} color="#ffff" />
             </View>
            <View>
             <Text style={{marginLeft:4,fontSize:20,color:'#605F5F',fontWeight:'bold'}}>Ask for Recommendations</Text>
         </View>
         </View>
     </View>

      <View style={{marginTop:100}}>

</View>

      </ScrollView>
    </View>
   
  );}
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:80,
  },
  textAreaContainer: {
    borderColor: "#D1D0D0",
    borderWidth: 1,
    padding: 5,
    marginTop:40,
   
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical:'top',
  },
});
