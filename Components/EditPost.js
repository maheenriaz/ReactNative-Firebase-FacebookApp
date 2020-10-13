import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,ScrollView, Alert ,ActivityIndicator} from 'react-native';
import Header6 from './Header6';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default class CreatePost extends React.Component{
  state={
    text:this.props.navigation.state.params.item.description,
    id:this.props.navigation.state.params.item.id,
   image2:'',
    setImage2:'',
    loader:false
}


  render(){ 
   
    console.log(this.props.navigation.state.params.item,"yo")
// console.log(this.state.text,'text')
     if(this.state.loader == true){
    return <ActivityIndicator size="large" color='#4267B2' style={{marginTop:300}} />
  }
  else{ 
  return (
    <View>
      <Header6 text={this.state.text} id={this.state.id}  navigation={this.props.navigation}/>
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
          value={this.state.text}
          onChangeText={(text)=> this.setState({text}) }
        />
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
