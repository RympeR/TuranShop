import React from "react";
import { StyleSheet, Dimensions } from "react-native";


const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    mb50: {
        marginBottom: 50
    },
    mb30: {
        marginBottom: 30
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
    container: {
        // maxWidth: 327,
        // maxHeight: 517,
        backgroundColor: '#E5E5E5'
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
    title: {
        fontStyle: "normal",
        fontWeight: "700",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 27,
        textAlign: 'center'
    },
    fl1: {
        flex: 1
    },
    text: {
        maxWidth: 309,
        textAlign: 'center',
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
        marginBottom: 10
    },
    ml8: {
        marginLeft: 8
    },
    mt10: {
        marginTop: 6
    },
    mt50: {
        marginTop: 50
    },
    pageImg: {
        width: 316,
        height: 235,
    },
    rightArrow: {
        width: 7,
        height: 14
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifySpaceEvenly: {
        // justifyContent: 'space-evenly',
        justifyContent: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {

        textAlignVertical: 'center',
        fontStyle: "normal",
        fontWeight: "600",
        // fontFamily: 'Montserrat',
        color: "#FFFFFF",
        fontSize: 18,
    },
    BigCategoryBlock: {
        backgroundColor: "#0C7952",
        width: 327,
        height: 110,
        borderRadius: 15,
    },
    row: {
        flexDirection: "row",
    },
    categoryImg: {
        width: 128,
        height: 110,

    },
    btnText: {

        textAlignVertical: 'center',
        fontStyle: "normal",
        fontWeight: "600",
        // fontFamily: 'Montserrat',
        color: "#FFFFFF",
        fontSize: 18,
    },
    cartPreview: {
        width: 53,
        height: 89
    },
    logoBack: {
        borderRadius: 7,
    },
    ml50: {
        marginLeft: 50
    },
    mt5: {
        marginTop: 5
    },
    mt4: {
        marginTop: 4
    },
    mt15: {
        marginTop: 15
    },
    mt30: {
        marginTop: 30
    },
    ml10: {
        marginLeft: 10,
    },
    ml5: {
        marginLeft: 5,
    },
    cartBlock: {
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        shadowColor: "rgb(206, 206, 206)",
        shadowOffset: { width: 0, height: 80 },
        shadowOpacity: 0.07,
        shadowRadius: 2,
        elevation: 2,
        maxHeight: 159,
        maxWidth: 327,
    },
    rateText: {},
    rateIcon: {
        width: 15,
        height: 15,
    },
    verifyIcon: {},
    messageIco: {
        width: 40,
        height: 40
    },
    fw500: {
        fontWeight: "500",
    },
    smallBoldText: {
        fontStyle: "normal",

        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 14,
    },
    smallPureText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 13,
    },
    title: {
        fontStyle: "normal",
        fontWeight: "600",
        fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 18,
    },
    logo: {
        width: 79,
        height: 79
    },
    logoBack: {
        borderRadius: 7,
    },
    mt10: {
        marginTop: 10
    },
    ml50: {
        marginLeft: 50
    },
    mb30: {
        marginBottom: 30
    },
    mt5: {
        marginTop: 5
    },
    mt4: {
        marginTop: 4
    },
    mt15: {
        marginTop: 15
    },
    mt30: {
        marginTop: 30
    },
    ml10: {
        marginLeft: 10,
    },
    ml5: {
        marginLeft: 5,
    },
    row: {
        flexDirection: "row",
    },
    sellerBlock: {
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        shadowColor: "rgb(206, 206, 206)",
        shadowOffset: { width: 0, height: 80 },
        shadowOpacity: 0.07,
        shadowRadius: 2,
        elevation: 2,
        minHeight: 103,
        minWidth: 327,
    },
    rateText: {},
    rateIcon: {
        width: 15,
        height: 15,
    },
    verifyIcon: {},
    messageIco: {
        width: 40,
        height: 40
    },
    smallBoldText: {
        fontStyle: "normal",

        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 14,
    },
    smallPureText: {
        fontStyle: "normal",
        fontWeight: "normal",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 13,
    },
    title: {
        fontStyle: "normal",
        fontWeight: "600",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 20,
    },
    blackSubtitle: {
        fontStyle: "normal",
        fontWeight: "600",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 18,
    },
    ml20: {
        marginLeft: 20,
    },
    smallText: {
        fontStyle: "normal",
        fontWeight: "600",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 14,
    },
    container: {
        backgroundColor: "#EFEEF2",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontStyle: "normal",
        fontWeight: "bold",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 24,
        maxWidth: screenWidth - 125,
        paddingTop: 50,
        paddingLeft: 35,
    },
    header: {
        flex: 2,
        flexDirection: "row",
    },
    categoryPreBlock: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topIcon: {
        marginTop: 60,
        marginLeft: 13,
        marginRight: 13,
        height: 26,
        width: 26,
    },
    slider: {
        flex: 2,
        justifyContent: "center",
        width: screenWidth - 0.2 * screenWidth,
        alignItems: "center",
        borderRadius: 50,
    },
    category: {
        marginTop: 10,
        flex: 2,
    },

    body: {
        flex: 5,
    },
    sellers: {
        flex: 4,
    },
    slide1: {
        borderRadius: 15,
        flex: 2,
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
    text: {
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
        // fontFamily: Montserrat;
        maxWidth: 80,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
    },

    categoryImgBack: {
        marginTop: 7,
        backgroundColor: '#EEEDF1',
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
    mt2: {
        marginTop: 2
    },
    pr8: {
        paddingRight: 8
    },
    smallText: {
        fontStyle: "normal",
        fontWeight: "600",
        // fontFamily: 'Montserrat',
        color: "#000000",
        fontSize: 14,
    },
    filterCategory: {

    },
    gradient: {
        minWidth: 25,
        height: 25,
        borderRadius: 15,
    }
});