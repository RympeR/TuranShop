import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { styles } from '../styles/style'
type TouchableCategoryType = {
    id: string,
    image: ImageSourcePropType,
    text: string,
}
const TouchableCategory = (props:TouchableCategoryType) =>{
    return (
        <TouchableHighlight key={props.id} style={styles.ml20}>
            <View style={styles.categoryBlock}>
            <View style={styles.categoryImgBack}>
                <Image
                style={styles.categoryImage}
                source={props.image}
                />
            </View>
            <Text style={styles.categoryTitle}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    )
}

export { TouchableCategory };