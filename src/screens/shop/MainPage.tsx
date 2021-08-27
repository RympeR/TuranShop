import React, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import Carousel from "pinar";
import { TouchableCategory } from "../../components/TouchableCategory";
import { TouchableFilterText } from "../../components/TouchableFilterText";
import { SellerBlock } from "../../components/SellerBlock";
import { GreenBtn } from "../../components/GreenBtn";
import { ProductItem } from "../../components/ProductItem";
import { connect } from "react-redux";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
} from "../../styles/style";
import { FrontGreenLinkBtn } from "../../components/FrontGreenLinkBtn";

const screenWidth = Dimensions.get("screen").width;

const MainPageScreen = ({ route, navigation }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [index, setIndex] = useState(0);
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  const [seller, setIsSeller] = useState(true);

  const onPress = (el: any) => {
    setIndex(el);
    console.log(el);
  };
  return (
    <View>
      {seller && (
        <FrontGreenLinkBtn
          ico={require("../../images/shop/shopping-bag.png")}
          title={"Хотите продавать"}
          text={"Перейти в личный магазин"}
          navigation={navigation}
          location={
            // route.params?.has_shop?
               "sellerselfview"
              // : "shop-registry-first-step"
          }
        />
      )}
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.headerText, cm("l", 20)]}>
              Найдем для тебя лучшие товары!
            </Text>
            <Image
              style={[styles.topIcon, cm("l", 10)]}
              source={require("../../images/shop/search.png")}
            />
            <TouchableHighlight
              underlayColor={"#EFEEF2"}
              style={[styles.topIcon, cm("r", 60)]}
              onPress={() => {
                navigation.navigate("cart");
              }}
            >
              <Image source={require("../../images/shop/shopping-cart.png")} />
            </TouchableHighlight>
          </View>
          <Carousel
            autoplay={true}
            showsControls={false}
            loop={true}
            autoplayInterval={5000}
            style={[styles.slider, cm("t", 30)]}
          >
            <View style={styles.slide1}>
              <Image
                source={require("../../images/shop/sliderBlock.png")}
                style={[styles.sliderImage]}
              />
            </View>
            <View style={styles.slide1}>
              <Image
                source={require("../../images/shop/sliderBlock.png")}
                style={[styles.sliderImage]}
              />
            </View>
            <View style={styles.slide1}>
              <Image
                source={require("../../images/shop/sliderBlock.png")}
                style={[styles.sliderImage]}
              />
            </View>
          </Carousel>
          <View
            style={[
              styles.category,
              cm("r", -20),
              cm("l", -20),
              cp("r", 20),
              cp("l", 20),
            ]}
          >
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
              style={[cm("t", 10), cp("r", 20)]}
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
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={[cm("t", 20), cm("b", 20)]}
            >
              <TouchableFilterText text={"All"} />
              <TouchableFilterText text={"Новинки"} />
              <TouchableFilterText text={"Акции"} />
              <TouchableFilterText text={"Топ товары"} />
              <TouchableFilterText text={"Скидки"} />
            </ScrollView>
          </View>
          <View style={styles.body}>
            <View
              style={[styles.fl1, styles.justifyLeft, styles.row, cm("b", 20)]}
            >
              <Text style={[styles.title_18, cm("l", 30)]}>
                Найди, все что нужно!
              </Text>
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
          </View>

          <View style={styles.sellers}>
            <View style={[styles.categoryPreBlock, cm("b", 20)]}>
              <Text style={[styles.blackSubtitle, cm("l", 10), {}]}>
                Продавцы
              </Text>
              <TouchableHighlight
                underlayColor={"#EFEEF2"}
                onPress={() => {
                  navigation.navigate("sellers");
                }}
              >
                <Text style={[styles.greenText, cm("r", 10), cm("t", 5), {}]}>
                  Больше
                </Text>
              </TouchableHighlight>
            </View>
            <SellerBlock
              id={"2"}
              image={require("../../images/shop/seller.png")}
              verified
              product_amount={120}
              rate={"Хорошо!"}
              rating={3.5}
              name={"tset seller"}
              navigation={navigation}
            />
            <SellerBlock
              id={"2"}
              image={require("../../images/shop/seller.png")}
              verified
              product_amount={120}
              rate={"Хорошо!"}
              rating={3.5}
              name={"tset seller"}
              navigation={navigation}
            />
            <SellerBlock
              id={"2"}
              image={require("../../images/shop/seller.png")}
              verified
              product_amount={120}
              rate={"Хорошо!"}
              rating={3.5}
              name={"tset seller"}
              navigation={navigation}
            />
            <GreenBtn
              custom_style={cm("b", 30)}
              text="Написать нам"
              ico={require("../../images/shop/message_white.png")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export { MainPageScreen };
