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
import { styles } from '../styles/style'
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

type SingleImagePageType = {
    title: string,
    text: string,
    btntext: string,
    img: ImageSourcePropType
}
const SingleImagePage = (props:SingleImagePageType) => {
    return (
        <View style={[styles.fl1, styles.container, styles.column, styles.center, styles.mt50, styles.justifySpaceEvenly]}>
            <Image
                source={props.img}
                style={[styles.pageImg, styles.mt10p, styles.mb50]}
            />
            <View style={[styles.center, styles.textBlock, styles.mb30]}>
                <Text style={[styles.title, styles.center]}>
                    {props.title}
                </Text>
            </View>
            <View style={[styles.mb30]}>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </View>
            <TouchableHighlight onPress={()=>{}} style={styles.BigCategoryBlock}>
                <View style={[styles.fl1, styles.row, styles.center]}>
                    <Text style={[styles.btnText, styles.center]}>{props.btntext}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export { SingleImagePage };