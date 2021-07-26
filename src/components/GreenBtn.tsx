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

type GreenBtnType = {
    text: string,
    ico?: ImageSourcePropType
}

const GreenBtn = (props:GreenBtnType) => {
    return (
        <>
        {props.ico &&
        <TouchableHighlight onPress={()=>{}} style={styles.greenBtn}>
            <Text style={styles.btnText}>{props.text}</Text>
        </TouchableHighlight>
        }
        {!props.ico &&
        <TouchableHighlight onPress={()=>{}} style={styles.greenBtn}>
            <Text style={styles.btnText}>{props.text}</Text>
        </TouchableHighlight>
        }
        </>
    );
};
const styles = StyleSheet.create({
    greenBtn:{
        backgroundColor: "#0C7952",
        width: 327,
        height: 56,
        borderRadius: 15,
    },
    btnText: {

    },
});
export { GreenBtn };