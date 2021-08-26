import React, { useState, useReducer, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  TextInput,
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
  computePercentMaxHeight,
} from "../../styles/style";
import { HeaderBack } from "../../components/HeaderBack";
import { OrderRow } from "../../components/OrderRow";

const screenWidth = Dimensions.get("screen").width;

const OrdersView = ({ route, navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;
  const [rate, setRate] = useState({});
  let orders = [
    {
      pk: 11123123123,
      status: "ожидается отправка",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: true,
    },
    {
      pk: 11123123123,
      status: "заказ отправлен",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: true,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
    },
  ];

    return (
      <SafeAreaView>
        <HeaderBack navigation={navigation} title={"Заказы"} shop_ico />
        <ScrollView showsVerticalScrollIndicator={false} style={[cm("t", 70)]}>
          <View style={[styles.column]}>
            <View style={[styles.row, cm("b", 20), cm("l", 20)]}>
              {/* <Image
              source={{ uri: item.owner.image }}
              style={[styles.cirle_logo95x95, cm("r", 10)]}
            /> */}
              <View style={[styles.column, cm("l", 10)]}>
                <View style={[styles.row]}>
                  <Text style={[cm("t", 10), styles.title_16]}></Text>
                  <Image
                    source={require("../../images/shop/verified.png")}
                    style={[styles.verifyIcon, cm("t", 12), styles.ml10]}
                  />
                </View>
                <Text style={[cm("t", 10), styles.smallBoldText]}>
                  54 624 товаров
                </Text>
              </View>

              <ImageBackground
                source={require("../../images/shop/year_back.png")}
                style={[styles.cirle_logo53x53, cm("t", 12), cm("l", 30)]}
              >
                <View style={[styles.column, styles.center]}>
                  <Text style={[styles.white30font, cm("b", -5)]}>2</Text>
                  <Text style={[styles.white12font]}>года</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  
};

export { OrdersView };
