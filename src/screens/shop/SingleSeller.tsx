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
import { fullCardType } from "../../redux/apiTypes";
import Carousel from "pinar";
import { SellerBlockSmall } from "../../components/SellerBlockSmall";
import { CommentBlock } from "../../components/CommentBlock";
import { CheckedText } from "../../components/checkedText";
import { ProductItem } from "../../components/ProductItem";

const screenWidth = Dimensions.get("screen").width;

const SingleSeller = ({ route, navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;

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
            day: 'fwefw',
            work_time: 'fwefwe'
        },
        {
            id: 1,
            day: 'fwefw',
            work_time: 'fwefwe'
        },
    ],
    comments: [
        {
          id: 2,
          comment: "Для жінок цей телефон в самий раз. Головні його переваги: \
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
          comment: "Для жінок цей телефон в самий раз. Головні його переваги: \
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
    name: 'tewt',
    logo: "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
    description: '3ohrhuho hu23hfh2 h3fh2 fhi2hi3f hi23fih2o3f ho2fhio',
  }
  return (
    <SafeAreaView>
        <HeaderBack navigation={navigation} title={item.name} shop_ico />
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={[cm('t', 15)]}
          >
            <ProductItem
              image={"http://mobile.turancoin.net/media/preview_cards/logo_NlC7Me7.png"}
              name={'Iphone xs max'}
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
              image={"http://mobile.turancoin.net/media/preview_cards/logo_NlC7Me7.png"}
              name={'Iphone xs max'}
              id={"3"}
              price={7499}
              rate={3.5}
              reply_amount={125}
              navigation={navigation}
            // main
            />
            <ProductItem
              image={"http://mobile.turancoin.net/media/preview_cards/logo_NlC7Me7.png"}
              name={'Iphone xs max'}
              id={"3"}
              price={7499}
              rate={3.5}
              reply_amount={125}
              navigation={navigation}
            // main
            />
          </ScrollView>
    </SafeAreaView>
  );
};

export { SingleSeller };
