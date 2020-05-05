import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import StackOptions from "./StackOptions";
import HomeScreen from "../../screens/HomeScreen";

const AuthNavigator = createStackNavigator({
    HomeScreens: {
        screen: HomeScreen
    }

}, {
    ...StackOptions,
    initialRouteName: 'HomeScreens'
});

export default AuthNavigator;
