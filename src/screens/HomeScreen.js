import React, {Component} from 'react';
import {Platform, Text, ScrollView, StyleSheet, Dimensions, FlatList} from 'react-native';
import {Image, View} from "react-native-animatable";
import Touch from "../components/core/Touch";
import Theme from "../libraries/helpers/Theme";
import RecipeHomeCard from "../components/cards/RecipeHomeCard";
import CategoriesCard from "../components/cards/CategoriesCard";

let dimension = Dimensions.get('window');
let width = dimension.width;
let height = dimension.height;
export default class HomeScreen extends Component<Props> {
    static navigationOptions = {
        headerLeft: null
    };

    constructor(props) {
        super(props);
        this.state= {
            recipes: [
                {recipesPhoto: require('../assets/img/recipe-3.jpg')},
                {recipesPhoto: require('../assets/img/recipe-2.jpg')},
                {recipesPhoto: require('../assets/img/recipe-1.jpg')},
                {recipesPhoto: require('../assets/img/recipe-4.jpg')},
            ],
            category: [
                {image: require('../assets/img/allRecipes.png'), name: 'Toate', number: 800},
                {image: require('../assets/img/avocado.png'), name: 'Keto', number: 100},
                {image: require('../assets/img/broccoli.png'), name: 'Vegan', number: 100},
                {image: require('../assets/img/meat.png'), name: 'Carne', number: 100},
                {image: require('../assets/img/fish.png'), name: 'Fructe de mare', number: 100},
                {image: require('../assets/img/protein.png'), name: 'Multe Proteine', number: 100},
                {image: require('../assets/img/lunch.png'), name: 'Mic dejun', number: 100},
                {image: require('../assets/img/bread.png'), name: 'Multi carbohidrati', number: 100},
                {image: require('../assets/img/wheat.png'), name: 'Fibre', number: 100},
            ],
        }
    }

    renderCategory = ({item}) => {
        return (
            <CategoriesCard
                image={item.image}
                name={item.name}
                number={item.number}
            />
        )
    };

    renderRecipes = ({item}) => {
        return (
            <RecipeHomeCard
                recipesPhoto={item.recipesPhoto}
            />
        )
    };

    render() {
        return (
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Cele mai noi retete</Text>
                    <ScrollView style={styles.newRecipes}
                                horizontal>
                       <FlatList
                           horizontal={true}
                           data={this.state.recipes}
                           renderItem={this.renderRecipes}
                       />
                    </ScrollView>
                    <View>
                        <Text style={styles.title}>Categorii de retete:</Text>
                        <FlatList
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            numColumns={3}
                            data={this.state.category}
                            renderItem={this.renderCategory}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f4f4f4'
    },
    container: {
        width: '85%',
        alignSelf: 'center',
        paddingBottom: 25
    },
    newRecipes: {
        flexDirection: 'row',
        marginBottom: 15
    },
    title: {
        fontSize: 20,
        color: Theme.colors.blackText,
        fontFamily: Theme.fonts.RobotoMedium,
        marginTop: 15,
        marginBottom: 15,
    }
});