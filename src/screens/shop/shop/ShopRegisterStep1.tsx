import React, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { HeaderBack } from "../../../components/HeaderBack";

import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
  computePercentMaxHeight,
} from "../../../styles/style";

const FirstRegistryStep = ({ route, navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;
  const [title, setTitle] = useState("");
  const screenWidth = Dimensions.get("screen").width;
  function move_to(url: string, navigation: any, params: object = {}) {
    navigation.navigate(url, params);
  }
  function onKeyPress({ nativeEvent: { key: keyValue } }) {
    console.log("called");
    console.log(keyValue);
    if (keyValue === "Enter" || keyValue == "")
      if (!!title) {
        move_to("shop-registry-second-step", navigation, {
          title: title,
        });
      }
  }
  return (
    <SafeAreaView>
      <HeaderBack navigation={navigation} title={"Регистрация"} />
      <View style={[styles.column, cmp("t", 20), styles.center]}>
        <View style={[styles.center, styles.textBlock, cm("b", 20)]}>
          <Text style={[styles.title_27, styles.center]}>Название</Text>
        </View>
        <View style={[cm("b", 30)]}>
          <Text style={styles.text}>
            Напишите лучшее название для вашего будущего магазина
          </Text>
        </View>
        <View style={[styles.borderStyle, cm("b", 20)]}>
          <TextInput
            style={[
              styles.nameInput,
              cm("l", 10),
              { textAlign: "center", width: screenWidth * 0.8 },
            ]}
            returnKeyType="go"
            blurOnSubmit={true}
            onSubmitEditing={() => {
              !!title
                ? move_to("shop-registry-second-step", navigation, {
                    title: title,
                  })
                : "";
            }}
            placeholder="Название"
            onChangeText={setTitle}
            onKeyPress={onKeyPress}
            value={title}
            placeholderTextColor="rgba(0, 0, 0, 1);"
            selectTextOnFocus
            multiline={true}
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            !!title
              ? move_to("shop-registry-second-step", navigation, {
                  title: title,
                })
              : "";
          }}
          style={styles.SingleBtnBlock}
        >
          <View style={[styles.fl1, styles.row, styles.center]}>
            <Text style={[styles.font17SBold, styles.center]}>Далее</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setTitle("мое имя");
            move_to("shop-registry-second-step", navigation, { title: title });
          }}
          underlayColor={"#EFEEF2"}
          style={[cm("t", 20), styles.font17MediumBlack]}
        >
          <Text>Использовать мое имя</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export { FirstRegistryStep };
