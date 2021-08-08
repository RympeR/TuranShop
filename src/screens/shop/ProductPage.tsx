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
  FlatList,
  ImageSourcePropType,
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
type ProductItemType = {
  image: ImageSourcePropType;
  name: string;
  id?: string;
  price: number;
  discount_amount?: number;
  full_price?: number;
  rate: number;
  reply_amount: number;
  main: boolean;
};

const ProductPageScreen = ({ route, navigation }) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  const [sellerSearch, onChangeSellerSearch] = useState("");
  let items: ProductItemType[] = [
    {
      image: require("../../images/shop/productItem.png"),
      name: "Iphone xs max",
      id: "2",
      price: 7499,
      discount_amount: 35,
      full_price: 9000,
      rate: 3.5,
      reply_amount: 125,
      main: false,
    },
    {
      image: require("../../images/shop/productItem.png"),
      name: "Iphone xs max",
      id: "1",
      price: 7499,
      discount_amount: 35,
      full_price: 9000,
      rate: 3.5,
      reply_amount: 125,
      main: false,
    },
    {
      image: require("../../images/shop/productItem.png"),
      name: "Iphone xs max",
      id: "1",
      price: 7499,
      discount_amount: 35,
      full_price: 9000,
      rate: 3.5,
      reply_amount: 125,
      main: false,
    },
    {
      image: require("../../images/shop/productItem.png"),
      name: "Iphone xs max",
      id: "1",
      price: 7499,
      discount_amount: 35,
      full_price: 9000,
      rate: 3.5,
      reply_amount: 125,
      main: false,
    },
    {
      image: require("../../images/shop/productItem.png"),
      name: "Iphone xs max",
      id: "1",
      price: 7499,
      discount_amount: 35,
      full_price: 9000,
      rate: 3.5,
      reply_amount: 125,
      main: false,
    },
  ];
  const _keyExtractor = ({ obj }: { obj: ProductItemType }) => {
    return obj.id;
  };
  const _renderItem = ({ obj }: { obj: ProductItemType }) => {
    <ProductItem
      image={obj.image}
      name={obj.name}
      id={obj.id}
      price={obj.price}
      rate={obj.rate}
      reply_amount={obj.reply_amount}
      main={obj.main}
    />;
  };
  return (
    <View>
      <HeaderBack navigation={navigation} title={route.params.title} shop_ico />
      <View style={[styles.row, cm("t", 70), cm("l", 10), cm("b", 20)]}>
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
      >
        <View style={[styles.viewList]}>
          {/* <Text>Найди все, что нужно</Text> */}
          <FlatList
            data={items}
            keyExtractor={(item, index: number) => index.toString()} //has to be unique
            renderItem={({ item }) => (
              <ProductItem
                image={item.image}
                name={item.name}
                id={item.id}
                price={item.price}
                rate={item.rate}
                reply_amount={item.reply_amount}
                main={item.main}
              />
            )}
            horizontal={false}
            numColumns={2}
          />

          {/* <ProductItem
            image={require("../../images/shop/productItem.png")}
            name={"Iphone xs max"}
            id={"3"}
            price={7499}
            rate={3.5}
            reply_amount={125}
            main={false}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export { ProductPageScreen };
