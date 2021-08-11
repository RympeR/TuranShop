import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./router";
import { Provider } from "react-redux";
import configureStore from './src/redux';

const fonts = () =>
  Font.loadAsync({
    "mt-sbold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "mt-normal": require("./assets/fonts/Montserrat-Regular.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "mt-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });
const store = configureStore();
export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}
