import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Image,
  Text,
  TouchableWithoutFeedback,
  Modal,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cube from './Cube';

const imgs = [
  {id: 1, username: 'jsomin86', url: require('../../assets/nature1.jpg')},
  {id: 2, username: 'kingjames', url: require('../../assets/nature2.jpg')},
  {id: 3, username: 'sooyaaa_', url: require('../../assets/nature3.jpg')},
  {id: 4, username: 'jessica.syj', url: require('../../assets/nature4.jpg')},
  {id: 5, username: 'taeyeon_ss', url: require('../../assets/nature5.jpg')},
];

export default function BoxTurn() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.thumbnail}>
          {imgs.map(v => {
            return (
              <TouchableWithoutFeedback
                onPress={() => setIsVisible(true)}
                key={v.id}>
                <View style={styles.item}>
                  <LinearGradient
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={['#0000EE', '#1C86EE', '#63B8FF']}
                    style={styles.imgBorder}>
                    <View style={styles.imgMask}>
                      <Image style={styles.img} source={v.url}></Image>
                    </View>
                  </LinearGradient>
                  <Text style={{fontSize: 12, marginTop: 5}}>{v.username}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
      </View>

      <Modal
        onRequestClose={() => setIsVisible(false)}
        animationType="slide"
        visible={isVisible}>
        <Cube>
          {/* <View>
              <ImageBackground style={styles.bgImg}
                source={require('../../assets/nature1.jpg')}></ImageBackground>
            </View>
            <View>
              <ImageBackground style={styles.bgImg}
                source={require('../../assets/nature2.jpg')}></ImageBackground>
            </View>
            <View>
              <ImageBackground style={styles.bgImg}
                source={require('../../assets/nature3.jpg')}></ImageBackground>
            </View>
            <View>
              <ImageBackground style={styles.bgImg}
                source={require('../../assets/nature4.jpg')}></ImageBackground>
            </View>
            <View>
              <ImageBackground style={styles.bgImg}
                source={require('../../assets/nature5.jpg')}></ImageBackground>
            </View> */}
          <View style={[{backgroundColor: '#63B8FF'}]}></View>
          <View style={[{backgroundColor: '#1C86EE'}]}></View>
          <View style={[{backgroundColor: '#0000EE'}]}></View>
        </Cube>
      </Modal>
    </View>
  );
}

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  thumbnail: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  item: {
    width: 80,
    height: 100,
    marginLeft: 20,
    alignItems: 'center',
  },
  imgBorder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgMask: {
    width: 76,
    height: 76,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  modalContainer: {
    // width: width,
    // height: height,
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
  },
});
