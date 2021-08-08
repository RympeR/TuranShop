import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import {
    styles,
    computeMargin,
    computePadding,
    computeMarginScreenPercent,
    computePercentMaxHeight,
  } from "../styles/style";


type SingleImagePageType = {
    title: string,
    text: string,
    btntext: string,
    img: ImageSourcePropType,
    move_location: string,
    navigation: any,
}
const SingleImagePage = (props:SingleImagePageType) => {
    const cm = computeMargin;
    const cmp = computeMarginScreenPercent;
    const cpmh = computePercentMaxHeight;
    const cp = computePadding;
    function move_to(url: string, navigation:any, params: object={}){
        console.warn('pressed')
        navigation.navigate(url, params);
    }
    return (
        <View style={[styles.fl1, styles.container, styles.column, styles.center, styles.mt50, styles.justifySpaceEvenly]}>
            <Image
                source={props.img}
                style={[styles.pageImg, styles.mt10p, styles.mb50]}
            />
            <View style={[styles.center, styles.textBlock, cm('b', 50)]}>
                <Text style={[styles.title_27, styles.center]}>
                    {props.title}
                </Text>
            </View>
            <View style={[cm('b', 70)]}>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </View>
            <TouchableHighlight onPress={()=>{move_to(props.move_location, props.navigation)}} style={styles.SingleBtnBlock}>
                <View style={[styles.fl1, styles.row, styles.center]}>
                    <Text style={[styles.font17SBold, styles.center]}>{props.btntext}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export { SingleImagePage };