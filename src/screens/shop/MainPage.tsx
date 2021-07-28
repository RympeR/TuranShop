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
import { TouchableCategory } from '../../components/TouchableCategory';
import { TouchableFilterText } from '../../components/TouchableFilterText';
import { SellerBlock } from '../../components/SellerBlock';
import { GreenBtn } from '../../components/GreenBtn';
import { BigCategory } from '../../components/BigCategory';
import { connect } from "react-redux";

const screenWidth = Dimensions.get("screen").width;


const MainPageScreen = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [index, setIndex] = useState(0);
  
  const onPress = (el:any) =>{
    setIndex(el);
    console.log(el);
  
 } 

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Найдем для тебя лучшие товары!</Text>
        <Image
          style={styles.topIcon}
          source={require("../../images/shop/search.png")}
        />
        <Image
          style={styles.topIcon}
          source={require("../../images/shop/shopping-cart.png")}
        />
      </View>
      <Carousel
        autoplay={true}
        showsControls={false}
        loop={true}
        autoplayInterval={5000}
        style={styles.slider}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>3</Text>
        </View>
      </Carousel>
      <View style={styles.category}>
        <View style={styles.categoryPreBlock}>
          <Text style={[styles.blackSubtitle, {}]}>Категории</Text>
          <Text>Больше</Text>
        </View>

        <ScrollView horizontal>
            <TouchableCategory 
                id={'1'}
                image={require("../../images/shop/search.png")}
                text='женская одежда'
            />
            <TouchableCategory 
                id={'2'}
                image={require("../../images/shop/search.png")}
                text='женская одежда'
            />
            <TouchableCategory 
                id={'3'}
                image={require("../../images/shop/search.png")}
                text='женская одежда'
            />
            <TouchableCategory 
                id={'4'}
                image={require("../../images/shop/search.png")}
                text='женская одежда'
            />
            <TouchableCategory 
                id={'5'}
                image={require("../../images/shop/search.png")}
                text='женская одежда'
            />
        </ScrollView>
        <ScrollView horizontal style={[styles.mt10]}>
            <TouchableFilterText text={'All'} />
            <TouchableFilterText text={'Новинки'} />
            <TouchableFilterText text={'Акции'} />
            <TouchableFilterText text={'Топ товары'} />
            <TouchableFilterText text={'Скидки'} />
        </ScrollView>
      </View>
      <ScrollView style={styles.body}></ScrollView>
      <View style={styles.sellers}>
        {/* <SellerBlock 
            id={'2'}
            image={require("../../images/shop/search.png")}
            verified
            product_amount={120}
            rate={'Хорошо!'}
            rating={3.5}
            name={'tset seller'}
        />
        <GreenBtn 
            text='Написать нам'
            ico={require('../../images/shop/message.png')}
        /> */}
        
      </View>
      
    </View>
  );
};


export { MainPageScreen };
