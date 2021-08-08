import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { styles } from "../styles/style";
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

  return (
    <TouchableHighlight
      key={props.id}
      style={[styles.ml20, styles.categoryBlock]}
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
