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
} from "../../styles/style";
import { HeaderBack } from "../../components/HeaderBack";
import { ProductItem } from "../../components/ProductItem";
import { Modalize } from "react-native-modalize";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { loadProductsAsync } from "../../redux/reducers/product/product.thunks";
import AppLoading from "expo-app-loading";
import { data } from "../../redux/actions/testData";
import { TouchableCategory } from "../../components/TouchableCategory";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
type ProductItemType = {
  image: string;
  name: string;
  id?: string;
  price: number;
  discount_amount?: number;
  full_price?: number;
  rate: number;
  reply_amount: number;
  main: boolean;
};
type orderStatusType = {
  title: string;
  active: boolean;
};
const ProductMainPage = ({ route, navigation }) => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  const [sortBy, setSortBy] = useState([
    { title: "Ретйинг", active: true },
    { title: "Популярные", active: false },
    { title: "Новинки", active: false },
    { title: "Акции", active: false },
  ]);
  const [status, setStatus] = useState([
    { title: "Нет в наличии", active: false },
    { title: "В наличии", active: false },
    { title: "На складе", active: false },
  ]);
  const [brands, setBrands] = useState([
    { title: "brand1", active: false },
    { title: "brand2", active: false },
    { title: "brand3", active: false },
    { title: "brand4", active: false },
  ]);
  const [countries, setCountries] = useState([
    { title: "country1", active: false },
    { title: "country2", active: false },
    { title: "country3", active: false },
    { title: "country4", active: false },
  ]);
  const [active_filters, setActive_filters] = useState([""]);
  const [productSearch, onChangeproductSearch] = useState("");
  const [brandSearch, onChangeBrandSearch] = useState("");
  const [countrySearch, onChangeCountrySearch] = useState("");
  const [items, setItems] = useState(data);

  // function applyFilters() {
  //   let temp_filters = [];
  //   for (const iterator of orderStatus) {
  //     iterator.active ? temp_filters.push(iterator.title) : null;
  //   }
  //   setActive_filters(temp_filters);
  // }

  function filter_items(value) {
    let lower_filters = active_filters.map((item, index) => item.toLowerCase());
    if (lower_filters.includes(value.status)) return true;
    if (lower_filters.includes("все")) return true;
    if (lower_filters.includes("новые")) if (value.new) return true;
    if (lower_filters.includes("")) return true;
    return false;
  }
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update the state to force render
  }
  function reset() {
    sortBy.map((item) => (item.active = false));
    status.map((item) => (item.active = false));
    brands.map((item) => (item.active = false));
    countries.map((item) => (item.active = false));
    setSortBy(sortBy);
    setStatus(status);
    setBrands(brands);
    setCountries(countries);
    setActive_filters([""]);
    forceUpdate();
  }
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;

  const forceUpdate = useForceUpdate();

  const handleClickOrder = (item: orderStatusType) => {
    // setPressed(!pressed);
  };
  const handleClickStatus = (item: orderStatusType) => {
    // setPressed(!pressed);
  };
  const handleClickBrand = (item: orderStatusType) => {
    // setPressed(!pressed);
  };
  const handleClickCountry = (item: orderStatusType) => {
    // setPressed(!pressed);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsAsync());
  }, [dispatch]);
  // const products = useSelector((state) => state.product.products);
  const products = data;

  return (
    <SafeAreaView style={{ position: "relative", height: screenHeight }}>
      {/* хэдер */}
      <HeaderBack navigation={navigation} title={'Товары'} shop_ico />
      {/* поиск */}
      <View style={[styles.row, cm("t", 70), cm("l", 10), cm("b", 20)]}>
        <View style={[styles.row]}>
          <View style={[styles.searchImgBack]}>
            <Icon name="search" style={[styles.imageStyle, cm("t", 10)]} />
          </View>
          <TextInput
            style={[styles.searchInput]}
            placeholder="Поиск"
            onChangeText={onChangeproductSearch}
            value={productSearch}
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

      <Modalize
        // scrollViewProps={{ showsVerticalScrollIndicator: false }}
        ref={modalizeRef}
        snapPoint={screenHeight * 0.5}
        modalTopOffset={10}
        modalHeight={screenHeight * 0.9}
        // adjustToContentHeight
      >
        <View style={[styles.column, cmp("b", 5)]}>
          <View style={[styles.row, cmp("t", 3)]}>
            <Text style={[styles.regular600, cmp("l", 5)]}>Сортировка</Text>
            <TouchableHighlight
              onPress={onClose}
              underlayColor={"#rgba(12, 121, 82, 1)"}
              style={[cmp("l", 50), styles.border15, { width: 30 }]}
            >
              <Image source={require("../../images/shop/closeModal.png")} />
            </TouchableHighlight>
          </View>
          <View style={[styles.row, { flexWrap: "wrap" }]}>
            {sortBy.map((item: orderStatusType, index: number) => (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  handleClickOrder(item);
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
          <View style={[styles.row, cmp("t", 3)]}>
            <Text style={[styles.regular600, cmp("l", 5)]}>Статус товара</Text>
          </View>
          <View style={[styles.row, { flexWrap: "wrap" }]}>
            {status.map((item: orderStatusType, index: number) => (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  handleClickOrder(item);
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
          <View style={[styles.row, cmp("t", 3)]}>
            <Text style={[styles.regular600, cmp("l", 5)]}>Бренд</Text>
          </View>
          <View style={[styles.row, cmp("t", 3), cmp("l", 3)]}>
            <View style={[styles.searchImgBack]}>
              <Icon name="search" style={[styles.imageStyle, cm("t", 10)]} />
            </View>
            <TextInput
              style={[styles.searchInput]}
              placeholder="Поиск"
              onChangeText={onChangeBrandSearch}
              value={brandSearch}
              placeholderTextColor="rgba(0, 0, 0, 1);"
              selectTextOnFocus
            />
          </View>
          <View style={[styles.row, { flexWrap: "wrap" }]}>
            {brands.map((item: orderStatusType, index: number) => (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  handleClickOrder(item);
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
          <View style={[styles.row, cmp("t", 3)]}>
            <Text style={[styles.regular600, cmp("l", 5)]}>
              Страна-производитель
            </Text>
          </View>
          <View style={[styles.row, cmp("t", 3), cmp("l", 3)]}>
            <View style={[styles.searchImgBack]}>
              <Icon name="search" style={[styles.imageStyle, cm("t", 10)]} />
            </View>
            <TextInput
              style={[styles.searchInput]}
              placeholder="Поиск"
              onChangeText={onChangeCountrySearch}
              value={countrySearch}
              placeholderTextColor="rgba(0, 0, 0, 1);"
              selectTextOnFocus
            />
          </View>
          <View style={[styles.row, { flexWrap: "wrap" }]}>
            {countries.map((item: orderStatusType, index: number) => (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  handleClickOrder(item);
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
            <View style={[styles.row, cm("t", 20), styles.applyFilterBlock]}>
              <TouchableHighlight
                // onPress={reset}
                activeOpacity={0}
                underlayColor={"rgba(0,0,0,0)"}
                style={[cm("l", 20), cm("t", 20), { height: 57 }]}
              >
                <Image source={require("../../images/shop/reload.png")} />
              </TouchableHighlight>
              <TouchableHighlight
                // onPress={applyFilters}
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
        </View>
      </Modalize>
      {/* фильтры */}
      <View style={[styles.row, { flexWrap: "wrap" }, cm("b", 20)]}>
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
      <View style={[styles.column, cm("b", 30)]}>
        <View style={[styles.row]}>
          <Text style={[styles.blackSubtitle, cm("l", 20), cmp("r", 45), {}]}>
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
          style={[cm("t", 10)]}
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
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[cm("b", 40), cm("l", -7)]}
      >
        <View>
          <FlatList
            data={items.filter((item: any) =>
              productSearch != ""
                ? item.title.toLowerCase().includes(productSearch.toLowerCase())
                : item.title
            )}
            keyExtractor={(item, index: number) => index.toString()} //has to be unique
            renderItem={({ item }) => (
              <ProductItem
                image={item.preview}
                name={item.title}
                id={item.id}
                price={item.calc_price}
                rate={item.average_rate}
                reply_amount={item.comments_amount}
                navigation={navigation}
                // main={item.main}
              />
            )}
            horizontal={false}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { ProductMainPage };
