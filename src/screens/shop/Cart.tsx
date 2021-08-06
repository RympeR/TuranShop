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
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
} from "react-native";
import { CartItem } from "../../components/CartItem";
import { GreenBtn } from "../../components/GreenBtn";
import { connect } from "react-redux";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
  computePercentMaxHeight,
} from "../../styles/style";
import  { HeaderBack }  from '../../components/HeaderBack';

type CartItemType = {
  image: ImageSourcePropType;
  name: string;
  seller: string;
  product_amount: number;
  id?: string;
  cost: number;
};

const Cart = ({ navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;
  let items: CartItemType[] = [
    {
      id: '1',
      image: require("../../images/shop/cart_product.png"),
      name: 'Наушники Defur',
      seller: "Александр",
      product_amount: 1,
      cost: 45.8
    },
    {
      id: '1',
      image: require("../../images/shop/cart_product.png"),
      name: 'Наушники Defur',
      seller: "Александр",
      product_amount: 1,
      cost: 45.8
    },
    {
      id: '1',
      image: require("../../images/shop/cart_product.png"),
      name: 'Наушники Defur',
      seller: "Александр",
      product_amount: 1,
      cost: 45.8
    },
    {
      id: '1',
      image: require("../../images/shop/cart_product.png"),
      name: 'Наушники Defur',
      seller: "Александр",
      product_amount: 1,
      cost: 45.8
    },
  ]
  let total_cost = items.reduce((a, b) => a + (b['cost'] || 0), 0);
  
  return (

    <SafeAreaView style={[styles.centerFlex]}>
      <HeaderBack
        navigation={navigation}
        title={'Корзина'}
      />
      <ScrollView style={[cmp('t', 10), cpmh(68)]}>
        {items.map((props:CartItemType, index:number) =>(
            <CartItem
              id={props.id}
              image={props.image}
              name={props.name}
              seller={props.seller}
              product_amount={props.product_amount}
              cost={props.cost}
              key={index}
            />
          ))}
      </ScrollView>
      <GreenBtn text={`Оформить заказ ${total_cost} $`} />
      <Text style={[cm("t", 20), cm("b", 30), styles.marginCenterHorizontal]}>
        Продолжить попкупки
      </Text>
    </SafeAreaView>
  );
};

export { Cart };
