import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const TEXT_LENGTH = 40
const TEXT_HEIGHT = 14
const OFFSET = TEXT_LENGTH / 2 - TEXT_HEIGHT / 2

function computeMargin(direction: "t" | "b" | "l" | "r", value: number) {
  let margin: any = {};
  switch (direction) {
    case "t":
      margin.marginTop = value;
      break;
    case "b":
      margin.marginBottom = value;
      break;
    case "l":
      margin.marginLeft = value;
      break;
    case "r":
      margin.marginRight = value;
      break;
    default:
      break;
  }
  return margin;
}

function computeMarginScreenPercent(
  direction: "t" | "b" | "l" | "r",
  value: number
) {
  let margin: any = {};
  switch (direction) {
    case "t":
      margin.marginTop = screenHeight * (value / 100);
      break;
    case "b":
      margin.marginBottom = screenHeight * (value / 100);
      break;
    case "l":
      margin.marginLeft = screenWidth * (value / 100);
      break;
    case "r":
      margin.marginRight = screenWidth * (value / 100);
      break;
    default:
      break;
  }
  return margin;
}

function computePaddingScreenPercent(
  direction: "t" | "b" | "l" | "r",
  value: number
) {
  let padding: any = {};
  switch (direction) {
    case "t":
      padding.paddingTop = screenHeight * (value / 100);
      break;
    case "b":
      padding.paddingBottom = screenHeight * (value / 100);
      break;
    case "l":
      padding.paddingLeft = screenWidth * (value / 100);
      break;
    case "r":
      padding.paddingRight = screenWidth * (value / 100);
      break;
    default:
      break;
  }
  return padding;
}

function computePadding(direction: "t" | "b" | "l" | "r", value: number) {
  let padding: any = {};
  switch (direction) {
    case "t":
      padding.paddingTop = value;
      break;
    case "b":
      padding.paddingBottom = value;
      break;
    case "l":
      padding.paddingLeft = value;
      break;
    case "r":
      padding.paddingRight = value;
      break;
    default:
      break;
  }
  return padding;
}

function computeFontSize(font_value: number) {
  return {
    fontSize: font_value,
  };
}

function computePercentMaxHeight(value: number) {
  return {
    maxHeight: screenHeight * (value / 100),
  };
}

function computeFlex(flex_value: number) {
  return {
    flex: flex_value,
  };
}

const styles = StyleSheet.create({
  mb50: {
    marginBottom: 50,
  },
  mb30: {
    marginBottom: 30,
  },
  mt10p: {
    marginTop: screenHeight * 0.1,
  },
  mt80p: {
    marginTop: screenHeight * 0.8,
  },
  mb80p: {
    marginBottom: screenHeight * 0.8,
  },
  centerFlex: {
    justifyContent: "center",
  },
  container_background: {
    // maxWidth: 327,
    // maxHeight: 517,
    backgroundColor: "#E5E5E5",
  },
  BigCategoryBlock: {
    backgroundColor: "#0C7952",
    width: 327,
    height: 57,
    borderRadius: 15,
  },
  SingleBtnBlock: {
    backgroundColor: "#0C7952",
    width: 327,
    height: 57,
    borderRadius: 15,
  },
  headerTitle: {
    fontFamily: "mt-bold",
    fontSize: 17,
  },
  title_36: {
    fontFamily: 'mt-normal',
    fontSize: 36
  },
  settingsHighlight: {
    width: 42,
    height: 42,
    backgroundColor: "#F7F7F7",
    borderRadius: 15,
  },
  settingsImg: {
    width: 20,
    height: 20,
  },
  font17SBold: {
    fontFamily: "mt-sbold",
    fontSize: 17,
    color: "#FFFFFF",
  },
  font17SBoldBlack: {
    fontFamily: "mt-sbold",
    fontSize: 17,
    color: "#000000",
  },
  font17MediumBlack: {
    fontFamily: "mt-medium",
    fontSize: 17,
    color: "#072D2B",
  },
  alignCenter: {
    textAlign: "center",
  },
  titleBlock: {
    maxHeight: 66,
    maxWidth: 327,
  },
  textBlock: {
    maxHeight: 66,
    maxWidth: 327,
  },

  title_27: {
    fontFamily: "mt-bold",
    color: "#000000",
    fontSize: 27,
    textAlign: "center",
  },
  fl1: {
    flex: 1,
  },
  text: {
    maxWidth: 309,
    textAlign: "center",
    fontFamily: "mt-normal",
    color: "#000000",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  ml8: {
    marginLeft: 8,
  },
  mt6: {
    marginTop: 6,
  },
  mt50: {
    marginTop: 50,
  },
  pageImg: {
    width: 240,
    height: 320,
  },
  rightArrow: {
    width: 7,
    height: 14,
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifySpaceEvenly: {
    justifyContent: "space-evenly",
    // justifyContent: "flex-start",
  },
  rotate_90: {
    transform: [{ rotate: '-90deg'}],
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    textAlignVertical: "center",
    fontFamily: "mt-sbold",
    color: "#FFFFFF",
    fontSize: 14,
  },
  bigCategoryText: {
    textAlignVertical: "center",
    fontFamily: "mt-sbold",
    color: "#FFFFFF",
    fontSize: 18,
  },
  discountText: {
    textAlignVertical: "center",
    fontFamily: "mt-sbold",
    color: "#FFFFFF",
    fontSize: 14,
  },
  greenBtn: {
    width: 327,
    minHeight: 57,
    borderRadius: 15,
  },
  BigCategoryBlockContainer: {
    backgroundColor: "#0C7952",
    width: 327,
    height: 110,
    borderRadius: 15,
  },
  marginCenterHorizontal: {
    marginLeft: "auto",
    marginRight: "auto",
  },

  categoryImg: {
    width: 128,
    height: 110,
  },
  amountBlock: {
    width: 90,
    height: 29,
  },
  cartPreview: {
    width: 53,
    height: 89,
  },
  logoBack: {
    borderRadius: 7,
  },
  block114: {
    height: 114,
    width: 114,
  },
  mr10: {
    marginRight: 5,
  },
  ml50: {
    marginLeft: 50,
  },
  ml15: {
    marginLeft: 15,
  },
  mt5: {
    marginTop: 5,
  },
  mt2: {
    marginTop: 2,
  },
  mt4: {
    marginTop: 4,
  },
  mt15: {
    marginTop: 15,
  },
  mt30: {
    marginTop: 30,
  },
  mt20: {
    marginTop: 20,
  },
  ml10: {
    marginLeft: 10,
  },
  ml5: {
    marginLeft: 5,
  },
  cartBlock: {
    backgroundColor: "#F7F7F7",
    borderRadius: 15,
    shadowColor: "rgb(206, 206, 206)",
    shadowOffset: { width: 0, height: 80 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 2,
    minHeight: 159,
    maxWidth: 327,
  },
  rateText: {},
  rateIcon: {
    width: 15,
    height: 15,
  },
  discountBlock: {
    width: 48,
    height: 48,
    position: "absolute",
    zIndex: 2,
    borderRadius: 15,
  },
  verifyIcon: {},
  messageIco: {
    width: 40,
    height: 40,
  },
  border15: {
    borderRadius: 15,
  },
  posAbsolute: {
    position: "absolute",
  },
  greenBtnIco: {
    width: 20,
    height: 20,
  },
  fw500: {
    fontWeight: "500",
  },
  smallPureText: {
    fontFamily: "mt-normal",
    color: "#000000",
    fontSize: 13,
  },
  title_18: {
    fontFamily: "mt-sbold",
    color: "#000000",
    fontSize: 18,
  },
  title_18_medium: {
    fontFamily: "mt-medium",
    color: "#000000",
    fontSize: 18,
  },
  title_16: {
    fontFamily: "mt-sbold",
    color: "#000000",
    fontSize: 16,
  },
  rateBlock : {
    maxHeight: 200,
    maxWidth: 327,
  },
  logo: {
    width: 79,
    height: 79,
  },
  orderImage: {
    width: 70,
    height: 96,
  },
  logo40x40: {
    width: 40,
    height: 40,
  },
  logo33x33: {
    width: 33,
    height: 33,
  },
  logo58x58: {
    width: 58,
    height: 58,
  },
  cirle_logo95x95: {
    width: 95,
    height: 95,
    borderRadius: 45,
  },
  cirle_logo53x53: {
    width: 53,
    height: 53,
    // borderRadius: 15,
  },
  white30font:{
    fontSize: 30,
    fontFamily: 'mt-bold',
    color: '#FFFFFF'
  },
  white12font:{
    fontSize: 12,
    fontFamily: 'mt-normal',
    color: '#FFFFFF'
  },
  sellerBlock: {
    backgroundColor: "#F7F7F7",
    borderRadius: 15,
    shadowColor: "rgb(206, 206, 206)",
    shadowOffset: { width: 0, height: 80 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 2,
    height: 103,
    width: 327,
  },
  sellerBlockSmall: {
    height: 60,
    width: 278,
  },
  smallBoldText: {

    fontFamily: 'mt-normal',
    color: "#000000",
    fontSize: 14,
  },
  title_20: {
    fontStyle: "normal",
    fontWeight: "600",
    // fontFamily: 'Montserrat',
    color: "#000000",
    fontSize: 20,
  },
  totalCostBlock: {
    minWidth: 75,
    minHeight: 29,
  },
  flEnd: {
    alignItems: "flex-end",
  },
  blackSubtitle: {
    fontFamily: "mt-sbold",
    color: "#000000",
    fontSize: 18,
  },
  ico15x15:{
    width:15,
    height:15,
  },
  ml20: {
    marginLeft: 20,
  },
  container: {
    backgroundColor: "#EFEEF2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 50
  },
  headerText: {
    fontFamily: "mt-bold",
    color: "#000000",
    fontSize: 24,
    maxWidth: screenWidth - 100,
    paddingTop: 50,
    paddingLeft: 35,
  },
  amountText: {
    fontFamily: "mt-sbold",
    color: "#000000",
    fontSize: 24,
  },
  header: {
    flex: 2,
    flexDirection: "row",
  },
  categoryPreBlock: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    color: "#424242",
    width: 250,
    height: 42,
    backgroundColor: "#F7F7F7",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  nameInput: {
    // color: "#424242",
    width: 271,
    height: 42,
    backgroundColor: "#F7F7F7",
    borderRadius: 15,
    borderColor:'#289A82'
  },
  borderStyle: {
    borderRadius: 15,
    borderColor:'#289A82',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  borderInputStyle: {
    borderRadius: 15,
    borderColor:'#289A82',
    borderWidth: 1,
    width: screenWidth * 0.805,
    borderStyle: 'solid',
  },
  greenText: {
    fontSize: 14,
    fontFamily: "mt-medium",
    color: "#22846F",
  },
  mediumText: {
    fontSize: 14,
    fontFamily: "mt-medium",
  },
  normal13Text: {
    fontSize: 13,
    fontFamily: "mt-normal",
  },
  whiteBar: {
    width: 253,
    height: 14,
    backgroundColor: '#F7F7F7',
    borderRadius: 10
  },
  bar: {
    height: 14,
    backgroundColor: '#26976E',
    borderRadius: 10
  },
  orderBlock: {
    backgroundColor: '#F7F7F7',
    width: 330,
    height: 80,
    borderRadius: 15,
  },
  bigOrderBlock: {
    backgroundColor: '#F7F7F7',
    width: 330,
    height: 170,
    borderRadius: 15,
  },
  greenPopBtn: {
    width: 327,
    height: 72,
    borderRadius: 15,
    zIndex: 5,
    position: "absolute",
  },
  topIcon: {
    marginTop: 60,
    // marginLeft: 13,
    marginRight: 16,
    height: 26,
    width: 26,
  },
  fullPriceText: {
    color: "rgba(0, 0, 0, 0.4)",
    fontFamily: "mt-normal",
  },
  strokeThroughText: {
    textDecorationLine: "line-through",
  },
  slider: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth - 0.2 * screenWidth,
    alignItems: "center",
    borderRadius: 50,
    maxHeight: 140,
  },
  productSlider: {
    flex: 1,
    justifyContent: "center",
    width: 226,
    alignItems: "center",
    borderRadius: 50,
    maxHeight: 308,
  },
  category: {
    marginTop: 10,
    flex: 2,
  },

  justifyLeft: {
    justifyContent: "flex-start",
  },
  textLeft: {
    textAlign: "left",
  },
  body: {
    flex: 5,
  },
  sellers: {
    flex: 4,
  },
  sliderImage: {
    width: 327,
    height: 140,
    borderRadius: 15,
  },
  slide1: {
    borderRadius: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8",
  },
  slide2: {
    flex: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f",
  },
  slide3: {
    flex: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297",
  },
  text_48: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold",
  },
  categoryBlock: {
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 7,
    maxWidth: 155,
    height: 52,
  },
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
},
  categoryTitle: {
    marginTop: 9,
    fontFamily: "mt-medium",
    maxWidth: 80,
    fontSize: 12,
  },
  font12Medium: {
    fontFamily: "mt-medium",
    fontSize: 12,
  },
  font12Normal: {
    fontFamily: "mt-normal",
    fontSize: 12,
  },
  smallWhiteFont: {
    fontFamily: 'mt-sbold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  categoryImgBack: {
    marginTop: 7,
    backgroundColor: "#EEEDF1",
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 10,
    width: 40,
    height: 40,
  },
  categoryImage: {
    marginTop: 6,
    marginLeft: 6,
  },
  mt25: {
    marginTop: 25,
  },
  // mt6: {
  //     marginTop: 6
  // },
  mt10: {
    marginTop: 10,
  },
  pr8: {
    paddingRight: 8,
  },
  smallText: {
    fontFamily: "mt-normal",
    color: "#000000",
    fontSize: 14,
  },
  descriptionBlock:{
    maxWidth: screenWidth - screenWidth * 0.3
  },
  smallSBoldText: {
    fontFamily: "mt-sbold",
    color: "#000000",
    fontSize: 14,
    lineHeight: 20,
  },
  filterCategory: {
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    padding: 6,
  },
  icon16: {
    height: 16,
    width: 16,
  },
  icon016: {
    width: 16,
  },
  icon19x23: {
    height: 23,
    width: 19,
  },
  gradient: {
    borderRadius: 15,
    padding: 6
  },
  applyFilterBlock: {
    width: screenWidth,
    height: 100,
    backgroundColor:'#F7F7F7',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  productItemBlock: {
    width: 156,
    height: 286,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 15,
    marginLeft: 20,
  },
  productItemMainBlock: {
    width: 188,
    height: 306,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 15,
    marginLeft: 20,
  },
  viewList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cap: {
    maxWidth: '40%'
  },
  productImage: {
    height: 147,
    width: 108,
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  headerLinkTitleBlock: {
    position: "absolute",
    zIndex: 0,
    alignItems: "center",
    width: screenWidth,
  },
  displayNone: {
    display: "none"
  },
  filterFullScreenBlock:{
    height: '100%',
    zIndex: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#EFEEF2',
  },
  regular600: {
    fontFamily: 'mt-bold',
    fontSize: 16,
  },
  s_bold600: {
    fontFamily: 'mt-sbold',
    fontSize: 16,
  },
  imageStyle: {
    // height: 25,
    // width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    
  },
  searchImgBack: {
    backgroundColor: "#F7F7F7",
    height: 42,
    width: 42,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  commentInputBlock: {
    width: '100%',
    height: 90,
    backgroundColor: "#F7F7F7",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  smallProductBLock : {
    width: screenWidth * 0.9,
    height: 80,
    backgroundColor: "#F7F7F7",
  }
});

export {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
  computePaddingScreenPercent,
  computePercentMaxHeight,
};
