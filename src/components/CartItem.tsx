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

type CartItemType = {
  image: ImageSourcePropType;
  name: string;
  seller: string;
  product_amount: number;
  id?: string;
  cost: number;
};
const CartItem = (props: CartItemType) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  let product_amount = props.product_amount;
  function increase() {
    product_amount++;
  }
  function decrease() {
    if (product_amount > 0) product_amount--;
  }
  let total_cost = props.cost * props.product_amount;
  return (
    <View style={[styles.cartBlock, cm("b", 20), styles.column, cm("l", 15)]}>
      <View style={[styles.row, cm("t", 10)]}>
        <View
          style={[styles.logoBack, styles.block114, cm("t", 10), cm("l", 10)]}
        >
          <Image
            source={props.image}
            style={[ cm("l", 10)]}
          />
        </View>
        <View>
          <View style={styles.row}>
            {/* <Text style={[styles.title_18, styles.mt10, styles.ml10, { fontFamily: 'Montserrat_600SemiBold',}]}> */}
            <Text style={[styles.title_18, cm("t", 10), cm("l", 10)]}>
              {props.name}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.smallPureText,
                styles.fw500,
                cm("t", 4),
                cm("l", 10),
              ]}
            >
              Продавец {props.seller}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.row]}>
        <View
          style={[styles.amountBlock, styles.row, cm("l", 20), cm("b", 20)]}
        >
          <TouchableHighlight
            onPress={() => decrease()}
            style={[cm("r", 10), cm("t", 5)]}
          >
            <Image
              source={require("../images/shop/minus.png")}
              style={[styles.icon016, cm("t", 10)]}
            />
          </TouchableHighlight>
          <Text style={[cm("r", 10), styles.amountText]}>{product_amount}</Text>
          <TouchableHighlight
            onPress={() => increase()}
            style={[cm("r", 10), cm("t", 6)]}
          >
            <Image
              source={require("../images/shop/plus.png")}
              style={[styles.icon16, cm("t", 3)]}
            />
          </TouchableHighlight>
        </View>
        <View style={[styles.row, styles.totalCostBlock]}>
          <Text style={[styles.amountText, cmp('l', 30)]}>{total_cost}</Text>
          <Image
            source={require("../images/shop/TuranImg.png")}
            style={[styles.icon19x23, cm("t", 6), cm("l", 6)]}
          />
        </View>
      </View>
    </View>
  );
};

export { CartItem };
