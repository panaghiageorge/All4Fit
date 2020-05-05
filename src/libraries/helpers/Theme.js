/* @flow */

import { default as themeConfig } from '../../config/themeConfig';

class Theme {
    static colors: Object = themeConfig.colors;
    static fonts: Object = themeConfig.fonts;

    static resolveColor = (color: string): string => {
        if (!color.startsWith('#') && typeof Theme.colors[color] !== 'undefined') {
            return Theme.colors[color];
        }

        return color;
    };

    static shadeColor = (color: string, percent: number): string => {
        let processedColor: string = Theme.resolveColor(color);

        const f = parseInt(processedColor.slice(1), 16);
        const t = percent < 0 ? 0 : 255;
        const p = percent < 0 ? percent * -1 : percent;
        const R = f >> 16;
        const G = f >> 8 & 0x00FF;
        const B = f & 0x0000FF;

        // noinspection OverlyComplexArithmeticExpressionJS
        return "#" +
            (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
                (Math.round((t - G) * p) + G) * 0x100 +
                (Math.round((t - B) * p) + B)).toString(16).slice(1);
    };

    static darken = (color: string, sPercent: string): string => {
        let percent = Theme.convertPercentageToFloat(sPercent) * (-1);
        return Theme.shadeColor(color, percent);
    };

    static lighten = (color: string, sPercent: string): string => {
        let percent = Theme.convertPercentageToFloat(sPercent);
        return Theme.shadeColor(color, percent);
    };

    static convertPercentageToFloat = (percentage: string): number => {
        return parseInt(percentage.replace('%', '')) / 100;
    };

    static applyAlpha = (color: string, percent: number): ?string => {
        let processedColor: string = Theme.resolveColor(color);

        if (!processedColor.startsWith('#')) {
            return null;
        }

        if (processedColor.length === 7 || processedColor.length === 4) {
            let percentStr: string = '';

            if (percent > 9) {
                percentStr = percent.toString();
            } else {
                percentStr = `0${percent.toString()}`;
            }

            return `${processedColor}${percentStr}`;
        }

        return null;
    };

    static hexToRgb = (hexColor: string, alpha?: number = 1): ?string => {
        const shorthandRegex: RegExp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const hex: string = hexColor.replace(
            shorthandRegex,
            (m: Object, r: string, g: string, b: string): string => {
                return r + r + g + g + b + b;
            });

        const result: ?Array<string> = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        if (!result) {
            return null;
        }

        const rgb: Object = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        };

        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.round(alpha, 2).toString()})`;
    };
}

export default Theme;
