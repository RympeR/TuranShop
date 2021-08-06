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

const Cart = () => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;
  return (
    <View style={[styles.centerFlex]}>
      <ScrollView style={[cmp('t', 10), cpmh(68)]}>
        <CartItem
          image={require("../../images/shop/cart_product.png")}
          name={"Наушники Defur"}
          seller={"Александр"}
          product_amount={1}
          id={"2"}
          cost={45.8}
        />
        <CartItem
          image={require("../../images/shop/cart_product.png")}
          name={"Наушники Defur"}
          seller={"Александр"}
          product_amount={1}
          id={"2"}
          cost={45.8}
        />
        <CartItem
          image={require("../../images/shop/cart_product.png")}
          name={"Наушники Defur"}
          seller={"Александр"}
          product_amount={1}
          id={"2"}
          cost={45.8}
        />
        <CartItem
          image={require("../../images/shop/cart_product.png")}
          name={"Наушники Defur"}
          seller={"Александр"}
          product_amount={1}
          id={"2"}
          cost={45.8}
        />
      </ScrollView>
      <GreenBtn text={"Оформить заказ 115$"} />
      <Text style={[cm("t", 20), styles.marginCenterHorizontal]}>
        Продолжить попкупки
      </Text>
    </View>
  );
};

export { Cart };
