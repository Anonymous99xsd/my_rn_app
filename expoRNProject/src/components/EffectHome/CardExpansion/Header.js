import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function Header() {
  return (
    <View>
      <Text style={styles.headerText}>Select Flight</Text>
      <View style={styles.tripDetail}>
        <Text style={styles.tripDetailText}>Your Trip</Text>
        <View style={styles.tripDest}>
          <Text style={styles.tripDestText}>BLR - DEL</Text>
          <View style={styles.oneWay}>
            <Text style={styles.oneWayText}>One Way</Text>
          </View>
        </View>
        <Text style={styles.tripDetailText}>12th June, 2020</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 头部样式
  headerText: {
    color: 'rgb(34, 34, 34)',
    fontWeight: '700',
    fontSize: 20,
    width: '100%',
    height: 46,
    textAlign: 'center',
    marginTop: StatusBar.currentHeight,
    letterSpacing: 1,
    marginHorizontal: 'auto',
  },
  tripDetail: {
    flexDirection: 'column',
    textAlign: 'left',
    marginTop: 20,
  },
  tripDetailText: {
    color: '#747474',
    fontSize: 10,
    letterSpacing: 2,
  },
  tripDest: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tripDestText: {
    color: '#141414',
    fontWeight: '700',
    fontSize: 28,
    letterSpacing: 2,
  },
  oneWay: {
    backgroundColor: '#498eff',
    borderColor: '#0061ff',
    borderWidth: 1,
    position: 'relative',
    height: 22,
    marginLeft: 10,
    borderRadius: 3,
  },
  oneWayText: {
    fontSize: 10,
    fontWeight: '100',
    color: '#fff',
    paddingVertical: 3,
    paddingHorizontal: 5,
    letterSpacing: 1,
  },
});
