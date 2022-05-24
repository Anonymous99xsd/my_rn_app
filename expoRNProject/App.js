import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EffectHome from './src/components/EffectHome/EffectHome';
import BoxTurn from './src/components/BoxTurn/BoxTurn';
import UIHome from './src/components/UIHome/UIHome';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CSSEffect"
        activeColor="#fff"
        inactiveColor="#ccc"
        barStyle={{backgroundColor: '#fff'}}
        shifting={true}
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(85,88,218,1)',
          },
          headerTintColor: '#fff',
        }}>
        <Tab.Screen
          name="CSSEffect"
          component={EffectHome}
          options={{
            tabBarColor: '#6518F4',
            tabBarLabel: 'CSS Effect',
            tabBarIcon: () => (<FontAwesome name='home' size={26} color='#fff' />)
            // title: props => <Title {...props} />,
          }}
        />
        <Tab.Screen
          name="BoxTurn"
          component={BoxTurn}
          options={{
            tabBarColor: '#1F65FF',
            tabBarLabel: 'Box Turn',
            tabBarIcon: () => (<FontAwesome name='heart' size={24} color='#fff' />)
          }}
        />
        <Tab.Screen
          name="Tab3"
          component={UIHome}
          options={{
            tabBarColor: '#006D6A',
            tabBarLabel: 'Tab 3',
            tabBarIcon: () => (<FontAwesome name='shopping-cart' size={26} color='#fff' />)
          }}
        />
        <Tab.Screen
          name="Tab4"
          component={UIHome}
          options={{
            tabBarColor: '#D02760',
            tabBarLabel: 'Tab 4',
            tabBarIcon: () => (<FontAwesome name='user' size={26} color='#fff' />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
