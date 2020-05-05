/* @flow */

import * as React from 'react';
import { ActivityIndicator, Animated, Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import type { ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

type Props = {
    disabled: boolean,
    rippleColor: string,
    onPress: any,
    onLongPress: any,
    onPressIn?: Function,
    onPressOut?: Function,
    children: any,
    padding: number,
    paddingH: ?number,
    borderLess: boolean,
    style: ViewStyleProp,
    loading: boolean,
    useForeground: boolean,
    scale: number,
    scaleDuration: number
};

class Touch extends React.PureComponent<Props> {
    static defaultProps = {
        disabled: false,
        rippleColor: '#aaa',
        onPress: () => {
        },
        onLongPress: null,
        padding: 0,
        paddingH: null,
        borderLess: false,
        style: {},
        loading: false,
        useForeground: false,
        scale: 1,
        scaleDuration: 100
    };

    scaleAnimationValue: Animated.Value = new Animated.Value(1);

    constructor(props: Props) {
        super(props);
        this.scaleAnimationValue = new Animated.Value(1);
    }

    onPressIn = (): void => {
        if (this.props.onPressIn) {
            this.props.onPressIn();
        }

        if (!this.props.scale || this.props.scale === 1) {
            return;
        }

        Animated.timing(this.scaleAnimationValue, {
            toValue: this.props.scale,
            duration: this.props.scaleDuration
        }).start();
    };

    onPressOut = (): void => {
        if (this.props.onPressOut) {
            this.props.onPressOut();
        }

        if (!this.props.scale || this.props.scale === 1) {
            return;
        }

        Animated.timing(this.scaleAnimationValue, {
            toValue: 1,
            duration: this.props.scaleDuration
        }).start();
    };

    onPress = (): void => {
        setTimeout(() => {
            this.props.onPress();
        }, 0);
    };

    onLongPress = (): void => {
        setTimeout(() => {
            this.props.onLongPress();
        }, 0);
    };

    render(): React.Element<any> {
        const { disabled, rippleColor, children, padding, paddingH, borderLess, style, loading, useForeground } = this.props;
        let wrapperStyle: any = { padding: padding };

        if (typeof paddingH !== 'undefined' && !isNaN(paddingH)) {
            wrapperStyle['paddingHorizontal'] = paddingH;
        }

        wrapperStyle = [wrapperStyle];
        if (style) {
            wrapperStyle.push(style);
        }

        if (this.scaleAnimationValue) {
            wrapperStyle.push({
                transform: [
                    { scale: this.scaleAnimationValue }
                ]
            });
        }

        if (Platform.OS === 'ios') {
            return (
                <TouchableOpacity
                    onPress={this.onPress}
                    onLongPress={this.props.onLongPress ? this.onLongPress : null}
                    disabled={disabled}
                    style={wrapperStyle}>
                    {!loading ? children : (<ActivityIndicator size={'small'} color={rippleColor}/>)}
                </TouchableOpacity>
            );
        }

        if (Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(rippleColor, borderLess)}
                    disabled={disabled}
                    useForeground={useForeground}
                    onPress={this.onPress}
                    onLongPress={this.props.onLongPress ? this.onLongPress : null}
                    onPressIn={this.onPressIn}
                    onPressOut={this.onPressOut}>
                    <Animated.View style={wrapperStyle}>
                        {!loading ? children : (<ActivityIndicator size={22} color={rippleColor}/>)}
                    </Animated.View>
                </TouchableNativeFeedback>
            );
        }

        return <View/>;
    }
}

export default Touch;
