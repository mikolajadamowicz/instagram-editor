import { Dimensions } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const BUTTON_SCALE = 0.8;
const CHART_HEIGHT = verticalScale(250);
const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;
const TAB_HEIGHT = verticalScale(50);

const defaultTheme = {
  primary: '#ffcb7f',
  primary2: '#ff9700',
  primary3: '#7f4b00',
  secondary: '#141414',
  background: '#000000',
  text: {
    primary: '#FFFFFF',
    secondary: '#444444',
    light: '#808080',
  },
  shadow: '#000000',
};

const COLORS = defaultTheme;

export {
  CHART_HEIGHT,
  APP_WIDTH,
  APP_HEIGHT,
  BUTTON_SCALE,
  COLORS,
  TAB_HEIGHT,
};
