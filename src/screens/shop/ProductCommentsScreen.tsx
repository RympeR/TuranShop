import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  Dimensions,
} from "react-native";
import {
  styles,
  computeMarginScreenPercent,
  computeMargin,
  computePercentMaxHeight,
} from "../../styles/style";
import { HeaderBack } from "../../components/HeaderBack";
import { ShopCommentBlock } from "../../components/ShopCommentBlock";

const ProductCommentsScreen = ({ route, navigation }) => {
  const cm = computeMargin;
  const [rate, setRate] = useState({});
  const screenWidth = Dimensions.get("screen").width;
  const [comment, setComment] = useState("");
  const cmp = computeMarginScreenPercent;
  const cmph = computePercentMaxHeight;
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
  return (
    <SafeAreaView style={[{ backgroundColor: "EEEDF1" }]}>
      <HeaderBack navigation={navigation} title={"Отзывы"} shop_ico />
      <View
        style={[
          styles.row,
          styles.smallProductBLock,
          cm("t", 70),
          cm("b", 30),
          { flex: 1 },
        ]}
      >
        <Image
          source={{ uri: item.owner.image }}
          style={[styles.logo58x58, cmp("l", 10)]}
        />
        <View style={[styles.column, cm("l", 15), cm("t", 5)]}>
          <Text style={[styles.title_18]}>Xiamomi Mi 9 SE</Text>
          <Text style={[styles.smallSBoldText, { color: "#22846F" }]}>
            150$
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={[cm("t", 70), cmph(57)]}>
        <View style={[styles.column]}>
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
      <View
        style={[
          styles.row,
          styles.center,
          cm("b", 30),
          styles.commentInputBlock,
        ]}
      >
        <View style={[styles.borderInputStyle, cm("b", 20)]}>
          <TextInput
            style={[
              styles.nameInput,
              { textAlign: "center", width: screenWidth * 0.8, height: 50 },
            ]}
            placeholder="Ваш комментарий"
            onChangeText={setComment}
            value={comment}
            placeholderTextColor="rgba(0, 0, 0, 1);"
            selectTextOnFocus
            multiline={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export { ProductCommentsScreen };
