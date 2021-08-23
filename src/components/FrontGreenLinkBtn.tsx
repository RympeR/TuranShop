import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  ImageSourcePropType,
} from "react-native";
import {
  styles,
  computeMargin,
  computeMarginScreenPercent,
} from "../styles/style";

type FrontGreenLinkBtnType = {
  ico: ImageSourcePropType;
  title: string;
  text: string;
  navigation: any;
  location: string;
};

const FrontGreenLinkBtn = (props: FrontGreenLinkBtnType) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const screenWidth = Dimensions.get("window").width;
  return (
    <View>
        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate(props.location);
          }}
          underlayColor={'rgba(0, 0, 0, 0.0283)'}
          style={[styles.greenPopBtn, cmp('l', 5), cmp('t', 80)]}
        >
             <LinearGradient
                start={[0.0, 0.0]}
                end={[1.0, 1.0]}
                style={styles.greenPopBtn} 
                colors={['rgba(12, 121, 82, 1)', 'rgba(40, 154, 113, 1)']} >
                <View style={[styles.row]}>
                    <Image 
                        source={props.ico}
                        style={[cm('l', 10),cm('r', 10),cm('t', 20),]} 
                    />
                    <View
                        style={[styles.column]}
                    >
                        <Text style={[styles.s_bold600,cm('t', 14),{color: '#FFFFFF'}]}>{props.title}</Text>
                        <Text style={[styles.smallPureText,cm('t', 5),{color: 'rgba(255, 255, 255, 0.7)'}]}>{props.text}</Text>
                    </View>
                    <Image
                        style={[styles.posAbsolute, cmp('l', 80),cm('t', 27),]} 
                        source={require('../images/shop/RightArrow.png')}
                    />
                </View>
            </LinearGradient>
       </TouchableHighlight>
    </View>
  );
};

export { FrontGreenLinkBtn };
