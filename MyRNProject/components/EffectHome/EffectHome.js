import React from 'react';
import {View} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CardExpansion from './CardExpansion/CardExpansion';

const TopTab = createMaterialTopTabNavigator();

const demoComponent = () => {
  return <View></View>
}

export default function EffectHome() {
  return (
    <TopTab.Navigator
      initialRouteName="CardExpansion"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 14
        },
        tabBarStyle: {
          backgroundColor: '#6518F4',
        },
      }}>
      <TopTab.Screen
        name="CardExpansion"
        component={CardExpansion}
        options={{
          tabBarLabel: '卡片展开效果',
        }}
      />
      <TopTab.Screen name="tab 2" component={demoComponent} />
    </TopTab.Navigator>
  );
}
