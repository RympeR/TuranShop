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
  Platform,
} from "react-native";
import { HeaderBack } from "../../../components/HeaderBack";
import * as ImagePicker from "expo-image-picker";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
  computePercentMaxHeight,
} from "../../../styles/style";

const LogoRegistryStep = ({ route, navigation }) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const cpmh = computePercentMaxHeight;
  const cp = computePadding;
  const [image, setImage] = useState(null);
  const screenWidth = Dimensions.get("screen").width;
  function move_to(url: string, navigation: any, params: object = {}) {
    navigation.navigate(url, params);
  }
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
    <SafeAreaView>
      <HeaderBack navigation={navigation} title={"Регистрация"} />
      <View style={[styles.column, cmp("t", 20), styles.center]}>
        <View style={[styles.center, styles.textBlock, cm("b", 20)]}>
          <Text style={[styles.title_27, styles.center]}>Логотип</Text>
        </View>
        <View style={[cm("b", 30)]}>
          <Text style={styles.text}>
            Загрузите логотип компании или используйте личное фото
          </Text>
        </View>
        <TouchableHighlight onPress={pickImage} style={[cm("b", 15)]}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          ) : (
            <Image source={require("../../../images/shop/LogoBlock.png")} />
          )}
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            move_to("shop-registry-finish-step", navigation);
          }}
          style={styles.SingleBtnBlock}
        >
          <View style={[styles.fl1, styles.row, styles.center]}>
            <Text style={[styles.font17SBold, styles.center]}>Далее</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setImage("dude");
            console.warn({
              title: route.params.title,
              image: image,
            });
            console.log("created");
            move_to("shop-registry-finish-step", navigation);
          }}
          underlayColor={"#EFEEF2"}
          style={[cm("t", 20), styles.font17MediumBlack]}
        >
          <Text>Использовать мой аватар</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export { LogoRegistryStep };
