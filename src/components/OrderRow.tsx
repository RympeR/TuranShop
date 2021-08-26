import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import {
  styles,
  computeMargin,
  computeMarginScreenPercent,
} from "../styles/style";

type OrderRowType = {
  pk: number;
  status: string;
  ico: string;
  new: boolean;
  navigation: any;
};

const OrderRow = (props: OrderRowType) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const screenWidth = Dimensions.get("window").width;
  return (
    <TouchableHighlight
      onPress={() => {
        props.navigation.navigate("seller", { id: props.pk });
      }}
      style={[styles.orderBlock, cm("b", 15)]}
    >
      <View style={[styles.row]}>
        <Image
          style={[styles.logo40x40, cm("l", 15), cm("t", 20), cm("r", 15)]}
          source={{ uri: props.ico }}
        />
        <View style={[styles.column]}>
          <Text style={[styles.font17SBoldBlack, cm("t", 15)]}>
            №{props.pk}
          </Text>
          <Text style={[styles.greenText, cm("t", 2)]}>{props.status}</Text>
        </View>
        {props.new && (
          <View
            style={[
              { backgroundColor: "#0C7952" },
              styles.posAbsolute,
              styles.border15,
              styles.logo40x40,
              cm("t", 20),
              cmp("l", 70),
            ]}
          >
            <Text style={[styles.smallWhiteFont, cm("l", 8), cm("t", 12)]}>
              New
            </Text>
          </View>
        )}
        <Image
          style={[styles.posAbsolute, cm("t", 30), cmp("l", 85)]}
          source={require("../images/shop/rightBlackArrow.png")}
        />
      </View>
    </TouchableHighlight>
  );
};

export { OrderRow };
