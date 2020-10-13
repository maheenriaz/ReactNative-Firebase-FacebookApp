import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Modal,Alert,StyleSheet,Button, Text, View,Image,TextInput,ScrollView,ImageBackground,AsyncStorage,FlatList ,RefreshControl } from 'react-native';
import 'react-native-gesture-handler';
import { Card} from 'react-native-paper';
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Header3 from './Header3'
import CreatePost2 from './CreatePost2'
import { CommonActions } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import  firebase from '@firebase/app'
import "@firebase/firestore";
// import {firebaseConfig} from '../config'
// firebase.initializeApp(firebaseConfig);
import * as ImagePicker from 'expo-image-picker';

class MyProfile extends React.Component {
  state={
    username:"",
    post:[],
    refreshing:false,
    p_img:"",
    cover_photo:'',
    para:'',
    date:'',
    show:false,
    show1:false,
    docid:''
 
  }
 run=(item)=>{
  this.setState({show:!this.state.show}) 
   this.props.navigation.navigate('EditPost',{item})
 }
 delete=(id)=>{
  firebase.firestore().collection("post").doc(id)
  .delete()
  
 }
  handleRefresh(){
    this.setState({refreshing:true},()=>{
      this.setState({post: [...this.state.post], refreshing:false})
    } ) 
  }
  
  componentDidMount=async()=>{
        let user = await AsyncStorage.getItem('list')
      console.log(user)
      user=JSON.parse(user)
      User = user ? user :{}    //agr user ni mila to khali obj bjhdega issy code phatyga ni
      this.setState({email:user})
      // creating collection for profile image
      firebase.firestore().collection("users").doc(User)
      .onSnapshot((data)=>{
        //  console.log(data.data().details.photourl)
        this.setState({cover_photo:data.data().details.cover})
        this.setState({p_img:data.data().details.photourl})
        this.setState({username:data.data().details.name})
        this.setState({para:data.data().details.paragraph})
      })

      var db =  firebase.firestore();
      db.collection("post").where("uid", "==", User)
     .onSnapshot((querySnapshot)=> {
      var alldata=[]
     
        querySnapshot.forEach((doc)=> {
          const post= doc.data()
          post.id=doc.id
          // console.log(post.id,"hello of")
          alldata.push(post)    
      });
      this.setState({post:alldata})
      // console.log(this.state.post,"jj")
});
  }

render(){
 
return (
   
     <View >
       <Header3 navigation={this.props.navigation}  />
       <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={()=> this.handleRefresh()} />}>
       <View style={{padding:20}}>
            <ImageBackground style={{width:'100%',height:210,borderRadius:20,borderWidth:1,overflow:'hidden',borderColor:'#fff'}}       
                source={{uri: this.state.cover_photo}}
            >
                <Image source={{uri: this.state.p_img}} style={{width:140,height:100,marginTop:110,alignSelf:'center',borderRadius:90}}   />
            </ImageBackground>
       </View>

       <View>
 <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'center'}}>{this.state.username}</Text>
           <Text style={{textAlign:'center'}}>
           {this.state.para}</Text>
</View>
    
  
        <View style={{marginTop:10,alignSelf:'center',flexDirection:'row',flexShrink:1,flex:1}}>
           <TouchableOpacity style={{width:280,height:40,
                backgroundColor:'#4267B2',borderRadius:10,flexShrink:1,flex:1
                }}  > 
               <View style={{flexShrink:1}}>
               <Text style={{alignSelf:'center',marginTop:7,fontSize:18,color:'white'}}>Add to Story</Text>
              </View>
           </TouchableOpacity>

           <TouchableOpacity style={{width:62,height:40,
                backgroundColor:'#44BCD9',borderRadius:10,marginLeft:5
                }}  > 
               <View>
               <AntDesign style={{alignSelf:'center',marginTop:10}} name="ellipsis1" size={24} color="white" />
              </View>
           </TouchableOpacity>
         </View>
  


    <View style={{flexDirection:'row',marginTop:27}}>
         <View style={{marginTop:20,backgroundColor:'#47CEDA',height:59,width:100,borderRadius:10,marginLeft:20}}>
           <MaterialCommunityIcons  style={{alignSelf:'center',marginTop:13}} name="home-city-outline" size={32} color="white" />
          </View>
         <View style={{flexDirection:'row',flexShrink:1}}>
           <View style={{flexShrink:1}} >
                <Text style={{fontWeight:'bold',fontSize:20,marginTop:15,marginLeft:5}}>What City are you from?</Text>
                <Text style={{color:'#767879',fontSize:15,marginLeft:5,flexShrink:1 }}>Lorem Ipsum is simply dummy 
                   text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</Text>
            </View>
           
         </View>
        
    </View>
    

      <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
            <TouchableOpacity style={{width:170,height:40,
                    backgroundColor:'#4267B2',borderRadius:10
                    }}  > 
                <View>
                <Text style={{alignSelf:'center',marginTop:7,fontSize:18,color:'white'}}>Add to Story</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('EditProfile')} style={{width:170,height:40,
                    backgroundColor:'#B1B3B3',borderRadius:10,marginLeft:5
                    }}  > 
                <View>
                <Text style={{alignSelf:'center',marginTop:7,fontSize:18,color:'#4267B2'}}>Edit Profile</Text>
                </View>
            </TouchableOpacity>
        </View>


    <View style={{flexDirection:"row",marginTop:40}}>
        <View style={{marginTop:20,backgroundColor:'#4267B2',width:45,borderRadius:10,marginLeft:20}}>
        <Entypo style={{marginLeft:10}} name="users" size={22} color="white" />
         </View>
         <View style={{marginTop:20,flexDirection:'row'}}>
            <Text style={{fontSize:18,marginLeft:5}}>Your Follower: </Text>
           <Text style={{color:'#177F7F',marginLeft:4,fontSize:18}}>2767</Text>
        </View>
  </View>
  
  
  <View style={{flexDirection:"row",marginTop:-10}}>
        <View style={{marginTop:20,backgroundColor:'#4267B2',width:45,borderRadius:10,marginLeft:20}}>
         <MaterialIcons style={{marginLeft:10}} name="settings" size={22} color="white" />
       </View>
         <View style={{marginTop:20,flexDirection:'row'}}>
            <Text style={{fontSize:18,marginLeft:5}}>ww.buddies.com</Text>
        </View>
  </View>

  <View style={{flexDirection:"row",marginTop:-10}}>
        <View style={{marginTop:20,backgroundColor:'#B1B3B3',width:45,borderRadius:10,marginLeft:20}}>
        <AntDesign style={{marginLeft:10}} name="minus" size={22} color="white" />
       </View>
         <View style={{marginTop:20,flexDirection:'row'}}>
            <Text style={{fontSize:18,marginLeft:5}}>See more info</Text>
        </View>
  </View>


    <View style={{marginTop:30,paddingLeft:10}}>
        <View style={{flexDirection:'row',flexShrink:1}}>
            <Image style={{height:100,width:120,borderRadius:10,flexShrink:1}} source={{uri:'https://images.theconversation.com/files/138966/original/image-20160923-29880-ohp3uh.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'}} />
            <Image style={{height:100,width:120,borderRadius:10,marginLeft:10,flexShrink:1}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_eag0eUAzzRyYynwCZ-hgfAf-yYms2bu8zw&usqp=CAU'}} />
            <Image style={{height:100,width:120,borderRadius:10,marginLeft:10,flexShrink:1}} source={{uri:'data:image/jpeg;base64,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'}} />
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
            <Image style={{height:100,width:120,borderRadius:10,flexShrink:1}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEpjfK9_M7EBoW-7vcN4zovFpLCw8Pp8Zk6Q&usqp=CAU'}} />
            <Image style={{height:100,width:120,borderRadius:10,marginLeft:10,flexShrink:1}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScEwL-yAkx34SS42kn2Q-_MDPeyDxpumJrXQ&usqp=CAU'}} />
       <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>  
            <Image  style={{height:100,width:120,borderRadius:10,marginLeft:10,flexShrink:1}} source={{uri:'https://www.seasideor.com/wp-content/uploads/2017/06/07.2017_Seaside_web_Volleyball.jpg'}}/>
        </TouchableOpacity>
        </View>
    </View>

   
   <View>
      <View style={{flexDirection:"row",justifyContent:'space-around',marginTop:10}}>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:'bold',fontSize:17}}>All Friends</Text>
          <Text style={{fontSize:13}}>2634 Friends</Text>
          </View>
          <Text style={{fontWeight:'bold',fontSize:17}}>Find Friends</Text>
      </View>
   </View>


<View style={{paddingLeft:10,marginTop:10}}>
  <TouchableOpacity>
 <View style={{width:340,height:30,borderRadius:10,paddingLeft:20,backgroundColor:'#4267B2'}}>
    <Text style={{color:'white',alignSelf:'center',marginTop:1}}>Add your hometown</Text>
 </View>
 </TouchableOpacity>
 </View>


<View style={{marginTop:40}}>
    <Text style={{fontSize:14,fontWeight:'bold',paddingLeft:10}}>Create Post</Text>
    <View style={{flex:1,flexDirection:'row',marginTop:10}}>
         <View>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('MyProfile') } >
            <Image style={{marginLeft:9,height:50,width:50,resizeMode:'cover',borderRadius:920}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'}} />
            </TouchableOpacity>
         </View>
         <TouchableOpacity onPress={ () => this.props.navigation.navigate('CreatePost') } >
         <View style={{flex:1,flexShrink:1,paddingLeft:5}} >
          <TextInput placeholder=" Hey Buddy!! What's Up??"  style={{paddingLeft:20,borderColor:'#C6C9C9',borderRadius:17,borderWidth:1,width:316,height:142,fontSize:20,flexShrink:1,textAlignVertical:'top'}}  />
        </View>
        </TouchableOpacity>
    </View>
</View>

<View style={{flexDirection:'row',flex:1,marginTop:10}}>
            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
               <View style={{backgroundColor:'#4267B2',width:45,borderRadius:10,marginLeft:20}}>
                    <FontAwesome5 style={{marginLeft:10}} name="video" size={22} color="white" />
                </View>
               
                <View>
                    <Text style={{fontSize:15,marginLeft:5,marginTop:-22}}>Go Live</Text>
                </View>
          </View>
          <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:10,marginLeft:20}}>
                    <FontAwesome5 style={{marginLeft:10}} name="image" size={22} color="white" />
                </View>
                <View>
                    <Text style={{fontSize:15,marginLeft:5,marginTop:-22}}>Image</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:10,marginLeft:20}}>
                    <MaterialIcons  style={{marginLeft:10}} name="video-call"  size={22} color="white"  />
                </View>
                <View>
                    <Text style={{fontSize:15,marginLeft:5,marginTop:-22}}>Meeting</Text>
                </View>
            </View>
     </View>


{ (this.state.post == '') 
?  <View><Text style={{fontSize:30,marginTop:20,color:'grey',alignSelf:'center'}}>No Posts</Text></View>
: 
<View style={{marginTop:40,marginLeft:5}}> 
<FlatList 
   data={this.state.post}
   keyExtractor={(item)=>item.description}
   renderItem={({item})=>{
     return(
       <View  style={{paddingBottom:30}}>
               <Modal transparent={true} visible={this.state.show} >
                  <View style={{backgroundColor:'#000000aa',flex:1}}>
                  <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',margin:70,borderRadius:10,padding:40,height:190,marginTop:250}}>
                       <View style={{flexDirection:'row',marginTop:-30}} >
                       <AntDesign name="edit" size={22} color="#3b5998" />
                          <Text style={{marginLeft:10,fontSize:17,color:'#3b5998'}} 
                          onPress={()=> this.run({item})} >Edit Post</Text>
                      </View>
                         <View style={{flexDirection:'row',marginTop:20,elevation:2}} >
                            <AntDesign name="delete" size={22} color="#3b5998" />
                            <Text  onPress={()=> { this.setState({show1:true,show:!this.state.show})}} style={{marginLeft:10,fontSize:17,color:'#3b5998'}}>Delete Post</Text>
                          </View>
                          <TouchableOpacity >
                              <View  style={{borderRadius:10,borderWidth:1,borderColor:'grey',width:60,height:30,marginTop:20}}>
                                <Text onPress={()=>this.setState({show:false})} style={{textAlign:'center',fontSize:17,marginTop:2,color:'#3b5998'}}>Cancel</Text>
                              </View>
                             </TouchableOpacity>
                 </View>
               </View>
                </Modal>
           <View style={{flexDirection:'row'}}>
                <Image style={{width:40,height:40,resizeMode:'cover',borderRadius:800,borderWidth:1}} source={{uri:this.state.p_img}} />
                <View style={{flexDirection:'column'}}> 
                     <Text style={{marginLeft:10,fontSize:16,marginTop:10}}>{this.state.username}</Text>
                     {/* <Text style={{marginLeft:10,color:'grey'}}>{item.dateExample.nanoseconds} seconds ago</Text> */}
                 </View>
            <TouchableOpacity >
                <AntDesign style={{marginLeft:250,marginTop:10}} name="ellipsis1" size={24} color="black" 
               onPress={()=>{this.setState({show:true})}} />
               </TouchableOpacity>
          
                
        <Modal  transparent={true} visible={this.state.show1}>
        <View style={{backgroundColor:'#000000aa',flex:1,height:10}}>
             <View  style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',margin:70,borderRadius:10,padding:40,height:140,marginTop:250}}>
                   <Text style={{marginLeft:10,fontSize:17,color:'#3b5998',fontWeight:'bold'}} 
                   >Delete Post?</Text>
                    <Text style={{marginTop:10}}>You can edit it if you need to change something.</Text>
                   
                    <TouchableOpacity >
                              <View  style={{borderRadius:10,borderWidth:1,borderColor:'grey',width:60,height:30,marginTop:20}}>
                                <Text onPress={()=>{this.delete(item.id),this.setState({show1:false,show:false})}} style={{textAlign:'center',fontSize:17,marginTop:2,color:'#3b5998'}}>Yes</Text>
                              </View>
                    </TouchableOpacity>
             </View>
            
       </View>
          </Modal>
             </View>
               
               
             <View>
            <Text style={{color:'black',marginLeft:13,fontSize:15}}>{item.description}</Text>
             </View>
             <View>
                <ImageBackground style={{height:190,width:430,resizeMode:'stretch',marginLeft:-7,marginTop:6}} source={{uri:item.image}} />
             </View>
             <View style={{flexDirection:'row',borderRadius:32,borderColor:'#C6C9C9',borderWidth:1,marginTop:10,height:40,flex:1,flexShrink: 1}}>
                 <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                     <AntDesign style={{marginTop:-1}} name="heart" size={16} color="red" />
                     <Text style={{marginLeft:4,fontSize:13}}>20 likes</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:50}}>
                      <AntDesign style={{marginTop:10}} name="heart" size={16} color="red" />
                      <Text style={{marginLeft:4,marginTop:11,fontSize:13}}>10 views</Text>
                 </View>
                <View style={{flexDirection:'row',marginLeft:40}}>
                       <FontAwesome name="share" style={{marginTop:13}} size={16} color="#4267B2" />
                    <Text style={{marginLeft:4,marginTop:11,flexShrink:1,fontSize:13}}>Share</Text>
                  </View>
              </View>
           
         </View>
     );
   }}

/>

</View>




}
   



   <View style={{marginTop:100}}>
             <Text>tgrt</Text>
             </View>
    </ScrollView>

     </View>
  );
}

}
export default MyProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
