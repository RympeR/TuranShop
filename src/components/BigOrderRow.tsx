import React from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableHighlight,
} from "react-native";
import {
    styles,
    computeMargin,
    computeMarginScreenPercent,
} from "../styles/style";

type OrderRowType = {
    pk: number;
    status: string;
    seller: string;
    ico: string;
    navigation: any;
    date: number;
    summ: number;
};

const BigOrderRow = (props: OrderRowType) => {
    const cm = computeMargin;
    const cmp = computeMarginScreenPercent;
    const screenWidth = Dimensions.get("window").width;
    function timeConverter(UNIX_timestamp: number) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        var time = date + ' ' + month + ' ' + year;
        return time;
    }

    return (
        <TouchableHighlight
            onPress={() => {
                props.navigation.navigate("seller", { id: props.pk });
            }}
            underlayColor={"#EFEEF2"}
            style={[styles.bigOrderBlock, cm("b", 15)]}
        >
            <View style={[styles.row]}>
                <View style={[styles.column]}>
                    <Image
                        style={[styles.orderImage, cm("l", 15), cm("t", 20), cm("r", 30)]}
                        source={{ uri: props.ico }}
                    />
                    <Text style={[styles.font12Normal, cm('l', 15), cm('t', 10), { opacity: 0.6 }]}>
                        {timeConverter(props.date)}
                    </Text>
                </View>
                <View style={[styles.column]}>
                    <Text style={[styles.font17SBoldBlack, cm("t", 15)]}>
                        №{props.pk}
                    </Text>
                    <Text style={[styles.smallBoldText, { opacity: 0.6 }, cm("t", 5)]}>
                        {props.seller}
                    </Text>
                    <Text style={[styles.greenText, cm("t", 20)]}>{props.status}</Text>
                    <View style={[styles.row, cm("t", 15)]}>
                        <Text style={[styles.amountText]}>
                            {props.summ}
                        </Text>
                        <Image
                            style={[cm('l', 10), cm("t", 7)]}
                            source={require('../images/shop/TuranImg.png')}
                        />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export { BigOrderRow };
