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
// import { Icon } from 'react-native-vector-icons';

const SellerScreen = ({ navigation }) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  const [sellerSearch, onChangeSellerSearch] = useState("");
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={[cm("t", 30)]}
      >
        <View style={[styles.center]}>
          <SellerBlock
            id={"2"}
            image={require("../../images/shop/seller.png")}
            verified
            product_amount={120}
            rate={"Хорошо!"}
            rating={3.5}
            name={"tset seller"}
          />
          <SellerBlock
            id={"2"}
            image={require("../../images/shop/seller.png")}
            verified
            product_amount={120}
            rate={"Хорошо!"}
            rating={3.5}
            name={"tset seller"}
          />
          <SellerBlock
            id={"2"}
            image={require("../../images/shop/seller.png")}
            verified
            product_amount={120}
            rate={"Великолепно!"}
            rating={4.5}
            name={"tset test"}
          />

          <SellerBlock
            id={"2"}
            image={require("../../images/shop/seller.png")}
            product_amount={120}
            rate={"Хорошо!"}
            rating={3.5}
            name={"tset seller"}
          />

          <SellerBlock
            id={"2"}
            image={require("../../images/shop/seller.png")}
            verified
            product_amount={120}
            rate={"Хорошо!"}
            rating={3.5}
            name={"tset seller"}
          />

          <SellerBlock
            id={"2"}
            image={require("../../images/shop/seller.png")}
            verified
            product_amount={120}
            rate={"Хорошо!"}
            rating={3.5}
            name={"tset seller"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export { SellerScreen };
