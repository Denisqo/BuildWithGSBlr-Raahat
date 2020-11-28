import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: '#1F2532';
      white: '#FFFFFF';
      whiteLight: '#F8F9FB';
      whiteDark: '#EFF0F2';
      blue: '#2B5CDB';
      red: '#EA3E4F';
      redLight: 'rgba(234, 62, 79, 0.1)';
      redExtraLight: '#FFEFF1';
      green: '#01CB63';
      greenLight: '#4DDB92';
      greenExtraLight: '#D3F4E1';
      greenTransparent: 'rgba(1, 203, 99, 0.1)';
      gray: '#5D656F';
      grayLight: '#A3AAB3';
      grayExtraLight: '#EFF0F2';
      transparent: 'rgba(0, 0, 0, 0)';
    };
    fonts: {
      ubuntu: 'Ubuntu, sans-serif';
    };
    heights: {
      footer: '100px';
      header: '60px';
    };
    fontSize: {
      extraLarge: '32px';
      large: '20px';
      big: '16px';
      normal: '14px';
      small: '12px';
      extraSmall: '11px';
    };
  }
}
