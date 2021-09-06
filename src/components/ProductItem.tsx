import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
} from "../styles/style";
import { LinearGradient } from "expo-linear-gradient";

type ProductItemType = {
  image: string;
  name: string;
  id?: string;
  price: number;
  discount_amount?: number;
  full_price?: number;
  rate: number;
  reply_amount: number;
  navigation: any;
  // main: boolean;
};

const ProductItem = (props: ProductItemType) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  function move_to(url: string, navigation: any, params: object) {
    navigation.navigate(url, params);
  }
  return (
    <TouchableHighlight
      style={[styles.productItemBlock, cm("b", 30)]}
      underlayColor={"#EFEEF2"}
      onPress={() => {
        move_to("product", props.navigation, { id: props.id });
      }}
    >
      <View style={[styles.column]}>
        {props.discount_amount && (
          <LinearGradient
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}
            style={[styles.discountBlock, cm("t", 15), cm("l", 10)]}
            colors={["#0C7952", "#289A71"]}
          >
            <View style={[styles.row, styles.center]}>
              <Text style={[styles.discountText, cm("t", 12)]}>
                -{props.discount_amount}%
              </Text>
            </View>
          </LinearGradient>
        )}
        <Image
          source={{ uri: props.image }}
          style={[
            styles.productImage,
            styles.marginCenterHorizontal,
            cm("t", 25),
          ]}
        />
        <Text style={[styles.smallSBoldText, cm("l", 15), cm("t", 15)]}>
          {props.name}
        </Text>
        <View style={[styles.row, cm("l", 5), cm("t", 6)]}>
          <Text style={[styles.smallText, , cm("t", 4), styles.ml10]}>
            {props.rate}
          </Text>
          <Image
            source={require("../images/shop/star.png")}
            style={[styles.rateIcon, styles.mt5, styles.ml5]}
          />
          <Text
            style={[styles.fullPriceText, styles.fw500, styles.mt4, cm("l", 3)]}
          >
            {props.reply_amount} отзывов
          </Text>
        </View>
        <View style={[styles.row]}>
          <Text style={[styles.title_18, cmp("l", 4), cmp("t", 1)]}>
            {props.price}
          </Text>
          <Image
            source={require("../images/shop/TuranImg.png")}
            style={[styles.icon19x23, cm("t", 12), cm("l", 6)]}
          />
          {props.full_price && (
            <Text
              style={[
                styles.fullPriceText,
                styles.strokeThroughText,
                styles.fw500,
                cm("t", 12),
                cm("l", 12),
              ]}
            >
              {props.full_price}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};
export { ProductItem };
