
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 

class Header extends React.Component {
  render(){
        return (
         <View >
        
          <View style={{justifyContent:'space-between',flexDirection:'row',marginTop: Constant.statusBarHeight,height:50,backgroundColor:'white'}}>
           <View>
                 <Image style={{height:110,width:134,marginTop:-25,resizeMode:'stretch'}} source={{uri:'https://www.ktre.com/resizer/I-92A0SuAmlL-p7up-c5-_eTyRI=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/ORWYWVALSNHDBCYFKKRWLWACGI.png'}} />
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-around',width:80,marginTop:19}}>
                  <FontAwesome name="search" size={24} color="black" />
                  <FontAwesome5 name="facebook-messenger" size={24} color="black" />
              </View>
             </View>
            
             </View>
          );
    }
 
}
export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
