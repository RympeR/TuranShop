import React from "react";
import { View, Text, Image } from "react-native";
import { styles, computeMargin } from "../styles/style";

type checkedTextType = {
  text: string;
};

const CheckedText = (props: checkedTextType) => {
  const cm = computeMargin;
  return (
    <View style={[styles.row, cm("b", 4)]}>
      <Image
        style={[styles.categoryImage, cm("r", 10)]}
        source={require("../images/shop/check-circle.png")}
      />
      <Text style={[styles.smallBoldText, cm("t", 2)]}>{props.text}</Text>
    </View>
  );
};

export { CheckedText };
