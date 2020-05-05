import React, {Component} from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import {Image} from "react-native-animatable";
import Touch from "../core/Touch";

let dimension = Dimensions.get('window');
let width = dimension.width;
let height = dimension.height;

export default class RecipeHomeCard extends Component<Props> {
    render() {
        return (
            <Touch style={styles.containerRecipes}>
                <Image source={this.props.recipesPhoto}
                       resizeMode={'cover'}
                       style={styles.recipe}/>
            </Touch>
        )
    }
}

const styles = StyleSheet.create({
     containerRecipes: {
        // padding: 5,
        width: width*0.75,
        height: 200,
        marginLeft: 20,
        marginRight: 20
    },
    recipe: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    },

});