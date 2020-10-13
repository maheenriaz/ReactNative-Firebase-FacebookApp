import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Header2 from './Components/Header2';
import Header4 from './Components/Header4';
import HomeScreen from './Components/HomeScreen';
import HomeScreen2 from './Components/HomeScreen2';
import Setting from './Components/Setting';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CreatePost from './Components/CreatePost';
import CreatePost2 from './Components/CreatePost2';
import MyProfile from './Components/MyProfile';
import EditProfile from './Components/EditProfile';
import EditPost from './Components/EditPost';
import Login from './Components/Login';
import Login2 from './Components/Login2';
import Signup from './Components/Signup';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const HomeStack = createStackNavigator({
  Login: {screen:Login,
    navigationOptions: {
      headerShown: false,
  }},
  
  HomeScreen: {screen:HomeScreen,
    navigationOptions: {
      headerShown: false,
  }},
  HomeScreen2: {screen:HomeScreen2,
    navigationOptions: {
      headerShown: false,
  }},
  Login2: {screen:Login2,
    navigationOptions: {
      headerShown: false,
  }},

  Signup: {screen:Signup,
    navigationOptions: {
      headerShown: false,
  }},
});
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 0) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Login" || route.routeName === "Login2"|| route.routeName === "Signup") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible
  };
};
const mySwitch= createSwitchNavigator({
  CreatePost: {screen:CreatePost,
    navigationOptions: {
      headerShown: false,
  }},
 
})
const SettingsStack = createStackNavigator({
  Setting: {screen:Setting,
    navigationOptions: {
      headerShown: false,
  }},
});
const CreatePost2Stack = createStackNavigator({
  Setting: {screen:CreatePost2,
    navigationOptions: {
      headerShown: false,
  }},
});
const MyProfileStack = createStackNavigator({
  MyProfile: {screen:MyProfile,
    navigationOptions: {
      headerShown: false,
  }},
  EditProfile: {screen:EditProfile,
    navigationOptions: {
      headerShown: false,
  }},
  EditPost: {screen:EditPost,
    navigationOptions: {
      headerShown: false,
  }},
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      HomeScreen: {screen: HomeStack,
        navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
            <AntDesign name="home" size={24} color="black" />
          )  
        }  
      },
      Setting: {screen: SettingsStack,
        navigationOptions:{  
          tabBarLabel:'Setting',  
          tabBarIcon:({tintColor})=>(  
            <AntDesign name="setting" size={24} color="black" />
          )  
        }  
      },
      CreatePost: {screen: mySwitch,
        navigationOptions:{  
          tabBarLabel:'CreatePost',  
          tabBarIcon:({tintColor})=>(  
            <AntDesign name="user" size={24} color="black" />
          )  
        }  
      },
      CreatePost2: {screen: CreatePost2,
        navigationOptions:{  
          tabBarLabel:'CreatePost2',  
          tabBarIcon:({tintColor})=>(  
            <AntDesign name="heart" size={24} color="black" />
          )  
        }  
      },
      MyProfile: {screen: MyProfileStack,
        navigationOptions:{  
          tabBarLabel:'MyProfile',  
          tabBarIcon:({tintColor})=>(  
            <Entypo name="user" size={24} color="black" />
          )  
        }  
      },
    },
  )
);
