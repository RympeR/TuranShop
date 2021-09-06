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
  Platform,
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
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const screenWidth = Dimensions.get("screen").width;

const SettingsScreen = ({ route, navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const [hasPermission, setHasPermission] = useState(false);
  const [image, setImage] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  return (
    <View>
      <HeaderBack title={"Настройки"} navigation={navigation} />
      <View style={[styles.column, styles.center, cm("t", 60)]}>
        <View style={[styles.column, cm("b", 15)]}>
          <TouchableHighlight
            onPress={pickImage}
            style={[{ width: 119, height: 119 }, styles.center]}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 120, height: 120, borderRadius: 45 }}
              />
            ) : (
              <View>
                <Image source={require("../../images/shop/settingsImg.png")} />
                <Image
                  source={require("../../images/shop/imgPlus.png")}
                  style={[{ zIndex: 2 }, cm("t", -25), cm("l", 40)]}
                />
              </View>
            )}
          </TouchableHighlight>
        </View>
        <RowLink swiper={false} text={"Личные данные"} navigation={navigation} location={""} />
        <RowLink swiper={false} text={"Кошельки"} navigation={navigation} location={""} />
        <RowLink swiper={false} text={"Безопасность"} navigation={navigation} location={""} />
        <RowLink swiper={false} text={"Мои заказы"} navigation={navigation} location={"client-orders"} />
        <RowLink swiper={false} text={"Избранное"} navigation={navigation} location={""} />
        <RowLink swiper={true} text={"Уведомления"} navigation={navigation} location={""} />
        <RowLink swiper={true} text={"Звук"} navigation={navigation} location={""} />
        <RowLink swiper={false} text={"Помощь"} navigation={navigation} location={""} />
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
