import React, {Component} from 'react';
import { Platform, Text, View } from 'react-native';

export default class InformationScreen extends Component<Props> {
    render() {
        return (
            <View >
                <Text style={{marginTop: 50, color: '#000'}}>InformationScreen</Text>
            </View>
        )
    }
}