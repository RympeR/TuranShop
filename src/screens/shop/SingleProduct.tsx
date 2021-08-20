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

const screenWidth = Dimensions.get("screen").width;

const SingleProductPageScreen = ({ route, navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;

  function rate_to_text() {
    let avg_rate = item.average_rate;
    if (avg_rate) {
      if (avg_rate > 4) return 'Прекрасно!'
      if (avg_rate > 3) return 'Хорошо!'
      if (avg_rate > 2) return 'Так себе!'
    }
    return 0;
  }

  let item: fullCardType = {
    title: "test",
    description: "wgeroijngrweoijwgejiowgerjoiwegrjiowgeoji",
    seller: {
      id: 2,
      owner: {
        pk: 2,
        username: "test",
        image:
          "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
        verified: true,
        fio: "test test",
      },
      logo:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      name: "test shop",
    },
    present: true,
    discount_price: 23,
    preview:
      "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
    attachments: [
      {
        id: 2,
        attachment:
          "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
        attachment_type: "image",
      },
      {
        id: 3,
        attachment:
          "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
        attachment_type: "image",
      },
    ],
    category: {
      id: 1,
      name: "tset category",
      display: true,
      lft: 2,
      rght: 4,
      tree_id: 0,
      category_image:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      subcategory: 1,
    },
    payment_methods: [
      {
        id: 2,
        name: "taet payment",
      },
      {
        id: 3,
        name: " another taet payment",
      },
    ],
    deliver_methods: [
      {
        id: 2,
        name: "taet delivery",
      },
      {
        id: 3,
        name: " another taet delivery",
      },
    ],
    characteristics: '{"test": "test", "test1egroij egroerg": "test"}',
    calc_price: 35,
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
    comments_amount: 3,
    rate: [
      {
        id: 1,
        rate: 1,
        user: 1,
        card: 1,
      },
      {
        id: 2,
        rate: 2,
        user: 2,
        card: 2,
      },
    ],
    average_rate: 4.9,
  };
  var rate_icons = [];
  for (let index = 0; index < 5; index++) {
    if (item.average_rate >= index + 1) {
      rate_icons.push(
        <Image
          source={require("../../images/shop/yellow_star.png")}
          style={[styles.ico15x15]}
        />
      );
    } else {
      rate_icons.push(
        <Image
          source={require("../../images/shop/default_star.png")}
          style={[styles.ico15x15]}
        />
      );
    }
  }
  let characteristics = JSON.parse(item.characteristics);
  let keys = Object.keys(characteristics);
  return (
    <SafeAreaView>
      <HeaderBack navigation={navigation} title={item.category.name} shop_ico />
      <ScrollView style={[cmp("t", 10)]}>
        <View style={[styles.center, styles.column]}>
          <Carousel
            autoplay={true}
            showsControls={false}
            loop={true}
            autoplayInterval={5000}
            style={[styles.productSlider]}
          >
            {item.attachments.map((item, index) => (
              <View style={styles.slide1} key={index}>
                <Image
                  source={{ uri: item.attachment }}
                  style={[styles.sliderImage]}
                />
              </View>
            ))}
          </Carousel>
        </View>
        <View
          style={[
            { maxWidth: screenWidth * 0.1 },
            styles.row,
            cm("t", 10),
            cm("b", 20),
          ]}
        >
          <View
            style={[
              cm("l", 70),
              styles.rotate_90,
              styles.row,
              { maxWidth: 20, zIndex: 2, translateX: 220, translateY: 10 },
            ]}
          >
            <TouchableHighlight
              style={[{ height: 25, width: 60 }, cm("r", 20)]}
            >
              <Text style={[, styles.text]}>Отзывы</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[{ maxHeight: 25, width: 120 }, cm("r", 20)]}
            >
              <Text style={[styles.text]}>Характеристики</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[{ maxHeight: 25, width: 60 }, cm("r", 20)]}
            >
              <Text style={[styles.text]}>Товар</Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.column, cm("l", -23), {
            backgroundColor: '#F9FAFC',
            borderTopLeftRadius: 15,
            width: screenWidth * 0.8,
            borderTopRightRadius: 15,
          },
          cp('l', 10),
          cp('t', 10),
          ]}>
            <View style={[styles.row]}>
              <View style={[styles.column]}>
                <Text style={[styles.blackSubtitle, cm("b", 5)]}>
                  {item.title}
                </Text>
                <View style={[styles.row]}>
                  {rate_icons}
                  <Text style={[styles.font12Medium, cm("l", 5)]}>
                    {item.average_rate}
                  </Text>
                </View>
                <View style={[styles.row, cm("t", 10)]}>
                  <Text style={[styles.amountText, cm("l", 5)]}>
                    {item.calc_price}$
                  </Text>
                  {item.present ? (
                    <View style={[styles.row, cm("l", 100), cm("t", 10)]}>
                      <Text style={[styles.greenText, cm("l", 5)]}>
                        В наличии
                      </Text>
                      <Image
                        style={[cm("t", 5), cm("l", 5)]}
                        source={require("../../images/shop/checked.png")}
                      />
                    </View>
                  ) : (
                    <Text style={[styles.mediumText, cm("l", 100), cm("l", 5)]}>
                      Не в наличии
                    </Text>
                  )}
                </View>
                <Text style={[styles.smallText, cm("t", 20), { opacity: 0.6 }]}>
                  Описание
                </Text>
                <Text
                  style={[
                    styles.smallText,
                    styles.descriptionBlock,
                    cm("t", 20),
                  ]}
                >
                  {item.description}
                </Text>
                <Text style={[styles.smallText, cm("t", 20), { opacity: 0.6 }]}>
                  Продавец
                </Text>
                <SellerBlockSmall
                  id={"2"}
                  image={require("../../images/shop/seller.png")}
                  verified
                  product_amount={120}
                  rating={3.5}
                  name={"tset seller"}
                  navigation={navigation}
                />
                <Text style={[styles.title_18_medium, cm("b", 20)]}>
                  Доставка
                </Text>
                <View style={[styles.column, cm("b", 20)]}>
                  {item.deliver_methods.map((item, i) => (
                    <CheckedText text={item.name} key={i} />
                  ))}
                </View>
                <Text style={[styles.title_18_medium, cm("b", 20)]}>
                  Оплата
                </Text>
                <View style={[styles.column, cm("b", 50)]}>
                  {item.payment_methods.map((item, i) => (
                    <CheckedText text={item.name} key={i} />
                  ))}
                </View>
              </View>
              <View style={[styles.column, styles.displayNone]}>
                {keys.map((item, i) => (
                  <View style={[styles.column]}>
                    <View
                      style={[
                        styles.row,
                        cm("b", 20),
                        cm("t", 20),
                      ]}
                    >
                      <Text
                        style={[
                          styles.smallSBoldText,
                          { maxWidth: 120 },
                          cmp("r", 30),
                        ]}
                      >
                        {item}
                      </Text>
                      <Text style={[styles.smallText, cmp('l', 40), styles.posAbsolute]}>
                        {characteristics[item]}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        width: screenWidth * 0.6,
                      }}
                    />
                  </View>
                ))}
              </View>
              <View style={[styles.column, styles.displayNone]}>
                <View style={[styles.row]}>
                  <Text style={[styles.title_36]}>
                    {item.average_rate}
                  </Text>
                  <Image
                    source={require("../../images/shop/yellow_star.png")}
                    style={[styles.ico15x15, cm('t', 20)]}
                  />
                  <Text style={[styles.smallBoldText, cm('t', 15), cm('l', 10)]}>
                    {rate_to_text()}
                  </Text>
                  <Image
                    style={[cmp('l', 16), cm('t', 10)]}
                    source={require('../../images/shop/addCommentBtn.png')}
                  />
                </View>
                <Text style={[styles.smallBoldText, cm('b', 15)]}>
                  {item.comments.length} отзывов
                </Text>
                <View
                  style={[{
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: screenWidth * 0.77,
                    opacity: 0.1
                  },
                  cm('b', 20)
                  ]}
                />
                <View style={cm('b', 20 )}>

                {
                  item.comments.map((comment, ind) => (
                    <CommentBlock
                    id={comment.id}
                    comment={comment.comment}
                    user={comment.user}
                    card={comment.card}
                    datetime={comment.datetime}
                    />
                    ))
                  }
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { SingleProductPageScreen };
