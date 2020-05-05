
import * as React from 'react';
import {Text} from 'react-native';
import { createStackNavigator,createBottomTabNavigator, BottomTabBar } from 'react-navigation';
import StackOptions from "./StackOptions";
import Icon from "../../components/ui/Icon";
import HomeScreen from "../../screens/HomeScreen";
import DietsScreen from "../../screens/DietsScreen";
import InformationScreen from "../../screens/InformationScreen";
import ChallengesScreen from "../../screens/ChallengesScreen";
import AccountScreen from "../../screens/AccountScreen";


function getRouteDetails(props: Object): Object {
    const { routeName } = props.navigation.state;
    let iconName: ?string;
    let title: ?string;

    switch (routeName) {
        case 'HomeStack':
            iconName = 'home';
            title = 'Retete';
            break;
        case 'DietsStack':
            iconName = 'crown';
            title = 'Diete';
            break;
        case 'InformationStack':
            iconName = 'transactions';
            title = 'Informatii';
            break;
        case 'ChallengesStack':
            iconName = 'saving';
            title = 'Provocari';
            break;
        case 'AccountStack':
            iconName = 'user';
            title = 'Contul meu';
            break;
        default:
            iconName = null;
            title = null;
    }

    return { iconName, title };
}

const UserNavigator = createBottomTabNavigator ({
    HomeStack: {
        screen: createStackNavigator({
            HomeScreen: {
                screen: HomeScreen
            },
        }, {...StackOptions , initialRouteName: 'HomeScreen'}),
    },
    DietsStack: {
        screen: createStackNavigator({
            DietsScreen: {
                screen: DietsScreen
            },
        },{...StackOptions, initialRouteName: 'DietsScreen'}),
    },
    InformationStack: {
        screen: createStackNavigator({
            InformationScreen: {
                screen: InformationScreen
            },
        },{...StackOptions, initialRouteName: 'InformationScreen'}),
    },
    ChallengesStack: {
        screen: createStackNavigator({
            ChallengesScreen: {
                screen:ChallengesScreen
            },
        },{...StackOptions, initialRouteName: 'ChallengesScreen'}),
    },
    AccountStack: {
        screen: createStackNavigator({
            AccountScreen: {
                screen:AccountScreen
            },
        },{...StackOptions, initialRouteName: 'AccountScreen'}),
    },
    // LogoutScreen: {
    //     screen: LogoutScreen
    // },
},{
    defaultNavigationOptions: (props) => {
        return {
            tabBarIcon: ({focused}) => {
                if (props.screenProps.tabBarVisible == false) {
                    return null;
                }
                const {iconName} = getRouteDetails(props);
                return (
                        <Icon
                            name={iconName}
                            size={iconName === 'home' ?
                                20
                                :
                                19}
                            color={focused ? "#1373E5" : "#909AA3"}
                            style={focused ? "#1373E5" : "#909AA3"}
                        />
                );
            },
            tabBarLabel: ({focused}) => {
                if (props.screenProps.tabBarVisible == false) {
                    return null;
                }
                const {title} = getRouteDetails(props);

                return (
                    <Text style={{fontFamily: 'Roboto', fontSize: 9, color: focused ? "#1373E5" : "#909AA3", textAlign: 'center', top: -10}}>
                        {title}
                    </Text>
                );
            },
        };
    },
    tabBarOptions: {
        activeBackgroundColor: 'transparent',
        inactiveBackgroundColor: 'transparent',
        style: {backgroundColor: 'transparent', elevation: 10},
        labelStyle: {backgroundColor: 'transparent'},
        tabStyle: {backgroundColor: 'transparent'}
    },
    tabBarComponent: (props) => {
        if (props.screenProps.tabBarVisible == false) {
            return null
        }
        return (
            <BottomTabBar {...props} style={{
                backgroundColor: '#FFFFFF',
                height: 70,
            }}/>)

    }
});



export default UserNavigator;

