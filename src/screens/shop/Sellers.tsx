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
  TextInput,
  ImageSourcePropType,
  FlatList,
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
import { SellerBlock } from "../../components/SellerBlock";
import { ProductItemMain } from "../../components/ProductItemMain";
// import { Icon } from 'react-native-vector-icons';

type SellerBlockType = {
  image: ImageSourcePropType;
  name: string;
  rating: number;
  rate: string;
  product_amount: number;
  id?: string;
  verified?: boolean;
};

const SellerScreen = ({ navigation }) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  const [sellerSearch, onChangeSellerSearch] = useState("");
  let items: SellerBlockType[] = [
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
    {
      id: "2",
      image: require("../../images/shop/seller.png"),
      verified: true,
      product_amount: 120,
      rate: "Хорошо!",
      rating: 3.5,
      name: "tset seller",
    },
  ];
  return (
    <View>
      <HeaderBack navigation={navigation} title={"Продавцы"} shop_ico />
      <View style={[styles.row, cm("t", 70), cm("l", 10)]}>
        {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
        <TextInput
          style={[styles.searchInput, cm("l", 10)]}
          placeholder="Поиск"
          onChangeText={onChangeSellerSearch}
          value={sellerSearch}
          placeholderTextColor="rgba(0, 0, 0, 1);"
          selectTextOnFocus
        />
        <TouchableHighlight
          style={[styles.settingsHighlight, cm("l", 8)]}
          underlayColor={"#EFEEF2"}
        >
          <Image
            source={require("../../images/shop/settings.png")}
            style={[styles.settingsImg, cm("t", 10), cm("l", 11)]}
          />
        </TouchableHighlight>
      </View>

      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={[cm("t", 30)]}
      > */}
      <View style={[styles.center]}>
        <FlatList
          style={[cm("t", 30)]}
          data={items.filter((item) =>
            sellerSearch != ""
              ? item.name.toLowerCase().includes(sellerSearch.toLowerCase())
              : item.name
          )}
          keyExtractor={(item, index: number) => index.toString()} //has to be unique
          renderItem={({ item }) => (
            <SellerBlock
              id={item.id}
              image={item.image}
              verified={item.verified}
              product_amount={item.product_amount}
              rate={item.rate}
              rating={item.rating}
              name={item.name}
            />
          )}
          horizontal={false}
          numColumns={1}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export { SellerScreen };
