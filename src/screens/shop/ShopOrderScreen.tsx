import React, { useState, useReducer, useEffect, useRef } from "react";
import {
    View,
    Text,
    Image,
    Button,
    TouchableHighlight,
    ScrollView,
    Dimensions,
    StyleSheet,
    TextInput,
    ImageSourcePropType,
    FlatList,
    SafeAreaView,
} from "react-native";
import {
    styles,
    computeMargin,
    computePadding,
    computeMarginScreenPercent,
} from "../../styles/style";
import { HeaderBack } from "../../components/HeaderBack";
import { SellerBlock } from "../../components/SellerBlock";
import { OrderRow } from "../../components/OrderRow";
import { BigOrderRow } from "../../components/BigOrderRow";
import { Modalize } from "react-native-modalize";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";


const screenWidth = Dimensions.get("screen").width;

const ShopOrderScreen = ({ route, navigation }) => {
    const cm = computeMargin;
    const cp = computePadding;
    const cmp = computeMarginScreenPercent;
    const [orderSearch, setOrderSearch] = useState("");
    const [smallOrder, setSmallOrder] = useState(true);
    const [pressed, setPressed] = useState(false);
    
    let orders = [
        {
            pk: 11123123123,
            status: "ожидается отправка",
            ico:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
            new: true,
            seller: 'Продавец Екатерина',
            date: 1630064341,
            summ: 2015,
        },
        {
            pk: 11123123123,
            status: "заказ отправлен",
            ico:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
            new: true,
            seller: 'Продавец Екатерина',
            date: 1630064341,
            summ: 2015,
        },
        {
            pk: 11123123123,
            status: "ожидается",
            ico:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
            new: false,
            seller: 'Продавец Екатерина',
            date: 1630064341,
            summ: 2015,
        },
        {
            pk: 11123123123,
            status: "ожидается",
            ico:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
            new: false,
            seller: 'Продавец Екатерина',
            date: 1630064341,
            summ: 2015,
        },
        {
            pk: 11123123123,
            status: "ожидается",
            ico:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
            new: false,
            seller: 'Продавец Екатерина',
            date: 1630064341,
            summ: 2015,
        },
        {
            pk: 11123123123,
            status: "ожидается",
            ico:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
            new: false,
            seller: 'Продавец Екатерина',
            date: 1630064341,
            summ: 2015,
        },
        {
            pk: 11123123123,
            status: "ожидается",
            ico:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
            new: false,
            seller: 'Продавец Екатерина',
            date: 1630064341,
            summ: 2015,
        },
        {
            pk: 11123123123,
            status: "ожидается",
            ico:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
            new: false,
            seller: 'Продавец Екатерина',
            date: 1630064341,
            summ: 2015,
        },
    ];
    const modalizeRef = useRef<Modalize>(null);
    const onOpen = () => {
        modalizeRef.current?.open();
    };
    const onClose = () => {
        modalizeRef.current?.close();
    };
    const orderStatus: string[] = [
        'Все', 'Новые', 'Ожидается оплата', 'Выполненные', 'Отмененные', 'Оплаченные', 'Ожидается отправка'
    ]
    const handleClick = () => {
        setPressed(!pressed);
    };
    return (
        <SafeAreaView>
            <View style={[styles.row, cm("b", -40), cm("t", 50)]}>
                <TouchableHighlight
                    underlayColor={"#EFEEF2"}
                    style={[cm("l", 20), { width: 30, zIndex: 2 }]}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image source={require("../../images/shop/backImage.png")} />
                </TouchableHighlight>
                <View style={[styles.headerLinkTitleBlock]}>
                    <Text
                        style={[
                            // cm("t", 17),
                            styles.headerTitle,
                            // styles.center,
                            // styles.alignSelfCenter
                        ]}
                    >
                        Заказы
                    </Text>
                </View>
                <TouchableHighlight
                    underlayColor={"#EFEEF2"}
                    style={[
                        styles.topIcon,
                        cmp("l", 72),
                        cm("t", -1),
                        // cm("b", -50),
                        { width: 40 },
                    ]}
                    onPress={() => {
                        setSmallOrder(!smallOrder);
                    }}
                >
                    {smallOrder ?

                        <Image
                            style={[]}
                            source={require("../../images/shop/bigOrders.png")}
                        /> :
                        <Image
                            style={[]}
                            source={require("../../images/shop/smallOrders.png")}
                        />
                    }
                </TouchableHighlight>
            </View>
            <View style={[styles.row, cm("t", 70), cm("l", 10), cm("b", 20)]}>
                <View style={[styles.row]}>
                    <View style={[styles.searchImgBack]}>
                        <Icon name="search" style={[styles.imageStyle, cm('t', 10)]} />
                    </View>
                    <TextInput
                        style={[styles.searchInput]}
                        placeholder="Поиск"
                        onChangeText={setOrderSearch}
                        value={orderSearch}
                        placeholderTextColor="rgba(0, 0, 0, 1);"
                        selectTextOnFocus
                    />
                </View>
                <TouchableHighlight
                    style={[styles.settingsHighlight, cm("l", 8)]}
                    underlayColor={"#EFEEF2"}
                    onPress={onOpen}
                >
                    <Image
                        source={require("../../images/shop/settings.png")}
                        style={[styles.settingsImg, cm("t", 10), cm("l", 11)]}
                    />
                </TouchableHighlight>
            </View>
            <Modalize
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                ref={modalizeRef}
                snapPoint={400}
                modalTopOffset={10}
                modalHeight={400}
            // adjustToContentHeight
            >
                <View style={[styles.row, cmp("t", 3)]}>
                    <Text style={[styles.regular600, cmp("l", 5)]}>Статус заказа</Text>
                    <TouchableHighlight
                        onPress={onClose}
                        underlayColor={"#rgba(12, 121, 82, 1)"}
                        style={[cmp("l", 50), styles.border15, { width: 30 }]}
                    >
                        <Image source={require("../../images/shop/closeModal.png")} />
                    </TouchableHighlight>
                </View>
                <View style={[styles.row, { maxWidth: screenWidth * 0.8 }]}>
                    {orderStatus.map((item: string, index: number) => (
                        <TouchableHighlight
                            key={index}
                            onPress={handleClick}
                            activeOpacity={0}
                            underlayColor={"#EFEEF2"}
                            style={[styles.ml20, styles.filterCategory]}
                        >
                            <>
                                {pressed && (
                                    <LinearGradient
                                        style={styles.gradient}
                                        colors={["#0C7952", "#289A71"]}
                                    >
                                        <Text
                                            style={[
                                                styles.smallText,
                                                styles.mt2,
                                                styles.ml10,
                                                styles.pr8,
                                                { color: "#FFFFFF" },
                                            ]}
                                        >
                                            {item}
                                        </Text>
                                    </LinearGradient>
                                )}
                                {!pressed && (
                                    <Text
                                        style={[
                                            styles.smallText,
                                            styles.mt2,
                                            styles.ml10,
                                            styles.pr8,
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                )}
                            </>
                        </TouchableHighlight>
                    ))}
                </View>
            </Modalize>
            <ScrollView>
                <View style={[styles.column, styles.center, cm('t', 10)]}>
                    {smallOrder ?

                        <FlatList
                            style={[]}
                            data={orders.filter((item) =>
                                orderSearch != ""
                                    ? item.pk.toString().toLowerCase().includes(orderSearch.toLowerCase())
                                    : item.pk
                            )}
                            keyExtractor={(item, index: number) => index.toString()} //has to be unique
                            renderItem={({ item }) => (
                                <OrderRow
                                    pk={item.pk}
                                    status={item.status}
                                    ico={item.ico}
                                    new={item.new}
                                    navigation={navigation}
                                />
                            )}
                            horizontal={false}
                            numColumns={1}
                        /> : 

                        <FlatList
                            style={[]}
                            data={orders.filter((item) =>
                                orderSearch != ""
                                    ? item.pk.toString().toLowerCase().includes(orderSearch.toLowerCase())
                                    : item.pk
                            )}
                            keyExtractor={(item, index: number) => index.toString()} //has to be unique
                            renderItem={({ item }) => (
                                <BigOrderRow
                                    pk={item.pk}
                                    status={item.status}
                                    ico={item.ico}
                                    seller={item.seller}
                                    navigation={navigation}
                                    date={item.date}
                                    summ={item.summ}
                                />
                            )}
                            horizontal={false}
                            numColumns={1}
                        /> 
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export { ShopOrderScreen };