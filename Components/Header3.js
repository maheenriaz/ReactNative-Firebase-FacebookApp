
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

class Header3 extends React.Component {
  render(){
        return (
         <View>
              <View style={{flexShrink:1,flexDirection:"row",justifyContent:'space-around',flexDirection:'row',marginTop: Constant.statusBarHeight,height:54,backgroundColor:'white'}}>
                <AntDesign style={{marginTop:15}} name="left" size={20} color="black" />
                <TextInput style={{height:40,marginTop:6,
                borderWidth:1,borderRadius:19,paddingLeft:10,
                width:330,borderColor:'#9D9C9C'}}
                 placeholder="Search your buddie" />
           </View>
         </View>
          );
    }
 
}
export default Header3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
