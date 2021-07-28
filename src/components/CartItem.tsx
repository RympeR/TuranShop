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
const styles = StyleSheet.create({
    cartPreview:{
        width: 53,
        height: 89
    },
    logoBack: {
        borderRadius: 7,
    },
    mt10:{
        marginTop: 10
    },
    ml50:{
        marginLeft: 50
    },
    mb30:{
        marginBottom: 30
    },
    mt5:{
        marginTop: 5
    },
    mt4:{
        marginTop: 4
    },
    mt15:{
        marginTop: 15
    },
    mt30:{
        marginTop: 30
    },
    ml10:{
        marginLeft: 10,
    },
    ml5:{
        marginLeft: 5,
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    cartBlock:{
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        shadowColor: "rgb(206, 206, 206)",
        shadowOffset: { width: 0, height: 80 },
        shadowOpacity: 0.07,
        shadowRadius: 2,
        elevation: 2,
        maxHeight: 159,
        maxWidth: 327,
    },
    rateText:{},
    rateIcon:{
        width: 15,
        height: 15,
    },
    verifyIcon:{},
    messageIco:{
        width: 40,
        height: 40
    },
    fw500:{
        fontWeight: "500",
    },
    smallBoldText:{
        fontStyle: "normal",
        
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 14,
    },
    smallPureText:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 13,
    },
    title:{
        fontStyle: "normal",
        fontWeight: "600",
        fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 18,
    },

})

export { CartItem };