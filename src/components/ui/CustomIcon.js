import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

type Props = {
    image: any,
    style: any,
    size: number,
    sizeOffset: number
};

type State = {
    width: number,
    size: number
};

export default class CustomIcon extends Component<Props, State> {
    static defaultProps = {
        style: {},
        size: 28,
        sizeOffset: 3
    };

    constructor(props: Props) {
        super(props);

        const size = props.size <= props.sizeOffset ? 1 : props.size - props.sizeOffset;

        this.state = {
            width: props.size,
            size
        };
    }

    componentDidMount() {
        const imageSource = Image.resolveAssetSource(this.props.image);

        if (imageSource && imageSource.width && imageSource.height) {
            this.setState({
                width: Math.round(this.state.size * imageSource.width / imageSource.height)
            });
        }
    }

    render() {
        let currentStyle = {
            resizeMode: 'contain',
            width: this.state.width,
            height: this.state.size
        };

        let imageStyles = [styles.iconStyle, currentStyle, this.props.style];

        return (
            <Image
                source={this.props.image}
                style={imageStyles}/>
        );
    }
}


const styles = StyleSheet.create({
    iconStyle: {}
});
