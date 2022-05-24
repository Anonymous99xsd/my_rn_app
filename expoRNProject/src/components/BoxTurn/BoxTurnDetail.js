import React from 'react';
import {StyleSheet, ImageBackground, View, Modal} from 'react-native';
import Cube from './Cube';

export default function BoxTurnDetail() {
  return (
    <View>
      <Modal animationType="slide" visible={}>
        <Cube>
          <View>
            <ImageBackground
              style={styles.img}
              source={require('../../assets/nature1.jpg')}></ImageBackground>
          </View>
          <View>
            <ImageBackground
              style={styles.img}
              source={require('../../assets/nature2.jpg')}></ImageBackground>
          </View>
          <View>
            <ImageBackground
              style={styles.img}
              source={require('../../assets/nature3.jpg')}></ImageBackground>
          </View>
          <View>
            <ImageBackground
              style={styles.img}
              source={require('../../assets/nature4.jpg')}></ImageBackground>
          </View>
          <View>
            <ImageBackground
              style={styles.img}
              source={require('../../assets/nature5.jpg')}></ImageBackground>
          </View>
        </Cube>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center',
  },
});
