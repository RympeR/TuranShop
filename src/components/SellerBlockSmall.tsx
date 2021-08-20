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
  product_amount: number;
  id?: string;
  verified?: boolean;
};
const SellerBlockSmall = (props: SellerBlockType) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  return (
    <View style={[styles.sellerBlockSmall, styles.row, styles.mb20]}>
      <View style={[styles.logoBack, styles.mt10]}>
        <Image source={props.image} style={styles.logo40x40} />
      </View>
      <View>
        <View style={styles.row}>
          <Text style={[cm('t', 6), styles.title_16, styles.ml10]}>
            {props.name}
          </Text>
          {props.verified && (
            <Image
              source={require("../images/shop/black_check.png")}
              style={[styles.verifyIcon, cm('t', 10), styles.ml10]}
            />
          )}
        </View>
        <View style={styles.row}>
          <Text style={[styles.smallText,  styles.ml10]}>
            {props.rating}
          </Text>
          <Image
            source={require("../images/shop/star.png")}
            style={[styles.rateIcon, cm('t', 1), styles.ml5]}
          />
          <Text
            style={[
              styles.normal13Text,
              styles.fw500,
              
              styles.ml10,
              {opacity: 0.6}
            ]}
          >
            {props.product_amount} товаров
          </Text>
        </View>
      </View>
      <TouchableHighlight
        // underlayColor={"#F7F7F7"}
        onPress={() => {
          console.log("pressed");
        }}
        style={[ styles.posAbsolute, cm('t', 10), cmp('l', 60), styles.border15]}
      >
        <Image
          source={require("../images/shop/message.png")}
          style={[styles.messageIco,]}
        />
      </TouchableHighlight>
    </View>
  );
};

export { SellerBlockSmall };
