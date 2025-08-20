import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#01b0f1",
        headerStyle:{
          backgroundColor: "#5a6f89"
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle:{
          backgroundColor: "#25292e"
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => 
          <Ionicons name={focused? "home-sharp" : "home-outline" } color={color} size={24}/>,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>,
        }}
      />
    </Tabs>
  );
}
