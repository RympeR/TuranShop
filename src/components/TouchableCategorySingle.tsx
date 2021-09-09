import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { computeMargin, styles } from "../styles/style";
type TouchableCategoryType = {
  id: string;
  image: ImageSourcePropType;
  text: string;
  move_location: string;
  navigation: any;
};
const TouchableCategory = (props: TouchableCategoryType) => {
  function move_to(url: string, navigation: any, params: object) {
    navigation.navigate(url, params);
  }
  const cm = computeMargin;
  return (
    <TouchableHighlight
      key={props.id}
      style={[cm('l', 30), cm('b', 10), cm('t', 10), styles.categoryBlock]}
      onPress={() => {
        move_to(props.move_location, props.navigation, { title: props.text });
      }}
    >
      <View style={styles.categoryBlock}>
        <View style={styles.categoryImgBack}>
          <Image style={styles.categoryImage} source={props.image} />
        </View>
        <Text style={styles.categoryTitle}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export { TouchableCategory };
