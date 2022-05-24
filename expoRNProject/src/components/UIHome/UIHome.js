import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Modal,
  Animated,
  PanResponder,
} from 'react-native';
import Cube from '../BoxTurn/Cube'

export default function UIHome() {
  const [modalVisible, setModalVisible] = useState(false);

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        Animated.event([null, {dx: pan.x, dy: pan.y}], {
          useNativeDriver: false,
        })(evt, gestureState);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <View>
      <Button onPress={() => setModalVisible(true)} title="click" />
      <Modal
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        visible={modalVisible}>
        <Cube>
          <View collapsable={false} style={[{backgroundColor: '#63B8FF'}]}></View>
          <View collapsable={false} style={[{backgroundColor: '#1C86EE'}]}></View>
          <View collapsable={false} style={[{backgroundColor: '#0000EE'}]}></View>
        </Cube>
      </Modal>

      {/* <Modal>
        <View
          style={{
            backgroundColor: '#eee',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              transform: [{translateX: pan.x}, {translateY: pan.y}],
            }}
            {...panResponder.panHandlers}>
            <View style={{backgroundColor: '#000', width: 100, height: 100}}></View>
          </Animated.View>
        </View>
      </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({});
