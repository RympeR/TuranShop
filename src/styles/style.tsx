import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

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
  titleBlock: {
    maxHeight: 66,
    maxWidth: 327,
  },
  textBlock: {
    maxHeight: 40,
    maxWidth: 309,
  },
  title_27: {
    fontStyle: "normal",
    fontWeight: "700",
    // fontFamily: 'Montserrat',
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
    fontStyle: "normal",
    fontWeight: "400",
    // fontFamily: 'Montserrat',
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
    width: 316,
    height: 235,
  },
  rightArrow: {
    width: 7,
    height: 14,
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifySpaceEvenly: {
    // justifyContent: 'space-evenly',
    justifyContent: "flex-start",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    textAlignVertical: "center",
    fontFamily:'mt-sbold',
    color: "#FFFFFF",
    fontSize: 14,
  },
  bigCategoryText: {
    textAlignVertical: "center",
    fontFamily:'mt-sbold',
    color: "#FFFFFF",
    fontSize: 18,
  },
  discountText: {
    textAlignVertical: "center",
    fontFamily:'mt-sbold',
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
  discountBlock:{
    width: 48,
    height: 48,
    position: "absolute",
    zIndex: 2,
    borderRadius: 15
  },
  verifyIcon: {},
  messageIco: {
    width: 40,
    height: 40,
  },
  greenBtnIco:{
    width: 20,
    height: 20,
  },
  fw500: {
    fontWeight: "500",
  },
  smallPureText: {
    fontFamily: 'mt-normal',
    color: "#000000",
    fontSize: 13,
  },
  title_18: {
    fontFamily: 'mt-sbold',
    color: "#000000",
    fontSize: 18,
  },
  title_16: {
    fontFamily: 'mt-sbold',
    color: "#000000",
    fontSize: 16,
  },
  logo: {
    width: 79,
    height: 79,
  },
  sellerBlock: {
    backgroundColor: "#F7F7F7",
    borderRadius: 15,
    shadowColor: "rgb(206, 206, 206)",
    shadowOffset: { width: 0, height: 80 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 2,
    minHeight: 103,
    minWidth: 327,
  },
  smallBoldText: {
    fontStyle: "normal",

    // fontFamily: 'Montserrat',
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
    fontFamily: 'mt-sbold',
    color: "#000000",
    fontSize: 18,
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
    fontFamily: 'mt-bold',
    color: "#000000",
    fontSize: 24,
    maxWidth: screenWidth - 100,
    paddingTop: 50,
    paddingLeft: 35,
  },
  amountText: {
    fontStyle: "normal",
    fontWeight: "600",
    color: "#000000",
    fontSize: 24,
  },
  header: {
    flex: 2,
    flexDirection: "row",
  },
  categoryPreBlock: {
    flex:5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greenText:{
    fontSize: 14,
    fontFamily: 'mt-medium',
    color: '#22846F'
  },
  mediumText:{
    fontSize: 14,
    fontFamily: 'mt-medium',
  },
  normal13Text:{
    fontSize: 13,
    fontFamily: 'mt-normal',
  },
  topIcon: {
    marginTop: 60,
    // marginLeft: 13,
    marginRight: 16,
    height: 26,
    width: 26,
  },
  fullPriceText:{
    color: 'rgba(0, 0, 0, 0.4)',
    fontFamily: 'mt-normal',
  },
  strokeThroughText:{
    textDecorationLine: 'line-through',
  },
  slider: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth - 0.2 * screenWidth,
    alignItems: "center",
    borderRadius: 50,
    maxHeight: 140
  },
  category: {
    marginTop: 10,
    flex: 2,
  },

  justifyLeft:{
    justifyContent: 'flex-start'
  },
  textLeft:{
    textAlign: 'left'
  },
  body: {
    flex: 5,
  },
  sellers: {
    flex: 4,
  },
  sliderImage:{
    width: 327,
    height: 140,
    borderRadius: 15
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
    width: 122,
    height: 52,
  },
  categoryTitle: {
    marginTop: 9,
    fontFamily: 'mt-medium',
    maxWidth: 80,
    fontSize: 12,
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
    fontFamily: 'mt-normal',
    color: "#000000",
    fontSize: 14,
  },
  smallSBoldText: {
    fontFamily: 'mt-sbold',
    color: "#000000",
    fontSize: 14,
    lineHeight: 20
  },
  filterCategory: {},
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
    minWidth: 25,
    height: 25,
    borderRadius: 15,
  },
  productItemBlock:{
    width: 188,
    height: 306,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
    marginLeft: 20
  },
  productImage:{
    height: 171,
    width: 125
  },
});

export {
  styles,
  computeMargin,
  computePadding,
  computeMarginScreenPercent,
  computePaddingScreenPercent,
  computePercentMaxHeight,
};
