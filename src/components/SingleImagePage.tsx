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
  title: string;
  text: string;
  btntext: string;
  img: ImageSourcePropType;
  move_location: string;
  navigation: any;
  width?: number;
  height?: number;
  params?: object;
};
const SingleImagePage = (props: SingleImagePageType) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;
  function move_to(url: string, navigation: any, params: object = {}) {
    navigation.navigate(url, params);
  }
  return (
    <View
      style={[
        styles.fl1,
        styles.container,
        styles.column,
        styles.center,
        styles.posAbsolute,
        cmp("l", 5),
      ]}
    >
      <Image
        source={props.img}
        style={[
          styles.pageImg,
          styles.mt10p,
          styles.mb50,
          props?.width ? { width: props.width } : null,
          props?.height ? { height: props.height } : null,
        ]}
      />
      <View style={[styles.center, styles.textBlock, cm("b", 20)]}>
        <Text style={[styles.title_27, styles.center]}>{props.title}</Text>
      </View>
      <View style={[cm("b", 30)]}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableHighlight
        onPress={() => {
          move_to(
            props.move_location,
            props.navigation,
            props?.params ? props.params : {}
          );
        }}
        style={styles.SingleBtnBlock}
      >
        <View style={[styles.fl1, styles.row, styles.center]}>
          <Text style={[styles.font17SBold, styles.center]}>
            {props.btntext}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export { SingleImagePage };
