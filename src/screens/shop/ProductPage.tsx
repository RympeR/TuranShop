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
import { connect } from "react-redux";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
} from "../../styles/style";
import { HeaderBack } from "../../components/HeaderBack";
import { SellerBlock } from "../../components/SellerBlock";
import { ProductItem } from "../../components/ProductItem";
// import { Icon } from 'react-native-vector-icons';

const ProductPageScreen = ({ route, navigation }) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  const [sellerSearch, onChangeSellerSearch] = useState('');
  return (
    <View>
      <HeaderBack navigation={navigation} title={route.params.title} shop_ico />
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
          style={[styles.settingsHighlight, cm('l', 8)]}
          underlayColor={'#EFEEF2'}
        >
          <Image
            source={require('../../images/shop/settings.png')}
            style={[styles.settingsImg, cm('t', 10), cm('l', 11)]}
          />
        </TouchableHighlight>
      </View>  

      <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={[cm('t', 30)]}
          >
            <Text>
                Найди все, что нужно
            </Text>
            <ProductItem
                image={require("../../images/shop/productItem.png")}
                name={'Iphone xs max'}
                id={"2"}
                price={7499}
                discount_amount={35}
                full_price={9000}
                rate={3.5}
                reply_amount={125}
            />
            <ProductItem
                image={require("../../images/shop/productItem.png")}
                name={'Iphone xs max'}
                id={"3"}
                price={7499}
                rate={3.5}
                reply_amount={125}
            />
            <ProductItem
                image={require("../../images/shop/productItem.png")}
                name={'Iphone xs max'}
                id={"3"}
                price={7499}
                rate={3.5}
                reply_amount={125}
            />
          </ScrollView>
    </View>
  );
};

export { ProductPageScreen };
