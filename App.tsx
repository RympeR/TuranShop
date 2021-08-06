import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainPageScreen } from "./src/screens/shop/MainPage";
import { CategoriesScreen } from "./src/screens/shop/Categories";
import { SingleImagePage } from "./src/components/SingleImagePage";
import { Cart } from "./src/screens/shop/Cart";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "./src/styles/style";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();
const fonts = () => Font.loadAsync({
  'mt-sbold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mt-normal': require('./assets/fonts/Montserrat-Regular.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
  'mt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font){
      return (
        <CategoriesScreen />
        // <NavigationContainer>
        //   <Stack.Navigator
        //     screenOptions={{
        //       headerShown: false,
        //     }}
        //     initialRouteName="Home"
        //   >
        //     <Stack.Screen
        //       name="Home"
        //       component={MainPageScreen}
        //       options={{ title: "Home" }}
        //     />
        //     <Stack.Screen name="Cart" component={Cart} />
        //     <Stack.Screen name="EmptyCart" component={SingleImagePage} />
        //   </Stack.Navigator>
        // </NavigationContainer>
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


