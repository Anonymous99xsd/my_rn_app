import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';

const data = [
  {
    src: 'https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg',
    style: {
      width: 102,
      height: 51,
      marginVertical: 22,
      marginHorizontal: 12,
    },
    label: 'rgb(13, 28, 83)',
  },
  {
    src: 'https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png',
    style: {
      width: 93,
      height: 26,
      marginVertical: 34,
      marginHorizontal: 16,
    },
    label: 'rgb(90, 5, 49)',
  },
  {
    src: 'https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png',
    style: {
      width: 99,
      height: 23,
      marginVertical: 41,
      marginHorizontal: 12,
    },
    label: 'rgb(230, 26, 56)',
  },
  {
    src: 'https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg',
    style: {
      width: 92,
      height: 46,
      marginVertical: 22,
      marginHorizontal: 15,
    },
    label: 'rgb(252, 178, 50)',
  },
  {
    src: 'https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg',
    style: {
      width: 92,
      height: 51,
      marginVertical: 22,
      marginHorizontal: 12,
    },
    label: 'rgb(13, 28, 83)',
  },
  {
    src: 'https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png',
    style: {
      width: 93,
      height: 26,
      marginVertical: 34,
      marginHorizontal: 16,
    },
    label: 'rgb(90, 5, 49)',
  },
  {
    src: 'https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png',
    style: {
      width: 99,
      height: 23,
      marginVertical: 41,
      marginHorizontal: 12,
    },
    label: 'rgb(230, 26, 56)',
  },
  {
    src: 'https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg',
    style: {
      width: 92,
      height: 46,
      marginVertical: 22,
      marginHorizontal: 15,
    },
    label: 'rgb(252, 178, 50)',
  },
];

export default function Item({index}) {
  const [active, setActive] = useState(false);
  // 动画
  const heightAnim = useRef(new Animated.Value(100)).current;
  const firstAnim = useRef(new Animated.Value(0)).current;
  const secondAnim = useRef(new Animated.Value(0)).current;
  const thirdAnim = useRef(new Animated.Value(0)).current;
  const heightChange = () => {
    if (!active) {
      Animated.parallel([
        Animated.timing(heightAnim, {
          toValue: 300,
          duration: 900,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          useNativeDriver: false,
        }),
        Animated.timing(firstAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          useNativeDriver: false,
        }),
        Animated.timing(secondAnim, {
          toValue: 1,
          duration: 200,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          delay: 400,
          useNativeDriver: false,
        }),
        Animated.timing(thirdAnim, {
          toValue: 1,
          duration: 200,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          delay: 600,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(heightAnim, {
          toValue: 100,
          duration: 900,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          useNativeDriver: false,
        }),
        Animated.timing(firstAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          delay: 300,
          useNativeDriver: false,
        }),
        Animated.timing(secondAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          delay: 200,
          useNativeDriver: false,
        }),
        Animated.timing(thirdAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          useNativeDriver: false,
        }),
      ]).start();
    }
    setActive(!active);
  };

  const dotAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    function dotInfinityAnim() {
      dotAnim.setValue(0);
      Animated.timing(dotAnim, {
        toValue: -18,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(o => {
        if (o.finished) dotInfinityAnim();
      });
    }
    dotInfinityAnim();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => heightChange()}>
      <Animated.View style={[styles.cardContainer, {height: heightAnim}]}>
        <View style={styles.firstDisplay}>
          <View style={styles.flightDetail}>
            <View>
              <Text style={[styles.detailLabel, {color: data[index].label}]}>
                From
              </Text>
            </View>
            <Text style={styles.flightDetailText}>BLR</Text>
            <View>
              <Text style={styles.detailLabel}>Kempegowda International</Text>
            </View>
          </View>
          <View
            style={[
              styles.flightDetail,
              {marginTop: 15, flexDirection: 'row'},
            ]}>
            <View style={styles.animContainer}>
              <Animated.View
                style={[styles.anim, {transform: [{translateX: dotAnim}]}]}>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
              </Animated.View>
            </View>
            <View style={[styles.animContainer, {left: 62}]}>
              <Animated.View
                style={[styles.anim, {transform: [{translateX: dotAnim}]}]}>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
              </Animated.View>
            </View>
            <Image
              style={{width: 30, height: 26}}
              source={{
                uri: 'https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true',
              }}></Image>
          </View>
          <View style={styles.flightDetail}>
            <View>
              <Text style={[styles.detailLabel, {color: data[index].label}]}>
                To
              </Text>
            </View>
            <Text style={styles.flightDetailText}>DEL</Text>
            <View>
              <Text style={styles.detailLabel}>
                Indira Gandhi International
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.first}>
          <Animated.View
            style={[
              styles.firstTop,
              {
                transform: [
                  {
                    translateY: firstAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 100],
                    }),
                  },
                  {
                    rotateX: firstAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '-180deg'],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              style={data[index].style}
              source={{uri: data[index].src}}></Image>
            <View style={styles.timecontainer}>
              <View>
                <Text style={styles.detailDate}>Bengaluru</Text>
                <View>
                  <Text style={styles.detailTime}>6:20</Text>
                </View>
                <Text style={styles.detailDate}>June 12</Text>
              </View>
              <Image
                style={{
                  width: 30,
                  height: 26,
                  marginTop: 22,
                  marginLeft: 16,
                  marginRight: 16,
                }}
                source={{
                  uri: 'https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true',
                }}></Image>
              <View>
                <Text style={styles.detailDate}>New Delhi</Text>
                <View>
                  <Text style={styles.detailTime}>8:45</Text>
                </View>
                <Text style={styles.detailDate}>June 12</Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.firstBehind,
              {
                transform: [
                  {
                    translateY: firstAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 100],
                    }),
                  },
                  {
                    rotateX: firstAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['180deg', '0deg'],
                    }),
                  },
                ],
              },
            ]}>
            <View style={styles.firstBehindDisplay}>
              <View style={styles.firstBehindRow}>
                <View>
                  <Text style={styles.detail}>6:20 - 8:45</Text>
                  <View>
                    <Text style={styles.detailLabelText}>Flight Time</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.detail}>No</Text>
                  <View>
                    <Text style={styles.detailLabelText}>Transfer</Text>
                  </View>
                </View>
              </View>
              <View style={styles.firstBehindRow}>
                <View>
                  <Text style={styles.detail}>2h 25 min</Text>
                  <View>
                    <Text style={styles.detailLabelText}>Duration</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.detail}>8</Text>
                  <View>
                    <Text style={styles.detailLabelText}>Gate</Text>
                  </View>
                </View>
              </View>
              <View style={styles.firstBehindRow}>
                <View>
                  <Text style={styles.detail}>5:35</Text>
                  <View>
                    <Text style={styles.detailLabelText}>Boarding</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.detail}>20A</Text>
                  <View>
                    <Text style={styles.detailLabelText}>Seat</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.second}>
              <Animated.View
                style={[
                  styles.secondTop,
                  {
                    transform: [
                      {
                        translateY: secondAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 50],
                        }),
                      },
                      {
                        rotateX: secondAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '-180deg'],
                        }),
                      },
                    ],
                  },
                ]}></Animated.View>
              <Animated.View
                style={[
                  styles.secondBehind,
                  {
                    transform: [
                      {
                        translateY: secondAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 50],
                        }),
                      },
                      {
                        rotateX: secondAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['180deg', '0deg'],
                        }),
                      },
                    ],
                  },
                ]}>
                <View style={styles.secondBehindDisplay}>
                  <View>
                    <Text style={styles.price}>$100</Text>
                    <View>
                      <Text style={styles.priceLabel}>Price</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.price}>Economy</Text>
                    <View>
                      <Text style={styles.priceLabel}>Class</Text>
                    </View>
                  </View>
                  <Image
                    style={{width: 98, height: 30}}
                    source={{
                      uri: 'https://github.com/pizza3/asset/blob/master/barcode.png?raw=true',
                    }}></Image>
                </View>
                <View style={styles.third}>
                  <Animated.View
                    style={[
                      styles.thirdTop,
                      {
                        transform: [
                          {
                            translateY: thirdAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, 50],
                            }),
                          },
                          {
                            rotateX: thirdAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['0deg', '-180deg'],
                            }),
                          },
                        ],
                      },
                    ]}></Animated.View>
                  <Animated.View
                    style={[
                      styles.secondBehindBottom,
                      {
                        transform: [
                          {
                            translateY: thirdAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, 50],
                            }),
                          },
                          {
                            rotateX: thirdAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['180deg', '0deg'],
                            }),
                          },
                        ],
                      },
                    ]}>
                    <TouchableWithoutFeedback>
                      <View
                        style={[
                          styles.button,
                          {
                            color: data[index].label,
                            borderColor: data[index].label,
                          },
                        ]}>
                        <Text style={styles.buttonText}>Pay</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </Animated.View>
                </View>
              </Animated.View>
            </View>
          </Animated.View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // 卡片样式
  cardContainer: {
    position: 'relative',
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginVertical: 20,
  },
  firstDisplay: {
    width: '100%',
    height: 100,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 23,
    flexWrap: 'wrap',
    elevation: 1,
  },
  flightDetail: {
    flex: 0.5,
    justifyContent: 'center',
  },
  flightDetailText: {
    fontSize: 23,
    fontWeight: '700',
    color: '#3f3f3f',
    textAlign: 'center',
  },
  detailLabel: {
    fontSize: 10,
    fontWeight: '100',
    textAlign: 'center',
    color: '#686868',
  },
  animContainer: {
    paddingLeft: 0,
    position: 'absolute',
    width: 19,
    height: 10,
    top: 10,
    left: 15,
    overflow: 'hidden',
  },
  anim: {
    width: 34,
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: '#707070',
    borderRadius: 2.5,
    marginRight: 13,
  },
  first: {
    width: '100%',
    height: 100,
    position: 'absolute',
    borderRadius: 5,
    // elevation: 3,
  },
  firstTop: {
    width: '100%',
    height: 100,
    position: 'absolute',
    borderRadius: 8,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backfaceVisibility: 'hidden',
    elevation: 3,
  },
  timecontainer: {
    flex: 1,
    paddingTop: 18,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  detailDate: {
    color: '#a09a9a',
    fontSize: 12,
  },
  detailTime: {
    fontWeight: '700',
    fontSize: 21,
    color: '#000',
  },
  firstBehind: {
    width: '100%',
    height: 100,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#d1d1d1',
    backfaceVisibility: 'hidden',
  },
  firstBehindDisplay: {
    width: '100%',
    height: 100,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 23,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstBehindRow: {
    position: 'relative',
    justifyContent: 'space-between',
    marginTop: 4,
    textAlign: 'left',
  },
  detail: {
    fontSize: 15,
    color: 'rgb(69, 69, 69)',
    fontWeight: '700',
  },
  detailLabelText: {
    color: '#686868',
    fontSize: 10,
    fontWeight: '100',
  },
  second: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: -2,
    borderRadius: 8,
  },
  secondTop: {
    width: '100%',
    height: 50,
    position: 'absolute',
    backgroundColor: 'rgb(231, 231, 231)',
    backfaceVisibility: 'hidden',
    borderRadius: 8,
    elevation: 3,
  },
  secondBehind: {
    width: '100%',
    height: 50,
    position: 'absolute',
    backgroundColor: '#fff',
    backfaceVisibility: 'hidden',
    borderRadius: 8,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  secondBehindDisplay: {
    width: '100%',
    height: 50,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 23,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: '#2d2d2d',
    fontWeight: '700',
    fontSize: 15,
    marginTop: -2,
  },
  priceLabel: {
    color: '#747474',
    fontWeight: '100',
    fontSize: 10,
    textAlign: 'left',
  },
  third: {
    width: '100%',
    height: 50,
    position: 'absolute',
    borderRadius: 8,
  },
  thirdTop: {
    width: '100%',
    height: 50,
    position: 'absolute',
    borderRadius: 8,
    backgroundColor: 'rgb(190, 190, 190)',
    backfaceVisibility: 'hidden',
  },
  secondBehindBottom: {
    width: '100%',
    height: 50,
    position: 'absolute',
    backgroundColor: '#fff',
    backfaceVisibility: 'hidden',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#d1d1d1',
  },
  button: {
    width: '90%',
    paddingVertical: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 19,
    fontWeight: '700',
  },
});
