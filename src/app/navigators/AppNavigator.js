import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";
import LoadingScreen from "../../screens/LoadingScreen";

const AppNavigator = createSwitchNavigator({
    LoadingScreen: {
        screen: LoadingScreen
    },
    AuthNavigator: {
        screen: AuthNavigator
    },
    UserNavigator: {
        screen: UserNavigator
    }
}, {
    initialRouteName: 'LoadingScreen'
});

export const AppNavigatorContainer = createAppContainer(AppNavigator);
