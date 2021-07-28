import React, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { CartItem } from '../../components/CartItem';
import { GreenBtn } from '../../components/GreenBtn';
import { connect } from "react-redux";
const screenWidth = Dimensions.get("screen").width;

const Cart = () => {
    return (
        <View>
        <ScrollView>
        <CartItem
            image={require('../../images/shop/cart_product.png')}
            name={'Наушники Defur'}
            seller={'Александр'}
            product_amount={1}
            id={'2'}
            cost={45.8}
        />
        </ScrollView>
        <GreenBtn
            text={'Оформить заказ 115$'}
        />
        <Text>
            Продолжить попкупки
        </Text>
        </View>
    );
}

export { Cart };
