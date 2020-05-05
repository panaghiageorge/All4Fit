import * as React from 'react';
import { Platform } from 'react-native';
import Icon from './Icon';
import Touch from '../core/Touch';
import { withNavigation } from 'react-navigation';
import {Image} from "react-native-animatable";

type Props = {
    navigation: any,
    color: string,
    onPress?: () => void,
};

class BackButton extends React.PureComponent<Props> {
    static defaultProps = {
        color: '#000'
    };


    render() {
        return (
            <Touch
                onPress={() => {
                    if (this.props.onPress) {
                        this.props.onPress();
                    }

                    this.props.navigation.goBack();
                }}
                borderLess={true}
                style={{
                    backgroundColor: 'transparent',
                    ...Platform.select({
                        ios: {
                            padding: 8,
                            paddingLeft: 18
                        },
                        android: {
                            padding: 6,
                            marginLeft: 32,
                        }
                    })
                }}>
                <Image source={require('../../assets/img/back.png')}
                style={{width: 20, height: 20}}/>
            </Touch>
        );
    }
}

export default withNavigation(BackButton);
