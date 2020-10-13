
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput} from 'react-native';
import 'react-native-gesture-handler';
import MyProfile from './MyProfile';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Header5 extends React.Component {
  render(props){
        return (
         <View>
              <View  style={{flexShrink:1,flexDirection:"row",flexDirection:'row',marginTop: Constant.statusBarHeight,height:54,backgroundColor:'white'}}>
                 <AntDesign  style={{marginTop:15}} name="left" size={20} color="black" />
                <Text style={{fontSize:20,marginTop:13,paddingLeft:5,fontWeight:'bold'}}>Profile Setting</Text>
          
           </View>
         

         </View>
          );
    }
 
}
export default Header5;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
