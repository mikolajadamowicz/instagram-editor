import { Dimensions } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const BUTTON_SCALE = 0.8;
const CHART_HEIGHT = verticalScale(290);
const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;

export { CHART_HEIGHT, APP_WIDTH, APP_HEIGHT, BUTTON_SCALE };
