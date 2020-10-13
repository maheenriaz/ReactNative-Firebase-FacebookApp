import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,ScrollView } from 'react-native';
import Header2 from './Header2';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function CreatePost2({navigation}) {
  return (
    <View >
     
      <Header2 navigation={navigation} />
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
                       <MaterialIcons name="public" size={15} color="black" />Hide with Julie,Simran
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
        />
      </View>

      <View style={{marginTop:30}}>
         <View style={{paddingLeft:15}}>
             <TextInput style={{height:40,borderWidth:1,borderRadius:10,paddingLeft:10,width:380,borderColor:'#9D9C9C'}} placeholder="Select Background" />
         </View>        
      </View>
      
      <View style={{marginTop:30,paddingLeft:10}}>
        <Text style={{fontSize:17,fontWeight:'bold'}}>Popular Background : </Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}} >
        <View style={{flexDirection:'row',marginTop:7}}>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'pink',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#B8CC2D',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#7E49CC',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#EF4049',borderRadius:10}}></View>
              <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#34FC00',borderRadius:10}}></View>
         </View>
         </ScrollView>
      </View>
      
      <View style={{marginTop:30,paddingLeft:10}}>
        <Text style={{fontSize:17,fontWeight:'bold'}}>New Background : </Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}} >
        <View style={{flexDirection:'row',marginTop:7}}>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#0037FC',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#00FC81',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#00E3FC',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#2400FC',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#69743A',borderRadius:10}}></View>
         </View>
         </ScrollView>
      </View>
  
      <View style={{marginTop:30,paddingLeft:10}}>
        <Text style={{fontSize:17,fontWeight:'bold'}}>More Background : </Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}} >
        <View style={{flexDirection:'row',marginTop:7}}>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#442B6E',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#6E642B',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#2B6C6E',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#5C2B6E',borderRadius:10}}></View>
            <View style={{marginLeft:4,width:90,height:90,backgroundColor:'#6E2B41',borderRadius:10}}></View>
         </View>
         </ScrollView>
      </View>

      <View style={{marginTop:150}}> 
           <Text>dd</Text>
      </View>
    
      </ScrollView>
    </View>
   
  );
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
