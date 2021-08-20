import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
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
const screenWidth = Dimensions.get("screen").width;
type HeaderBackLinkType = {
  title: string;
  navigation: any;
  shop_ico?: boolean;
};

const HeaderBack = (props: HeaderBackLinkType) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;

  return (
    <View style={[styles.row, cm("b", -40), cm("t", 50)]}>
      <TouchableHighlight
        underlayColor={"#EFEEF2"}
        style={[cm('l', 20), { width: 30, zIndex: 2 }]}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Image source={require("../images/shop/backImage.png")} />
      </TouchableHighlight>
      <View
        style={[styles.headerLinkTitleBlock]}
      >

        <Text
          style={[
            // cm("t", 17),
            styles.headerTitle,
            // styles.center,
            // styles.alignSelfCenter
          ]}
        >
          {props.title}
        </Text>
      </View>
      {props.shop_ico && (
        <TouchableHighlight
          underlayColor={"#EFEEF2"}
          style={[
            styles.topIcon,
            cmp("l", 72),
            cm("t", -1),
            // cm("b", -50),
            { width: 40 },
          ]}
          onPress={() => {
            props.navigation.navigate("cart");
          }}
        >
          <Image
            style={[]}
            source={require("../images/shop/shopping-cart.png")}
          />
        </TouchableHighlight>
      )}
    </View>
  );
};

export { HeaderBack };
