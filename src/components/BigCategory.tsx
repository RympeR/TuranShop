import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import {
    styles,
    computeMargin,
    computePadding,
    computeMarginScreenPercent,
  } from "../styles/style";
type BigCategoryType = {
    text: string,
    ico: ImageSourcePropType
}
const BigCategory = (props:BigCategoryType) => {
    const cm = computeMargin;
    const cp = computePadding;
    const cmp = computeMarginScreenPercent;
    return (
        <TouchableHighlight onPress={()=>{}} style={[cm('b', 20), styles.BigCategoryBlockContainer]}>
            <View style={[styles.row, styles.center]}>
                <Text style={[styles.bigCategoryText, cm('l', 50), cm('r', -30),]}>{props.text}</Text>
                    <Image 
                        source={props.ico}
                        style={[styles.categoryImg, cm('r', 30)]} 
                    />
                    <Image 
                        source={require('../images/shop/RightArrow.png')}
                        style={[styles.rightArrow, cm('r', 70), cm('l', -30)]} 
                    />
            </View>
        </TouchableHighlight>
    );
};
export { BigCategory };