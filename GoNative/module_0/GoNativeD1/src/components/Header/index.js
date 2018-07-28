import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>GoNative App</Text>
  </View>
);

const styles = StyleSheet.create({
  container : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
  },

  title: {
    color: '#333333',
  }
})

export default Header;
