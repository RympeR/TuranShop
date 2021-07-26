import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

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
const styles = StyleSheet.create({
    ml20:{
        marginLeft: 20,
    },
    categoryBlock: {
        flexDirection: "row",
        backgroundColor: "#F7F7F7",
        shadowColor: "rgba(0, 0, 0, 0.07)",
        shadowOffset: { width: 0, height: 100 },
        shadowOpacity: 0.07,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 7,
        width: 122,
        height: 52,
      },
      categoryTitle: {
        marginTop: 9,
        // fontFamily: Montserrat;
        maxWidth: 80,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
      },

      categoryImgBack: {
        marginTop: 7,
        backgroundColor: '#EEEDF1',
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 10,
        width: 40,
        height:40,
      },
      categoryImage: {
        marginTop: 6,
        marginLeft: 6,
      },
})

export { TouchableCategory };