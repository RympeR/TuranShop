import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


type CartItemType = {
    image: ImageSourcePropType,
    name: string,
    seller: string,
    product_amount: number,
    id?: string,
    cost: number,
}
const CartItem = (props:CartItemType) =>{
    return (
        

        
        <View style={[styles.cartBlock, styles.row, styles.mt30] }>
            <View style={[styles.logoBack, styles.mt10, styles.ml10]}>
                <Image 
                    source={props.image}
                    style={[styles.cartPreview, styles.mt30]}
                    />
            </View>
            <View>
                <View style={styles.row}>
                    <Text style={[styles.title, styles.mt10, styles.ml10]}>
                        {props.name}
                    </Text>
                </View>
                <View style={styles.row}>

                    <Image
                        source={require('../images/shop/star.png')}
                        style={[styles.rateIcon, styles.mt5, styles.ml5]} 
                    />
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

export { CartItem };