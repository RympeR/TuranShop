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
            <View>
                <Image
                    source={require('../images/shop/message.png')}
                    style={[styles.messageIco, styles.mt30, styles.ml50]} 
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    logo:{
        width: 79,
        height: 79
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
    sellerBlock:{
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        shadowColor: "rgb(206, 206, 206)",
        shadowOffset: { width: 0, height: 80 },
        shadowOpacity: 0.07,
        shadowRadius: 2,
        elevation: 2,
        minHeight: 103,
        minWidth: 327,
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
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 13,
    },
    title:{
        fontStyle: "normal",
        fontWeight: "600",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 20,
    },

})

export { SellerBlock };