import { Dimensions } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const BUTTON_SCALE = 0.8;
const CHART_HEIGHT = verticalScale(290);
const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;
const TAB_HEIGHT = 50;

const COLORS = {
  primary: '#ffa726',
  primary2: '#fb8c00',
  primary3: '#e26a00',
  secondary: '#141414',
  background: '#000000',
  text: {
    primary: '#FFFFFF',
    secondary: '#444444',
    light: '#808080',
  },
  shadow: '#000000',
};

export {
  CHART_HEIGHT,
  APP_WIDTH,
  APP_HEIGHT,
  BUTTON_SCALE,
  COLORS,
  TAB_HEIGHT,
};
