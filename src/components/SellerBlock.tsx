import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
} from "../styles/style";

type SellerBlockType = {
  image: ImageSourcePropType;
  name: string;
  rating: number;
  rate: string;
  product_amount: number;
  id?: string;
  verified?: boolean;
  navigation: any;
};

const SellerBlock = (props: SellerBlockType) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;

  function move_to(url: string, navigation: any, params: object) {
    navigation.navigate(url, params);
  }

  return (
    <View style={[styles.sellerBlock, styles.row, styles.mb20]}>
      <View style={[styles.logoBack, styles.mt10, styles.ml10]}>
        <Image source={props.image} style={styles.logo} />
      </View>
      <View>
        <View style={styles.row}>
          <Text style={[styles.mt10, styles.title_16, styles.ml10]}>
            {props.name}
          </Text>
          {props.verified && (
            <Image
              source={require("../images/shop/verified.png")}
              style={[styles.verifyIcon, cm('t', 12), styles.ml10]}
            />
          )}
        </View>
        <View style={styles.row}>
          <Text style={[styles.smallText, styles.mt5, styles.ml10]}>
            {props.rating}
          </Text>
          <Image
            source={require("../images/shop/star.png")}
            style={[styles.rateIcon, styles.mt5, styles.ml5]}
          />
          <Text
            style={[
              styles.mediumText,
              styles.fw500,
              styles.mt4,
              styles.ml10,
            ]}
          >
            {props.rate}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              styles.normal13Text,
              styles.fw500,
              styles.mt4,
              styles.ml10,
            ]}
          >
            {props.product_amount} товаров
          </Text>
        </View>
      </View>
      <TouchableHighlight
        // underlayColor={"#F7F7F7"}
        onPress={() => {
          move_to('seller', props.navigation, { title: props.id });
        }}
        style={[styles.posAbsolute, styles.mt30, cmp('l', 75), styles.border15]}
      >
        <Image
          source={require("../images/shop/message.png")}
          style={[styles.messageIco,]}
        />
      </TouchableHighlight>
    </View>
  );
};

export { SellerBlock };
