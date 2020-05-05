import React, {Component} from 'react';
import {ImageBackground ,Animated, StyleSheet, Easing, View, Dimensions} from 'react-native';

let dimension = Dimensions.get('window');
let width = dimension.width;
let height = dimension.height;

export default class LoadingScreen extends Component<Props> {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
    }

    componentDidMount() {
        this.StartImageRotateFunction();
    }

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
        }).start(() => this.StartImageRotateFunction());
    }


    render() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        return (
            <ImageBackground
                source={require('../assets/img/backLoading2.jpg')}
                style={styles.loadingContainer}>
                <View style={styles.loadingBack}>
                    <Animated.Image
                        source={require('../assets/img/loading-blue-green.png')}
                        resizeMode={'contain'}
                        style={[styles.loading, {transform: [{rotate: RotateData}]}]}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        height: '100%',
        justifyContent: 'flex-start'
    },
    logo: {
        width: width,
        height: height/2,
        // flex: 0.5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    loading: {
        width: 174,
        height: 74,
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 80
    },
    loadingBack : {
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
