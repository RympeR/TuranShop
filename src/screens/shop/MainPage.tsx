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
import { BigCategory } from "../../components/BigCategory";
import { connect } from "react-redux";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
} from "../../styles/style";

const screenWidth = Dimensions.get("screen").width;

const MainPageScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [index, setIndex] = useState(0);
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;

  const onPress = (el: any) => {
    setIndex(el);
    console.log(el);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerText, cm('l', 20)]}>Найдем для тебя лучшие товары!</Text>
          <Image
            style={[styles.topIcon, cm('l', 10)]}
            source={require("../../images/shop/search.png")}
          />
          <Image
            style={[styles.topIcon, cm('r', 60)]}
            source={require("../../images/shop/shopping-cart.png")}
          />
        </View>
        <Carousel
          autoplay={true}
          showsControls={false}
          loop={true}
          autoplayInterval={5000}
          style={[styles.slider, cm('t', 30)]}
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
        <View style={styles.category}>
          <View style={[styles.categoryPreBlock]}>
            <Text style={[styles.blackSubtitle, cm("l", 30), {}]}>
              Категории
            </Text>
            <TouchableHighlight
              underlayColor={'#EFEEF2'}
              onPress={() =>{navigation.navigate('categories');}}
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
            />
            <TouchableCategory
              id={"2"}
              image={require("../../images/shop/search.png")}
              text="женская одежда"
            />
            <TouchableCategory
              id={"3"}
              image={require("../../images/shop/search.png")}
              text="женская одежда"
            />
            <TouchableCategory
              id={"4"}
              image={require("../../images/shop/search.png")}
              text="женская одежда"
            />
            <TouchableCategory
              id={"5"}
              image={require("../../images/shop/search.png")}
              text="женская одежда"
            />
          </ScrollView>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal style={[cm('t', 20), cm('b', 20)]}>
            <TouchableFilterText text={"All"} />
            <TouchableFilterText text={"Новинки"} />
            <TouchableFilterText text={"Акции"} />
            <TouchableFilterText text={"Топ товары"} />
            <TouchableFilterText text={"Скидки"} />
          </ScrollView>
        </View>
        <View style={styles.body}>
          <View style={[styles.fl1, styles.justifyLeft, styles.row, cm('b', 20),]}>
            <Text style={[styles.title_18, cm('l', 30)]}>Найди, все что нужно!</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={[cm('t', 15)]}
          >
            <ProductItem
                image={require("../../images/shop/productItem.png")}
                name={'Iphone xs max'}
                id={"2"}
                price={7499}
                discount_amount={35}
                full_price={9000}
                rate={3.5}
                reply_amount={125}
            />
            <ProductItem
                image={require("../../images/shop/productItem.png")}
                name={'Iphone xs max'}
                id={"3"}
                price={7499}
                rate={3.5}
                reply_amount={125}
            />
            <ProductItem
                image={require("../../images/shop/productItem.png")}
                name={'Iphone xs max'}
                id={"3"}
                price={7499}
                rate={3.5}
                reply_amount={125}
            />
          </ScrollView>
        </View>

        <View style={styles.sellers}>
          <View style={[styles.categoryPreBlock, cm('b', 20)]}>
            <Text style={[styles.blackSubtitle, cm("l", 10), {}]}>
              Продавцы
            </Text>
            <TouchableHighlight>
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
          />
          <SellerBlock
            id={"2"}
            image={require("../../images/shop/seller.png")}
            verified
            product_amount={120}
            rate={"Хорошо!"}
            rating={3.5}
            name={"tset seller"}
          />
          <SellerBlock
            id={"2"}
            image={require("../../images/shop/seller.png")}
            verified
            product_amount={120}
            rate={"Хорошо!"}
            rating={3.5}
            name={"tset seller"}
          />
          <GreenBtn
            custom_style={cm('b', 30)}
            text="Написать нам"
            ico={require("../../images/shop/message_white.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export { MainPageScreen };
