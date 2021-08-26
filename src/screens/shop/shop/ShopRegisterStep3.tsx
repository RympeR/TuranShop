import React from "react";
import { SafeAreaView } from "react-native";
import { HeaderBack } from "../../../components/HeaderBack";
import { SingleImagePage } from "../../../components/SingleImagePage";

const ShopRegistryFinish = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <SingleImagePage
        title={"Ваш магазин зарегестрирован"}
        text={
          'Добавляйте категории, товары, описание для успешного продвижения магазина. Успехов в продажах!'
        }
        btntext={"На главную"}
        img={require("../../../images/shop/finishShopRegistry.png")}
        move_location={"home"}
        navigation={navigation}
        width={316}
        height={290}
        params={{has_shop:true}}
      />
    </SafeAreaView>
  );
};

export { ShopRegistryFinish };
