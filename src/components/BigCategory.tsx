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

type BigCategoryType = {
    text: string,
    ico: ImageSourcePropType
}
const BigCategory = (props:BigCategoryType) => {
    return (
        <TouchableHighlight onPress={()=>{}} style={styles.BigCategoryBlock}>
            <View style={[styles.row, styles.center]}>
                <Text style={[styles.btnText]}>{props.text}</Text>
                    <Image 
                        source={props.ico}
                        style={[styles.categoryImg, styles.ml8]} 
                    />
                    <Image 
                        source={require('../images/shop/RightArrow.png')}
                        style={[styles.rightArrow, styles.ml8]} 
                    />
            </View>
        </TouchableHighlight>
    );
};
export { BigCategory };