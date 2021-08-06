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
import { styles, computeMargin, computePadding } from '../styles/style'
import {LinearGradient} from 'expo-linear-gradient';
import { 
    useFonts, 
    Montserrat_500Medium
} from '@expo-google-fonts/montserrat';


type GreenBtnType = {
    text: string,
    ico?: ImageSourcePropType,
    custom_style?: any,
}

const GreenBtn = (props:GreenBtnType) => {
    const cm = computeMargin;
    const cp = computePadding;
    let custom_style = props.custom_style;
    if (!custom_style){
        custom_style = {};
    }

    return (
        <TouchableHighlight onPress={()=>{}} style={[styles.greenBtn, styles.marginCenterHorizontal, styles.center, {backgroundColor: '#F6FBFB'}, custom_style]}>
            <LinearGradient
                start={[0.0, 0.0]}
                end={[1.0, 1.0]}
                style={styles.greenBtn} 
                colors={['#0C7952', '#289A71']} >
                <View style={[styles.row, styles.center]}>
                    <Text style={[styles.btnText,cm('t', 18),]}>{props.text}</Text>
                    {props.ico &&
                        <Image 
                            source={props.ico}
                            style={[styles.greenBtnIco,cm('l', 8),cm('t', 15),]} 
                        />
                    }
                </View>
            </LinearGradient>
            
        </TouchableHighlight>
    );
};
export { GreenBtn };