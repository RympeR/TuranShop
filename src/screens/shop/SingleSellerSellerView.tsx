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
import { connect, useDispatch, useSelector } from "react-redux";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
  computePercentMaxHeight,
} from "../../styles/style";
import { HeaderBack } from "../../components/HeaderBack";
import { ProductItem } from "../../components/ProductItem";
import { TouchableCategory } from "../../components/TouchableCategory";
import { OrderRow } from "../../components/OrderRow";

const screenWidth = Dimensions.get("screen").width;

const SingleSellerSellerView = ({ route, navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;
  const [rate, setRate] = useState({});
  let item = {
    id: 1,
    owner: {
      pk: 2,
      username: "test",
      image:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      verified: true,
      fio: "test test",
    },
    schedule: [
      {
        id: 1,
        day: "Понедельник - пятница",
        work_time: "10 - 22:00",
      },
      {
        id: 1,
        day: "Суббота - воскресенье",
        work_time: "10-19:00",
      },
    ],
    rate: [
      {
        id: 1,
        rate: 3,
        user: 1,
        shop: 1,
      },
      {
        id: 1,
        rate: 2,
        user: 1,
        shop: 1,
      },
      {
        id: 1,
        rate: 3,
        user: 1,
        shop: 1,
      },
      {
        id: 1,
        rate: 4,
        user: 1,
        shop: 1,
      },
      {
        id: 1,
        rate: 5,
        user: 1,
        shop: 1,
      },
      {
        id: 1,
        rate: 5,
        user: 1,
        shop: 1,
      },
      {
        id: 1,
        rate: 1,
        user: 1,
        shop: 1,
      },
      {
        id: 1,
        rate: 5,
        user: 1,
        shop: 1,
      },
    ],
    comments: [
      {
        id: 2,
        comment:
          "Для жінок цей телефон в самий раз. Головні його переваги: \
          'няшний' вигляд і вологостійкість. Це особливо актуально з наближенням пляжного сезону.",
        user: {
          pk: 2,
          username: "test",
          image:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
          verified: true,
          fio: "test test",
        },
        card: 1,
        datetime: 1629115607,
      },
      {
        id: 2,
        comment:
          "Для жінок цей телефон в самий раз. Головні його переваги: \
          'няшний' вигляд і вологостійкість. Це особливо актуально з наближенням пляжного сезону.",
        user: {
          pk: 2,
          username: "test",
          image:
            "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
          verified: true,
          fio: "test test",
        },
        card: 1,
        datetime: 1629115607,
      },
    ],
    average_rate: {
      rate__avg: 4,
    },
    // last_sold_products: fullCardType[],
    comments_amount: 234,
    name: "tewt",
    logo:
      "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
    description: "3ohrhuho hu23hfh2 h3fh2 fhi2hi3f hi23fih2o3f ho2fhio",
  };
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
  function rate_to_text(item: any) {
    let avg_rate = item.average_rate.rate__avg;
    if (avg_rate) {
      if (avg_rate > 4) return "Прекрасно!";
      if (avg_rate > 3) return "Хорошо!";
      if (avg_rate > 2) return "Так себе!";
    }
    return 0;
  }
  function get_percentage(item: any) {
    let result = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
    };
    for (let rate of item.rate) {
      let int_rate = Math.ceil(rate.rate);
      if (result[int_rate.toString()]) result[int_rate.toString()] += 1;
      else result[int_rate.toString()] = 1;
    }
    return result;
  }
  function rate_compare(a: any, b: any) {
    if (a.rate > b.rate) return 1;
    if (a.rate < b.rate) return -1;
    if (a.rate == b.rate) return 0;
  }
  useEffect(() => setRate(get_percentage(item)), []);
    return (
      <SafeAreaView>
        <HeaderBack navigation={navigation} title={"Ваш магазин"} shop_ico />
        <ScrollView showsVerticalScrollIndicator={false} style={[cm("t", 70)]}>
          <View style={[styles.column]}>
            <View style={[styles.row, cm("b", 20), cm("l", 20)]}>
              <Image
                source={{ uri: item.owner.image }}
                style={[styles.cirle_logo95x95, cm("r", 10)]}
              />
              <View style={[styles.column, cm("l", 10)]}>
                <View style={[styles.row]}>
                  <Text style={[cm("t", 10), styles.title_16]}>
                    {item.owner.fio}
                  </Text>
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
          <View style={styles.category}>
            <View style={[styles.column, cm("t", 10)]}>
              <View style={[styles.row, cm("l", 25)]}>
                <Text style={[styles.title_16]}>О магазине</Text>
              </View>
              <View
                style={[
                  styles.row,
                  { maxWidth: screenWidth * 0.85 },
                  cm("t", 10),
                  cm("b", 5),
                  cm("l", 25),
                ]}
              >
                <Text style={[styles.smallBoldText]}>{item.description}</Text>
              </View>
            </View>
            <View style={[styles.column, cm("t", 20), cm("b", 20)]}>
              <View style={[styles.row, cm("l", 25)]}>
                <Image source={require("../../images/shop/clock.png")} />
                <Text style={[styles.title_16, cm("l", 10)]}>
                  График работы
                </Text>
              </View>
              {item.schedule.map((row, ind) => (
                <View style={[styles.row, cm("t", 6), cm("b", 3), cm("l", 25)]}>
                  <Text style={[styles.smallBoldText]}>{row.day}</Text>
                  <Text style={[styles.greenText, cm("l", 15)]}>
                    {row.work_time}
                  </Text>
                </View>
              ))}
            </View>
            <View style={[styles.categoryPreBlock]}>
              <Text style={[styles.blackSubtitle, cm("l", 30), {}]}>
                Категории
              </Text>
              <TouchableHighlight
                underlayColor={"#EFEEF2"}
                onPress={() => {
                  navigation.navigate("categories");
                }}
              >
                <Text style={[styles.greenText, cm("r", 30), cm("t", 5), {}]}>
                  Больше
                </Text>
              </TouchableHighlight>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={[cm("t", 10)]}
            >
              <TouchableCategory
                id={"1"}
                image={require("../../images/shop/search.png")}
                text="женская одежда"
                move_location={"products"}
                navigation={navigation}
              />
              <TouchableCategory
                id={"2"}
                image={require("../../images/shop/search.png")}
                text="женская тестовая"
                move_location={"products"}
                navigation={navigation}
              />
              <TouchableCategory
                id={"1"}
                image={require("../../images/shop/search.png")}
                text="женская teцц"
                move_location={"products"}
                navigation={navigation}
              />
              <TouchableCategory
                id={"2"}
                image={require("../../images/shop/search.png")}
                text="женская eцвe"
                move_location={"products"}
                navigation={navigation}
              />
            </ScrollView>
            <View style={styles.category}>
              <View style={[styles.categoryPreBlock, cm("b", 20), cm("l", 15)]}>
                <Text style={[styles.blackSubtitle, cm("l", 10), {}]}>
                  Заказы
                </Text>
                <TouchableHighlight
                  underlayColor={"#EFEEF2"}
                  onPress={() => {
                    navigation.navigate("orders");
                  }}
                >
                  <Text style={[styles.greenText, cm("r", 15), cm("t", 5), {}]}>
                    Все
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={[styles.column, styles.center]}>
                {orders.map((order, ind) => (
                  <OrderRow
                    key={ind}
                    pk={order.pk}
                    status={order.status}
                    ico={order.ico}
                    new={order.new}
                    navigation={navigation}
                  />
                ))}
              </View>
            </View>
            <View style={styles.category}>
              <View style={[styles.categoryPreBlock, cm("b", 20), cm("l", 15)]}>
                <Text style={[styles.blackSubtitle, cm("l", 10), {}]}>
                  Топ товары
                </Text>
                <TouchableHighlight
                  underlayColor={"#EFEEF2"}
                  onPress={() => {
                    navigation.navigate("base-products");
                  }}
                >
                  <Text style={[styles.greenText, cm("r", 15), cm("t", 5), {}]}>
                    Больше
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={[cm("t", 15)]}
            >
              <ProductItem
                image={
                  "http://mobile.turancoin.net/media/preview_cards/logo_NlC7Me7.png"
                }
                name={"Iphone xs max"}
                id={"2"}
                price={7499}
                discount_amount={35}
                full_price={9000}
                rate={3.5}
                reply_amount={125}
                navigation={navigation}
                // main
              />
              <ProductItem
                image={
                  "http://mobile.turancoin.net/media/preview_cards/logo_NlC7Me7.png"
                }
                name={"Iphone xs max"}
                id={"3"}
                price={7499}
                rate={3.5}
                reply_amount={125}
                navigation={navigation}
                // main
              />
              <ProductItem
                image={
                  "http://mobile.turancoin.net/media/preview_cards/logo_NlC7Me7.png"
                }
                name={"Iphone xs max"}
                id={"3"}
                price={7499}
                rate={3.5}
                reply_amount={125}
                navigation={navigation}
                // main
              />
            </ScrollView>

            <View
              style={[
                styles.column,
                styles.rateBlock,
                cm("l", 25),
                cm("b", 50),
              ]}
            >
              <View style={[styles.row]}>
                <Text style={[styles.title_36]}>
                  {item.average_rate.rate__avg}
                </Text>
                <Image
                  source={require("../../images/shop/yellow_star.png")}
                  style={[styles.ico15x15, cm("t", 20)]}
                />
                <Text style={[styles.smallBoldText, cm("t", 15), cm("l", 10)]}>
                  {rate_to_text(item)}
                </Text>
              </View>
              <Text style={[styles.smallBoldText]}>1524 отзывов</Text>
              <View style={[styles.column]}>
                {Object.keys(rate).map((simple_rate, ind) => (
                  <View style={[styles.row, cm("t", 5)]}>
                    <Text style={[styles.mediumText]}>
                      {Object.keys(rate).length - ind}
                    </Text>
                    <View style={[cm("l", 5), cm("r", 15), styles.whiteBar]}>
                      <View
                        style={[
                          styles.bar,
                          {
                            width:
                              253 *
                              (rate[Object.keys(rate).length - ind] /
                                Object.keys(item.rate).length),
                            zIndex: 2,
                          },
                        ]}
                      ></View>
                    </View>
                    <Text style={[styles.mediumText]}>
                      {Math.floor(
                        (rate[Object.keys(rate).length - ind] /
                          Object.keys(item.rate).length) *
                          100
                      ).toString()}{" "}
                      %
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export { SingleSellerSellerView };
