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

type rowLinkTextType = {
  text: string;
  navigation: any;
  location: string;
};

const RowLink = (props: rowLinkTextType) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const screenWidth = Dimensions.get("window").width;
  return (
    <View>
      <View style={[styles.row, cm("b", 15)]}>
        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate(location);
          }}
        >
          <Text style={[styles.font17SBoldBlack, cm("t", -5)]}>
            {props.text}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
        style={[cmp("l", 80), styles.posAbsolute]}
          onPress={() => {
            props.navigation.navigate(location);
          }}
        >
          <Image
            
            source={require("../images/shop/rightBlackArrow.png")}
          />
        </TouchableHighlight>
      </View>
      <View
        style={[
          {
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: screenWidth * 0.85,
            opacity: 0.1,
          },
          cm("b", 20),
        ]}
      />
    </View>
  );
};

export { RowLink };
