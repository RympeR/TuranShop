import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainPageScreen } from './src/screens/shop/MainPage';

export default function App() {
  return (
    <MainPageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
