/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import NavigationService from './src/libraries/services/NavigationService';
import {AppNavigatorContainer} from "./src/app/navigators/AppNavigator";

type Props = {};
export default class App extends  React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }
  // state = {
  //   tabBarVisible: true
  // };
  componentDidMount(): void {
    setTimeout( ()=> {
      NavigationService.navigate('UserNavigator');
    }, 2000);
  }

  renderNavigator = (): React.Element<any> => {
    const navProps: Object = {
      screenProps: {
        translate: this.translate,
        translateKey: this.translateKey,
        user: this.props.user,
        userLogin: this.userLogin,
        userLogout: this.userLogout,
        showError: this.showError,
      }
    };

    return <AppNavigatorContainer {...navProps}/>;
  };

  render() {
  return (
      <View style={styles.container}>

        <StatusBar
            backgroundColor="rgba(0, 0, 0, 0.3)"
            translucent={true}/>

        {this.renderNavigator()}

        {/*<DropdownAlert*/}
        {/*    translucent={true}*/}
        {/*    inactiveStatusBarStyle="light-content"*/}
        {/*    inactiveStatusBarBackgroundColor="rgba(0, 0, 0, 0.3)"*/}
        {/*    ref={this.getDropdownRef}*/}
        {/*    closeInterval={2000}*/}
        {/*    zIndex={99}/>*/}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
