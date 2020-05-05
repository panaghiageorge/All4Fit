import React, {Component} from 'react';
import {StyleSheet, Dimensions, Text} from 'react-native';
import {Image} from "react-native-animatable";
import Touch from "../core/Touch";
import Theme from "../../libraries/helpers/Theme";

let dimension = Dimensions.get('window');
let width = dimension.width;
let height = dimension.height;

export default class CategoriesCard extends Component<Props> {
    render() {
        return (
            <Touch style={styles.categoryCard}>
                <Image source={this.props.image}
                       style={styles.category}/>
                <Text style={styles.categoryName}>{this.props.name}</Text>
                <Text style={styles.categoryNumber}>{this.props.number}</Text>
            </Touch>
        )
    }
}

const styles = StyleSheet.create({
    categoryCard: {
        backgroundColor: '#fff',
        width: '31%',
        paddingBottom: 10,
        paddingTop: 10,
        marginVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
        paddingRight: 7,
        paddingLeft: 7,
    },
    category: {
        width: 40,
        height: 40,
        marginBottom: 5
    },
    categoryName: {
        fontSize: 16,
        color: Theme.colors.greyText,
        fontFamily: Theme.fonts.RobotoRegular,
        textAlign: 'center'
    },
    categoryNumber: {
        fontSize: 14,
        color: Theme.colors.greyText,
        fontFamily: Theme.fonts.RobotoRegular
    },
});