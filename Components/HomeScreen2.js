import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,ScrollView,ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { Button,Card} from 'react-native-paper';
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Header from './Header'
import CreatePost2 from './CreatePost2'
import { CommonActions } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

export default function HomeScreen2({navigation}) {

     cardInfo=[
    {image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlxcOzqgKGGgWeAe8pMiJHp9OAolvKLqMECw&usqp=CAU",image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA9TQiw-24o8U01lVat5RsQPnweLF3h07bSg&usqp=CAU",view1:"454 views",view2:"467 views",share:"",name:"Muhammad hussain",second:"24"},
    {image1:"https://cf.bstatic.com/images/hotel/max1024x768/172/172040686.jpg",image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQsQotxs-n_eVJjEJimAyXa2ErGKdS9Rpt0A&usqp=CAU",view1:"654 views",view2:"876 views",share:"", name:"Aimen Naramatha",second:"60"},
    {image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBp_gKIMRe9TJPtHBdODVGAcFsxHiqlz460A&usqp=CAU",image2:"data:image/jpeg;base64,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",view1:"453 views",view2:"748 views",share:"", name:"Amir husaain"},
    {image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOPqgjAF2JLf6Gu-KIT1TWBusnzkEzfKMGrA&usqp=CAU",image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-PTFE_9k5ZfK-Cd3wp98mZTJgFEoxUtstA&usqp=CAU",view1:"234 views",view2:"567 views",share:"", name:"Hira hashmit",second:"34"},       

]

    newlist=[
       {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCMcMkqdWKdzQbHFsqmeDaePVsXAv3z8b2IQ&usqp=CAU"},
       {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdZIu5bZfpEPyYH3zUHkQemainDQKg4Oho5w&usqp=CAU"},
       {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbmFqTQON1GlHTS9nRAafhYx9a1f29hZSH2g&usqp=CAU"},
       {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5THZYxrfojrxYnRG2-kXKZVdFvOLu5JkIFQ&usqp=CAU"},
    
   ]
 
 
  return (
     <View >
       <Header/>
         <ScrollView>
         
            <View>
                <Text style={{fontWeight:'bold',fontSize:23,marginTop:10,paddingLeft:10,color:'#605F5F'}}>Buddie TV</Text>
            </View>
      
   <View style={{flexDirection:'row',marginTop:4,flex:1}}>
        <ScrollView style={{marginTop:10}} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}}>
         <TouchableOpacity onPress={ () => navigation.navigate('CreatePost2') } >
            <View style={{flexDirection:'row'}}> 
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:80,paddingLeft:10}}>
                <MaterialIcons  name="video-call" size={22} color="white" />
                </View>
                    <Text style={{marginLeft:4,color:'#605F5F',fontSize:17,fontWeight:'bold'}}>Go Live</Text>
           </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ () => navigation.navigate('CreatePost2') } >
            <View style={{flexDirection:'row'}}> 
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:80,marginLeft:20}}>
                <MaterialIcons  style={{marginLeft:10}} name="slideshow" size={22} color="white" />
                </View>
                    <Text style={{marginLeft:4,color:'#605F5F',fontSize:17,fontWeight:'bold'}}>Shows</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('CreatePost2') } >
            <View style={{flexDirection:'row'}}> 
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:80,marginLeft:20}}>
                <MaterialCommunityIcons style={{marginLeft:10}} name="food-fork-drink" size={22} color="white" />
                </View>
                    <Text style={{marginLeft:4,color:'#605F5F',fontSize:17,fontWeight:'bold'}}>Food</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('CreatePost2') } >
            <View style={{flexDirection:'row'}}> 
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:80,marginLeft:20}}>
                    <Entypo style={{marginLeft:10}}v name="game-controller" size={22} color="white" />
                 </View>
                    <Text style={{marginLeft:4,color:'#605F5F',fontSize:17,fontWeight:'bold'}}>Games</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('CreatePost2') } >
            <View style={{flexDirection:'row'}}> 
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:80,marginLeft:20}}>
                <AntDesign style={{marginLeft:10}} name="idcard" size={22} color="white" />
                </View>
                    <Text style={{marginLeft:4,color:'#605F5F',fontSize:17,fontWeight:'bold'}}>Recommendations</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('CreatePost2') } >
            <View style={{flexDirection:'row'}}> 
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:80,marginLeft:20}}>
                <MaterialIcons  style={{marginLeft:10}} name="memory" size={22} color="white" />
                </View>
                    <Text style={{marginLeft:4,color:'#605F5F',fontSize:17,fontWeight:'bold'}}>Memories</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('CreatePost2') } >
            <View style={{flexDirection:'row'}}> 
                <View style={{backgroundColor:'#4267B2',width:45,borderRadius:80,marginLeft:20}}>
                <AntDesign style={{marginLeft:10}} name="medicinebox" size={22} color="white" />
               </View>
                    <Text style={{marginLeft:4,color:'#605F5F',fontSize:17,fontWeight:'bold'}}>COVID'19</Text>
           </View>
            </TouchableOpacity>
         </ScrollView>
 </View>
 
       
       
        <View style={{marginTop:30,marginLeft:5,flex:1,paddingLeft:10}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                    <View style={{borderRadius:10,borderWidth:1,width:129,height:36,paddingLeft:10,paddingTop:4,borderColor:'#4267B2'}}>
                        <Text style={{fontSize:16}}> Your Watchlist </Text>
                    </View>
                </TouchableOpacity>
             
             <View style={{marginLeft:10,flexDirection:'row'}}>
                { newlist.map((data2,index)=>{
                    return (
                        <Image key={index} style={{width:20,height:20,borderWidth:1,borderRadius:10}} source={{uri:data2.img}} />
                     ); }) 
                 }
                  </View>
            </View>
      </View>  
 

    <View style={{marginTop:40,marginLeft:5}}> 
     {
     cardInfo.map((data,index)=>{
        return (
        <View key={index} style={{paddingBottom:30}}>
         <View style={{flexDirection:'row'}}>
             <Image style={{width:50,height:50,resizeMode:'cover',borderRadius:800,borderWidth:1}} source={{uri:data.image2}} />
            <Text style={{marginLeft:10,fontSize:16,marginTop:10}}>{data.name}</Text>
         </View>
         <View style={{flexDirection:'row',paddingLeft:60,marginTop:-20}}>
        <Text>{data.second} seconds</Text>
            <MaterialIcons style={{paddingLeft:5,marginTop:2}} name="public" size={14} color="black" />
        </View>
         <View style={{marginTop:10}}>
            <ImageBackground style={{height:190,width:430,resizeMode:'stretch',marginLeft:-7,marginTop:6}} source={{uri:data.image1}} />
         </View>
         <View style={{flexDirection:'row',borderRadius:32,borderColor:'#C6C9C9',borderWidth:1,marginTop:10,height:40}}>
             <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                 <AntDesign style={{marginTop:-1}} name="heart" size={16} color="red" />
                 <Text style={{marginLeft:4}}>{data.view1}</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:50}}>
                  <AntDesign style={{marginTop:10}} name="heart" size={16} color="red" />
                  <Text style={{marginLeft:4,marginTop:11,fontSize:13}}>{data.view2}</Text>
             </View>
            <View style={{flexDirection:'row',marginLeft:40}}>
                   <FontAwesome name="share" style={{marginTop:13}} size={16} color="#4267B2" />
                <Text style={{marginLeft:4,marginTop:9}}>Share</Text>
              </View>
          </View>
          
     </View>
  )
   })
}
  </View>
   
  <View style={{marginTop:100}}>

</View>
 
 
   </ScrollView>

   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
