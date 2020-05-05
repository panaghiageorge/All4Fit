import * as React from 'react';
import {Dimensions, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import type { NavigationProps } from "../../types/NavigationPropsInterface";
import BackButton from "../../components/ui/BackButton";
import Theme from "../../libraries/helpers/Theme";

let dimension = Dimensions.get('window');
let height = dimension.height;
let width = dimension.width;

const StackOptions: Object = {
    defaultNavigationOptions: (props: NavigationProps): Object => ({
        title: '',
        headerStyle: {
            ...Platform.select({
                android: {
                    backgroundColor: '#fff',
                    paddingTop: StatusBar.currentHeight,
                    height: 60 + StatusBar.currentHeight
                }
            })
        },
        headerLeft: (<BackButton style={styles.arrowBack} />),
        headerRight: (
            <View style={styles.right}>
                    <Image source={require('../../assets/img/Logo2.png')}
                           style={styles.logoHeader}
                           resizeMode={'contain'}
                    />
            </View>
        ),
        headerTitle: (
            <View style={styles.container}>
                <View style = {{flex: 1,resizeMode: 'contain', alignItems: "center",position:'absolute', left: 0, right: 0, marginRight: 0, marginLeft: 0, zIndex: -2}}>
                    <Text style={styles.title}>All4Fit</Text>
                </View>
            </View>
        )
    }),
    headerLayoutPreset: 'center',
    headerMode: 'float',
};

export default StackOptions;

const styles = StyleSheet.create({
    logoHeader: {
        width: 57,
        alignSelf: 'center',
        height: 40,
        marginRight: 20,
        justifyContent: 'center'
    },
    right: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        position: 'relative'
    },
    arrowBack: {
        width: 12,
        height: 11,
        alignSelf: 'flex-start',
        flex: 1,
        marginLeft: 32,
        position: 'absolute',
        zIndex: 111,
    },
    title: {
        color: Theme.colors.blackText,
        fontSize: 18
    }
});
