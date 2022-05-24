import React from 'react';
import {View, ScrollView, StyleSheet, StatusBar} from 'react-native';
import Header from './Header';
import Item from './Item'

export default function CardExpansion() {
  const dataList = Array(8).fill(0).map(Number.call, Number);

  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 16}}>
          <Header />
          {dataList.map((_, i) => (
            <Item key={i} index={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    textAlign: 'center',
    flexDirection: 'column',
  },
});
