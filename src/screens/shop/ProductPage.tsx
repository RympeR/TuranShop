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

const screenWidth = Dimensions.get("screen").width;

type ProductItemType = {
  image: ImageSourcePropType;
  name: string;
  id?: string;
  price: number;
  discount_amount?: number;
  full_price?: number;
  rate: number;
  reply_amount: number;
  main: boolean;
};

const ProductPageScreen = ({ route, navigation }) => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  const cm = computeMargin;
  const cp = computePadding;
  const cmp = computeMarginScreenPercent;
  const [productSearch, onChangeproductSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(!pressed);
  };

  let filters = {
    sortBy: false,
    status: false,
    new: false,
    price: 0,
    brand: false,
    country_creator: false,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsAsync());
  }, [dispatch]);
  const items = useSelector((state) => state.product.products).results;
  let sortBy: string[] = ["Ретйинг", "Популярные", "Акции", "Новинки"];
  let brands: string[] = ["brand1", "brand2", "brand3", "brand4"];
  let countries: string[] = ["country1", "country2", "country3", "country4"];


  return (
    <View>
      <HeaderBack navigation={navigation} title={route.params.title} shop_ico />
      <View style={[styles.row, cm("t", 70), cm("l", 10), cm("b", 20)]}>
        <View style={[styles.row]}>
          <Icon name="search" style={styles.imageStyle} />
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
            id={item.seller.id}
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
      <Modalize
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        ref={modalizeRef}
        snapPoint={700}
        modalTopOffset={10}
        modalHeight={800}
        // adjustToContentHeight
      >
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
        <View style={[styles.row, { maxWidth: screenWidth * 0.8 }]}>
          {sortBy.map((item: string, index: number) => (
            <TouchableHighlight
              key={index}
              onPress={handleClick}
              activeOpacity={0}
              underlayColor={"#EFEEF2"}
              style={[styles.ml20, styles.filterCategory]}
            >
              <>
                {pressed && (
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
                )}
                {!pressed && (
                  <Text
                    style={[
                      styles.smallText,
                      styles.mt2,
                      styles.ml10,
                      styles.pr8,
                    ]}
                  >
                    {item}
                  </Text>
                )}
              </>
            </TouchableHighlight>
          ))}
        </View>
      </Modalize>
    </View>
  );
};

export { ProductPageScreen };
