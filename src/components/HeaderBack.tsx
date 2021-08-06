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

type HeaderBackLinkType = {
    title: string;
    navigation: any;
};

const HeaderBack = (props: HeaderBackLinkType) => {
    const cm = computeMargin;
    const cp = computePadding;
    const cmp = computeMarginScreenPercent;
    
    return (
        <View style={[styles.row]}>

            <TouchableHighlight
                underlayColor={'#EFEEF2'}
                style={[cm('t', 50), cm('b', -50), cm('l', 20), {width:20}]}
                onPress={() =>{props.navigation.goBack();}}
            >
                <Image
                    source={require('../images/shop/backImage.png')}
                />
            </TouchableHighlight>
                <Text
                style={[cm('t', 50), cm('b', -50),styles.alignCenter, 
                    cmp('l', 27), styles.headerTitle]}
                >{ props.title }</Text>
        </View>
    );
}

export {HeaderBack};