import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import localnews from './news/localnews';
import indiannews from './news/indiannews';
import internationalnews from './news/internationalnews';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const taskStack1 = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name = "Local news" component={localnews} />
  </Stack.Navigator>  
  );
}; 

const taskStack2 = () => {
  return(
  <Stack.Navigator>
     <Stack.Screen name = "Indian news" component={indiannews} />
  </Stack.Navigator>  
  );
};

const taskStack3 = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name = "International news" component={internationalnews} />
  </Stack.Navigator>  
  );
};

function TabNavigator1() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Local news"
        component={taskStack1}
        options={{
          tabBarLabel: "Local news",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="md-information-circle-outline"
              size={focused ? 26 : 20}
              color={color} />
          ),
        }} />

      <Tab.Screen
        name="Indian news"
        component={taskStack2}
        options={{
          tabBarLabel: "Indian news",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="md-pin"
              size={focused ? 26 : 20}
              color={color} />

          ),
        }} />

      <Tab.Screen
        name="International news"
        component={taskStack3}
        options={{
          tabBarLabel: "International news",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="md-headset"
              size={focused ? 26 : 20}
              color={color} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
   <NavigationContainer>
     <TabNavigator1 />
   </NavigationContainer>
   
  );
}

