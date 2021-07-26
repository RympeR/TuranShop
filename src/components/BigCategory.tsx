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
const styles = StyleSheet.create({
    BigCategoryBlock:{
        backgroundColor: "#0C7952",
        width: 327,
        height: 110,
        borderRadius: 15,
    },
    row: {
        flexDirection: "row",
    },
    ml8:{
        marginLeft: 8
    },
    mt10:{
        marginTop: 6
    },
    categoryImg:{
        width: 128,
        height: 110,
        
    },
    rightArrow:{
        width: 7,
        height: 14
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        
        textAlignVertical: 'center',
        fontStyle: "normal",
        fontWeight: "600",
        // fontFamily: 'Montserrat',
        color: "#FFFFFF",
        fontSize: 18,
    },
});
export { BigCategory };