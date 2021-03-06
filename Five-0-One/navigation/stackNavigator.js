import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Game501 from './../screens/Game501'
import statsScreen from './../screens/statsScreen'
import PreGame from './../screens/preGame'

const mainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <mainStack.Navigator>
            <mainStack.Screen name="pre Game" component={PreGame} options={{headerShown: false}}/>
            <mainStack.Screen name="501" component={Game501} options={{headerShown: false}}/>
            <mainStack.Screen name="Stats" component={statsScreen}/>
        </mainStack.Navigator>
    </NavigationContainer>
  );
}
