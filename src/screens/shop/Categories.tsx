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
import { BigCategory } from "../../components/BigCategory";
import { connect } from "react-redux";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
} from "../../styles/style";
import { HeaderBack } from "../../components/HeaderBack";

const CategoriesScreen = ({ navigation }) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;

  return (
    <View>
      <View>
        <HeaderBack navigation={navigation} title={"Категории"} shop_ico />
      </View>
      <ScrollView  style={[cm("t", 80)]}>
        <View
          style={[
            styles.center,
            cm("b", 40),
            cm("l", 15),
          ]}
        >
          <BigCategory
            text={"Тестовая категория"}
            ico={require("../../images/shop/CategoryImg.png")}
          />
          <BigCategory
            text={"Тестовая категория"}
            ico={require("../../images/shop/CategoryImg.png")}
          />
          <BigCategory
            text={"Тестовая категория"}
            ico={require("../../images/shop/CategoryImg.png")}
          />
          <BigCategory
            text={"Тестовая категория"}
            ico={require("../../images/shop/CategoryImg.png")}
          />
          <BigCategory
            text={"Тестовая категория"}
            ico={require("../../images/shop/CategoryImg.png")}
          />
          <BigCategory
            text={"Тестовая категория"}
            ico={require("../../images/shop/CategoryImg.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export { CategoriesScreen };
