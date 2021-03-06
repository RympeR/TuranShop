import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import {
  styles,
  computeMargin,
  computeMarginScreenPercent,
} from "../styles/style";
import ToggleSwitch from "toggle-switch-react-native";

type rowLinkTextType = {
  text: string;
  navigation: any;
  location: string;
  swiper: boolean;
};

const RowLink = (props: rowLinkTextType) => {
  const cm = computeMargin;
  const cmp = computeMarginScreenPercent;
  const screenWidth = Dimensions.get("window").width;
  return (
    <View>
      <View style={[styles.row, cm("b", 15)]}>
        <TouchableHighlight
        underlayColor={"#EFEEF2"}
          onPress={() => {
            props.navigation.navigate(props.location);
          }}
        >
          <Text style={[styles.font17SBoldBlack, cm("t", -5)]}>
            {props.text}
          </Text>
        </TouchableHighlight>
        {props.swiper ? (
          <ToggleSwitch
            isOn={false}
            onColor="green"
            offColor="gray"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            style={[cmp("l", 80), styles.posAbsolute]}
            onToggle={(isOn) => console.log("changed to : ", isOn)}
          />
        ) : (
          <TouchableHighlight
            style={[cmp("l", 80), st .posAbsolute]}
            underlayColor={"#EFEEF2"}
            onPress={() => {
              props.navigation.navigate(props.location);
            }}
          >
            <Image source={require("../images/shop/rightBlackArrow.png")} />
          </TouchableHighlight>
        )}
      </View>
      <View
        style={[
          {
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: screenWidth * 0.85,
            opacity: 0.1,
          },
          cm("b", 20),
        ]}
      />
    </View>
  );
};

export { RowLink };
