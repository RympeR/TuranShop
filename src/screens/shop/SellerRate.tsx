import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  styles,
  computeMargin,
} from "../../styles/style";
import { HeaderBack } from "../../components/HeaderBack";
import { ShopCommentBlock } from "../../components/ShopCommentBlock";


const SellerRateScreen = ({ route, navigation }) => {
  const cm = computeMargin;
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
  useEffect(() => setRate(get_percentage(item)), []);

  return (
    <SafeAreaView>
      <HeaderBack navigation={navigation} title={"Оценка магазина"} />
      <ScrollView showsVerticalScrollIndicator={false} style={[cm("t", 70)]}>
        <View style={styles.category}>
          <View
            style={[styles.column, styles.rateBlock, cm("l", 25), cm("b", 50)]}
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
        <View style={[styles.column]}>
          <View
            style={[
              {
                borderBottomColor: "black",
                borderBottomWidth: 1,
                opacity: 0.1,
              },
              cm("b", 20),
            ]}
          />
          <View style={cm("b", 20)}>
            {item.comments.map((comment) => (
              <ShopCommentBlock
                id={comment.id}
                comment={comment.comment}
                user={comment.user}
                card={comment.card}
                datetime={comment.datetime}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { SellerRateScreen };
