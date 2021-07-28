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
export { GreenBtn };