import React from 'react';
import { MainPageScreen } from './src/screens/shop/MainPage';
import { Cart } from './src/screens/shop/Cart';
import { CategoriesScreen } from "./src/screens/shop/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={MainPageScreen}
                options={{ headerShown: false, title: 'home'}}
            />
            <Stack.Screen
                name="categories"
                component={CategoriesScreen}
                options={{ headerShown: false, title: 'Категории'}}
            />
            <Stack.Screen
                name="cart"
                component={Cart}
                options={{ headerShown: false, title: 'Корзина'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}