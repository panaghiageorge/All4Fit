import * as React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import icons from '../../config/icons';
import CustomIcon from "./CustomIcon";

export type IconProps = {
    name: string,
    size: number,
    color: string,
    style: any
};

type State = {
    config: Object
};

export default class Icon extends React.Component<IconProps, State> {
    static defaultProps = {
        name: '',
        size: 28,
        color: '#000',
        style: {}
    };

    state: State = {
        config: null
    };

    constructor(props: IconProps) {
        super(props);
    }

    // noinspection OverlyComplexFunctionJS
    resolveIcon = (key: string): Object => {
        if (typeof icons[key] === 'undefined' || !icons[key]) {
            return {
                font: 'Ionicons',
                fontComponent: Ionicons,
                name: (key.startsWith('ios-') || key.startsWith('md-')) ?
                    key :
                    Platform.OS === 'ios' ? `ios-${key}` : `md-${key}`
            };
        }

        let config = null;
        let fontComponent = null;

        if (typeof icons[key]['android'] === 'undefined' || typeof icons[key]['ios'] === 'undefined') {
            config = icons[key];
        } else {
            config = Platform.select(icons[key]);
        }

        if (typeof config.image !== 'undefined') {
            config.isCustom = true;
            return config;
        }

        switch (config.font) {
            case 'Ionicons':
                fontComponent = Ionicons;
                break;

            case 'MaterialCommunityIcons':
                fontComponent = MaterialCommunityIcons;
                break;

            case 'FontAwesome':
                fontComponent = FontAwesome;
                break;

            case 'FontAwesome5':
                fontComponent = FontAwesome5;
                break;

            case 'Entypo':
                fontComponent = Entypo;
                break;

            case 'Feather':
                fontComponent = Feather;
                break;

            case 'MaterialIcons':
                fontComponent = MaterialIcons;
                break;

            case 'SimpleLineIcons':
                fontComponent = SimpleLineIcons;
                break;

            case 'AntDesign':
                fontComponent = AntDesign;
                break;

            default:
                fontComponent = null;
        }

        config.fontComponent = fontComponent;
        config.isCustom = false;

        return config;
    };

    componentDidMount(): void {
        this.init(this.props.name);
    }

    componentDidUpdate(prevProps: IconProps): void {
        if (prevProps.name !== this.props.name) {
            this.init(this.props.name);
        }
    }

    init = (name: string): void => {
        let config = this.resolveIcon(name);

        this.setState({
            config
        });

        if (!config.isCustom && !config.fontComponent) {
            console.warn('Font ' + config.font + ' is not configured.');
        }
    };

    render(): ?React.Element<any> {
        const { config } = this.state;

        if (!config) {
            return null;
        }

        if (config.isCustom) {
            return (
                <CustomIcon
                    image={config.image}
                    size={this.props.size}
                    style={this.props.style}/>
            );
        }

        let IconComponent = config.fontComponent;

        return (
            <IconComponent
                name={config.name}
                size={this.props.size}
                color={this.props.color}
                style={this.props.style}/>
        );
    }
}
