import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'react-native';

//screens
import HomeScreen from './Screens/HomeScreen';
import MessageScreen from './Screens/MessageScreen';
import SettingScreen from './Screens/SettingScreen';
import AccountScreen from './Screens/AccountScreen';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#f2f2f2' barStyle='dark-content' />
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#0080ff"
        barStyle={{ backgroundColor: '#f2f2f2' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessageScreen}
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="message" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="file-settings" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;