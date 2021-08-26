import React from "react";
import { SafeAreaView } from "react-native";
import { HeaderBack } from "../../../components/HeaderBack";
import { SingleImagePage } from "../../../components/SingleImagePage";

const ShopRegistryWelcome = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <HeaderBack navigation={navigation} title={""} move_location={"home"} />
      <SingleImagePage
        title={"Давайте начнем"}
        text={
          "Чтобы начать продавать товары зарегистрируйте личный магазин в системе."
        }
        btntext={"Регистрация"}
        img={require("../../../images/shop/shopRegistry.png")}
        move_location={"shop-registry-first-step"}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export { ShopRegistryWelcome };
