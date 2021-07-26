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
        <TouchableHighlight onPress={()=>{}} style={styles.greenBtn}>
            <View style={[styles.row, styles.center]}>
            <Text style={[styles.btnText, styles.mt10]}>{props.text}</Text>
                {props.ico &&
                    <Image 
                    source={props.ico}
                    style={[styles.messageIco, styles.ml8, styles.mt10]} 
                    />
                }
            </View>
        </TouchableHighlight>
    );
};
const styles = StyleSheet.create({
    greenBtn:{
        backgroundColor: "#0C7952",
        width: 327,
        height: 56,
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
    messageIco:{
        width: 40,
        height: 40,
        
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
        fontSize: 14,
    },
});
export { GreenBtn };