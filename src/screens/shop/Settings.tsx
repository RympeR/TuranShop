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
} from "react-native";
import { HeaderBack } from "../../components/HeaderBack";
import { RowLink } from "../../components/RowArrowLink";
import { GreenBtn } from "../../components/GreenBtn";

import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
  computePercentMaxHeight,
} from "../../styles/style";
import { LinearGradient } from "expo-linear-gradient";
import { Camera } from 'expo-camera';

const screenWidth = Dimensions.get("screen").width;

const SettingsScreen = ({ route, navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  function get_permisssions(){
    (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
  }
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  return (
    <View>
      <HeaderBack title={"Настройки"} navigation={navigation} />
      <View style={[styles.column, styles.center, cm("t", 60)]}>
        <View style={[styles.column, cm("b", 15)]}>
        <Camera type={type}>
          <TouchableHighlight
            onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            style={[{ width: 119, height: 119 }, styles.center]}
          >
            <View>
              <Image source={require("../../images/shop/settingsImg.png")} />
              <Image
                source={require("../../images/shop/imgPlus.png")}
                style={[{ zIndex: 2 }, cm("t", -25), cm("l", 40)]}
              />
            </View>
          </TouchableHighlight>
          </Camera>
        </View>
        <RowLink text={"Личные данные"} navigation={navigation} location={""} />
        <RowLink text={"Кошельки"} navigation={navigation} location={""} />
        <RowLink text={"Безопасность"} navigation={navigation} location={""} />
        <RowLink text={"Мои заказы"} navigation={navigation} location={""} />
        <RowLink text={"Избранное"} navigation={navigation} location={""} />
        <RowLink text={"Уведомления"} navigation={navigation} location={""} />
        <RowLink text={"Звук"} navigation={navigation} location={""} />
        <RowLink text={"Помощь"} navigation={navigation} location={""} />
      </View>
      <TouchableHighlight
        onPress={() => {}}
        style={[
          styles.greenBtn,
          styles.marginCenterHorizontal,
          styles.center,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
      >
        <View style={[styles.row, styles.center]}>
          <Text
            style={[
              styles.mediumText,
              //   cm("t", ),
              { color: "rgba(0, 0, 0, 0.5)" },
            ]}
          >
            Выйти с аккаунта
          </Text>
          <Image
            source={require("../../images/shop/logout.png")}
            style={[styles.greenBtnIco, cm("l", 8), cm("t", 7)]}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};
export { SettingsScreen };
