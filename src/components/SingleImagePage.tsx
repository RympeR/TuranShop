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
                style={[styles.pageImg, styles.mtp10, styles.mb50]}
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
const styles = StyleSheet.create({
    mtp10:{
        marginTop: screenHeight * 0.1,
    },
    mb50:{
        marginBottom: 50
    },
    mb30:{
        marginBottom: 30
    },
    container:{
        // maxWidth: 327,
        // maxHeight: 517,
        backgroundColor: '#E5E5E5'
    },
    BigCategoryBlock:{
        backgroundColor: "#0C7952",
        width: 327,
        height: 57,
        borderRadius: 15,
        
    },
    titleBlock:{
        maxHeight:66,
        maxWidth: 327,
    },
    textBlock:{
        maxHeight:40,
        maxWidth: 309,
        
    },
    title:{
        fontStyle: "normal",
        fontWeight: "700",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 27,
        textAlign: 'center'
    },
    fl1:{
        flex: 1
    },
    text:{
        maxWidth: 309,
        textAlign: 'center',
        fontStyle: "normal",
        fontWeight: "400",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 14,
      },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    mb10:{
        marginBottom: 10
    },
    ml8:{
        marginLeft: 8
    },
    mt10:{
        marginTop: 6
    },
    mt50:{
        marginTop: 50
    },
    pageImg:{
        width: 316,
        height: 235,  
    },
    rightArrow:{
        width: 7,
        height: 14
    },
    justifyCenter:{
        justifyContent: 'center',
    },
    justifySpaceEvenly:{
        // justifyContent: 'space-evenly',
        justifyContent: 'flex-start',
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
export { SingleImagePage };