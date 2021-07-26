import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainPageScreen } from './src/screens/shop/MainPage';
import { SingleImagePage } from './src/components/SingleImagePage';

export default function App() {
  return (
    <SingleImagePage
      title={'Ваш заказ успешно оформлен'}
      text={'Чтобы продолжить попкупки вернитесь к каталогу товаров'}
      btntext={'Перейти к товарам'}
      img={require('./src/images/shop/SinglePageImage.png')}
    />
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
