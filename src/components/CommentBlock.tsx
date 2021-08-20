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
import { styles, computeMargin, computePadding, computeMarginScreenPercent } from '../styles/style'
import { LinearGradient } from 'expo-linear-gradient';


type CommentBlockType = {
    id: number,
    comment: string,
    user: {
        pk: number,
        username: string,
        image: string,
        verified: boolean,
        fio: string,
    },
    card: number,
    datetime: number,
}

const CommentBlock = (props: CommentBlockType) => {
    const cm = computeMargin;
    const cp = computePadding;
    const cmp = computeMarginScreenPercent;

    function timeConverter(UNIX_timestamp:number) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
    console.log(timeConverter(0));
    return (
        <View style={[styles.column]}>
            <View style={[styles.row]}>
                <Image
                    source={{ uri: props.user.image }}
                    style={[styles.logo40x40, cm('l', 10)]}
                />
                <View style={[styles.column, cm('l', 10)]}>
                    <Text style={[styles.smallBoldText]}>{props.user.username}</Text>
                    <Text style={[styles.smallBoldText, {opacity:0.6}]}>{timeConverter(props.datetime)}</Text>
                </View>
                <View style={[styles.row]}>
                    <Text style={[styles.smallBoldText, cmp('l', 25)]}>
                        {props.user.pk}
                    </Text>
                    <Image
                      source={require("../images/shop/yellow_star.png")}
                      style={[styles.ico15x15, cm('l', 3), cm('t', 2)]}
                    />
                </View>
            </View>
            <Text style={[styles.smallBoldText, cm('t', 10), cm('b', 15)]}>
                {props.comment}
            </Text>
        </View>
    );
};
export { CommentBlock };