import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './home';
import Example from './example';
import Explore from './explore';
import Chat from './chat';
import Profile from './profile';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:string;
          const uri = 'https://www.offidocs.com/images/xxnxxlogoicon.jpg.pagespeed.ic.G2BSahjV0Y.jpg'

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Example') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#b80000', // Tomato color as per the screenshot
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#dddddd',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Example" component={Example} options={{ tabBarLabel: 'Dashboard' }} />
      <Tab.Screen name="Explore" component={Explore} options={{ tabBarLabel: 'Explore' }} />
      <Tab.Screen name="Chat" component={Chat} options={{ tabBarLabel: 'Chat' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
