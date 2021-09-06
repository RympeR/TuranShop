import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
} from "../../styles/style";
import { OrderRow } from "../../components/OrderRow";
import { BigOrderRow } from "../../components/BigOrderRow";
import { Modalize } from "react-native-modalize";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { modalStyle } from "../../styles/modalStyle";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const ClientOrderScreen = ({ route, navigation }) => {
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  const [orderSearch, setOrderSearch] = useState("");
  const [smallOrder, setSmallOrder] = useState(true);
  const [pressed, setPressed] = useState(false);

  let orders = [
    {
      pk: 11123123123,
      status: "ожидается отправка",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: true,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "заказ отправлен",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: true,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
    {
      pk: 11123123123,
      status: "ожидается",
      ico:
        "https://i.pinimg.com/originals/95/30/41/953041070f000d45c05c912005f63724.jpg",
      new: false,
      seller: "Продавец Екатерина",
      date: 1630064341,
      summ: 2015,
    },
  ];
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  type orderStatusType = {
    title: string;
    active: boolean;
  };
  const [orderStatus, setOrderStatus] = useState([
    { title: "Все", active: false },
    { title: "Новые", active: false },
    { title: "Ожидается оплата", active: false },
    { title: "Выполненные", active: false },
    { title: "Отмененные", active: false },
    { title: "Оплаченные", active: false },
    { title: "Ожидается отправка", active: false },
  ]);
  const [active_filters, setActive_filters] = useState([""]);
  const handleClick = (item: orderStatusType) => {
    for (const iterator of orderStatus) {
      if (iterator.title == item.title) {
        iterator.active = !iterator.active;
        break;
      }
    }
    setOrderStatus(orderStatus);
  };
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update the state to force render
  }
  function reset() {
    for (const iterator of orderStatus) {
      iterator.active = false;
    }
    setOrderStatus(orderStatus);
    setActive_filters([""]);
    forceUpdate();
  }
  function applyFilters() {
    let temp_filters = [];
    for (const iterator of orderStatus) {
      iterator.active ? temp_filters.push(iterator.title) : null;
    }
    setActive_filters(temp_filters);
  }
  function filter_items(value) {
    let lower_filters = active_filters.map((item, index) => item.toLowerCase());
    if (lower_filters.includes(value.status)) return true;
    if (lower_filters.includes("все")) return true;
    if (lower_filters.includes("новые")) if (value.new) return true;
    if (lower_filters.includes("")) return true;
    return false;
  }

  const forceUpdate = useForceUpdate();
  return (
    <SafeAreaView style={{ position: "relative", height: screenHeight }}>
      {/* хэдер */}
      <View style={[styles.row, cm("b", -40), cm("t", 50)]}>
        <TouchableHighlight
          underlayColor={"#EFEEF2"}
          style={[cm("l", 20), { width: 30, zIndex: 2 }]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../../images/shop/backImage.png")} />
        </TouchableHighlight>
        <View style={[styles.headerLinkTitleBlock]}>
          <Text
            style={[
              // cm("t", 17),
              styles.headerTitle,
              // styles.center,
              // styles.alignSelfCenter
            ]}
          >
            Заказы
          </Text>
        </View>
        <TouchableHighlight
          underlayColor={"#EFEEF2"}
          style={[
            styles.topIcon,
            cmp("l", 72),
            cm("t", -1),
            // cm("b", -50),
            { width: 40 },
          ]}
          onPress={() => {
            setSmallOrder(!smallOrder);
          }}
        >
          {smallOrder ? (
            <Image
              style={[]}
              source={require("../../images/shop/bigOrders.png")}
            />
          ) : (
            <Image
              style={[]}
              source={require("../../images/shop/smallOrders.png")}
            />
          )}
        </TouchableHighlight>
      </View>
      {/* поиск */}
      <View style={[styles.row, cm("t", 70), cm("l", 10), cm("b", 20)]}>
        <View style={[styles.row]}>
          <View style={[styles.searchImgBack]}>
            <Icon name="search" style={[styles.imageStyle, cm("t", 10)]} />
          </View>
          <TextInput
            style={[styles.searchInput]}
            placeholder="Поиск"
            onChangeText={setOrderSearch}
            value={orderSearch}
            placeholderTextColor="rgba(0, 0, 0, 1);"
            selectTextOnFocus
          />
        </View>
        <TouchableHighlight
          style={[styles.settingsHighlight, cm("l", 8)]}
          underlayColor={"#EFEEF2"}
          onPress={onOpen}
        >
          <Image
            source={require("../../images/shop/settings.png")}
            style={[styles.settingsImg, cm("t", 10), cm("l", 11)]}
          />
        </TouchableHighlight>
      </View>
      {/* модалка */}
      <Modalize
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        ref={modalizeRef}
        snapPoint={screenHeight * 0.5}
        modalHeight={screenHeight * 0.45}
      >
        <View
          style={[
            styles.column,
            { alignContent: "flex-end", justifyContent: "flex-end" },
          ]}
        >
          <View style={[styles.row, cmp("t", 3)]}>
            <Text style={[styles.regular600, cmp("l", 5)]}>Статус заказа</Text>
            <TouchableHighlight
              onPress={onClose}
              underlayColor={"#rgba(12, 121, 82, 1)"}
              style={[cmp("l", 50), styles.border15, { width: 30 }]}
            >
              <Image source={require("../../images/shop/closeModal.png")} />
            </TouchableHighlight>
          </View>
          <View style={[styles.row, { flexWrap: "wrap" }]}>
            {orderStatus.map((item: orderStatusType, index: number) => (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  handleClick(item);
                  forceUpdate();
                }}
                activeOpacity={0}
                underlayColor={"#EFEEF2"}
                style={[
                  cm("l", 10),
                  cm("t", 10),
                  item.active ? { borderRadius: 15 } : styles.filterCategory,
                ]}
              >
                <>
                  {item.active ? (
                    <LinearGradient
                      style={styles.gradient}
                      colors={["#0C7952", "#289A71"]}
                    >
                      <Text
                        style={[
                          styles.smallText,
                          styles.mt2,
                          styles.ml10,
                          styles.pr8,
                          { color: "#FFFFFF" },
                        ]}
                      >
                        {item.title}
                      </Text>
                    </LinearGradient>
                  ) : (
                    <Text
                      style={[
                        styles.smallText,
                        styles.mt2,
                        styles.ml10,
                        styles.pr8,
                      ]}
                    >
                      {item.title}
                    </Text>
                  )}
                </>
              </TouchableHighlight>
            ))}
          </View>
          <View style={[styles.row, cm("t", 20), styles.applyFilterBlock]}>
            <TouchableHighlight
              onPress={reset}
              activeOpacity={0}
              underlayColor={"rgba(0,0,0,0)"}
              style={[cm("l", 20), cm("t", 20), { height: 57 }]}
            >
              <Image source={require("../../images/shop/reload.png")} />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={applyFilters}
              style={[
                cm("l", 15),
                cm("t", 20),
                styles.SingleBtnBlock,
                { width: 254 },
              ]}
            >
              <View style={[styles.fl1, styles.row, styles.center]}>
                <Text style={[styles.font17SBold, styles.center]}>
                  Применить
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Modalize>
      {/* фильтры */}
      <View style={[styles.row, { flexWrap: "wrap" }]}>
        {active_filters
          .filter((value: string) => value != "")
          .map((item, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => {
                // handleClick(item);
                forceUpdate();
              }}
              activeOpacity={0}
              underlayColor={"#EFEEF2"}
              style={[cm("l", 10), cm("t", 10), { borderRadius: 15 }]}
            >
              <View style={[styles.row]}>
                <LinearGradient
                  style={styles.gradient}
                  colors={["#0C7952", "#289A71"]}
                >
                  <Text
                    style={[
                      styles.smallText,
                      styles.mt2,
                      styles.ml10,
                      styles.pr8,
                      { color: "#FFFFFF" },
                    ]}
                  >
                    {item}
                  </Text>
                </LinearGradient>
                <Image source={require("../../images/shop/x.png")} />
              </View>
            </TouchableHighlight>
          ))}
      </View>
      {/* товары */}
      <ScrollView>
        <View style={[styles.column, styles.center, cm("t", 10)]}>
          {smallOrder ? (
            <FlatList
              style={[cm("b", 70)]}
              data={orders.filter(filter_items).filter((item) =>
                orderSearch != ""
                  ? item.pk
                      .toString()
                      .toLowerCase()
                      .includes(orderSearch.toLowerCase())
                  : item.pk
              )}
              keyExtractor={(item, index: number) => index.toString()} //has to be unique
              renderItem={({ item }) => (
                <OrderRow
                  pk={item.pk}
                  status={item.status}
                  ico={item.ico}
                  new={item.new}
                  navigation={navigation}
                />
              )}
              horizontal={false}
              numColumns={1}
            />
          ) : (
            <FlatList
              style={[cm("b", 70)]}
              data={orders.filter(filter_items).filter((item) =>
                orderSearch != ""
                  ? item.pk
                      .toString()
                      .toLowerCase()
                      .includes(orderSearch.toLowerCase())
                  : item.pk
              )}
              keyExtractor={(item, index: number) => index.toString()} //has to be unique
              renderItem={({ item }) => (
                <BigOrderRow
                  pk={item.pk}
                  status={item.status}
                  ico={item.ico}
                  seller={item.seller}
                  navigation={navigation}
                  date={item.date}
                  summ={item.summ}
                />
              )}
              horizontal={false}
              numColumns={1}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { ClientOrderScreen };
