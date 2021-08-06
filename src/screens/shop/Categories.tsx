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
import { BigCategory } from "../../components/BigCategory";
import { connect } from "react-redux";
import {
    styles,
    computeMargin,
    computePadding,
    computeMarginScreenPercent,
  } from "../../styles/style";


const CategoriesScreen = () => {
    const cm = computeMargin;
    const cp = computePadding;
    const cmp = computeMarginScreenPercent;

    return (
        <ScrollView>
            <View style={[styles.fl1, styles.column, cm('t', 100), cm('l', 15),]}>
                <BigCategory
                    text={"Тестовая категория"}
                    ico={require('../../images/shop/CategoryImg.png')}
                />
                <BigCategory
                    text={"Тестовая категория"}
                    ico={require('../../images/shop/CategoryImg.png')}
                />
                <BigCategory
                    text={"Тестовая категория"}
                    ico={require('../../images/shop/CategoryImg.png')}
                />
                <BigCategory
                    text={"Тестовая категория"}
                    ico={require('../../images/shop/CategoryImg.png')}
                />
                <BigCategory
                    text={"Тестовая категория"}
                    ico={require('../../images/shop/CategoryImg.png')}
                />
            </View>
        </ScrollView>
    );
}

export {CategoriesScreen};
