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
} from "react-native";
import { BigCategory } from "../../components/BigCategory";
import { TouchableCategory } from "../../components/TouchableCategorySingle";
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
  let categories = [
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
    {
      text:"Тестовая категория",
      ico:require("../../images/shop/search.png"),
      move_location:'products',
      navigation:navigation
    },
  ]
  return (
    <View>
      <View>
        <HeaderBack navigation={navigation} title={"Категории"} shop_ico />
      </View>
      <ScrollView  style={[cm("t", 80)]}>
        <View
          style={[
            // styles.center,
            cm("b", 40),
          ]}
        >
          <FlatList
            data={categories}
            keyExtractor={(item, index: number) => index.toString()} //has to be unique
            renderItem={({ item }) => (
              <TouchableCategory
                id={"1"}
                image={item.ico}
                text={item.text}
                move_location={item.move_location}
                navigation={item.navigation}
                ml
              />
            )}
            horizontal={false}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export { CategoriesScreen };
