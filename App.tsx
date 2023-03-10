/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const instructions = '123';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.screen}>
        <SafeAreaView style={styles.saveArea}>
          <View style={styles.topBar}>
            <Text style={styles.topBarTitleText}>React Native Scanner</Text>
          </View>
        </SafeAreaView>

        {/* <View style={styles.caption}>
          <Text style={styles.captionTitleText}>
            Welcome To React-Native-Camera Tutorial
          </Text>
        </View>

        <RNCamera style={styles.rnCamera} />

        <View style={styles.cameraControl}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>New QR Scan</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {},
  saveArea: {},
  rnCamera: {},
  cameraControl: {},
  btnText: {},
  btn: {},
  topBar: {
    height: 50,
    backgroundColor: '#62d1bc', // green
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffff', // white
    fontSize: 20,
  },
  caption: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionTitleText: {
    color: '#121B0D', // black
    fontSize: 16,
    fontWeight: '600',
  },
});
