import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";


type SellerBlockType = {
    image: ImageSourcePropType,
    name: string,
    rating: number,
    rate: string,
    product_amount: number,
    id?: string,
    verified?: boolean,
}
const SellerBlock = (props:SellerBlockType) =>{
    return (
        <View style={[styles.sellerBlock, styles.row, styles.mb30] }>
            <View style={[styles.logoBack, styles.mt10, styles.ml10]}>
                <Image 
                    source={props.image}
                    style={styles.logo}
                    />
            </View>
            <View>
                <View style={styles.row}>
                    <Text style={[styles.title, styles.mt10, styles.ml10]}>
                        {props.name}
                    </Text>
                    {props.verified && <Image
                        source={require('../images/shop/verified.png')}
                        style={[styles.verifyIcon, styles.mt15, styles.ml10]} 
                    />}
                </View>
                <View style={styles.row}>
                    <Text style={[styles.smallBoldText, styles.mt5, styles.ml10]}>
                        {props.rating}
                    </Text>
                    <Image
                        source={require('../images/shop/star.png')}
                        style={[styles.rateIcon, styles.mt5, styles.ml5]} 
                    />
                    <Text style={[styles.smallBoldText, styles.fw500, styles.mt4, styles.ml10]}>
                        {props.rate}
                    </Text>
                </View>
                <View style={styles.row}>
                <Text style={[styles.smallPureText, styles.fw500, styles.mt4, styles.ml10]}>
                        {props.product_amount} товаров
                    </Text>
                </View>
            </View>
            <TouchableHighlight underlayColor={'#F7F7F7'} onPress={()=>{console.log('pressed')}}>
                <Image
                    source={require('../images/shop/message.png')}
                    style={[styles.messageIco, styles.mt30, styles.ml50]} 
                />
            </TouchableHighlight>
        </View>
    )
}

export { SellerBlock };