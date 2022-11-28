import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabsScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Messages" component={Messages} />
        </Tab.Navigator>
    );
}

export default MainTabsScreen;

const HomeStackScreen = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}