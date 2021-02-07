import { Dimensions } from 'react-native';

type DimensionsVal = {
  width: number;
  height: number;
};

const useDimensions = (): DimensionsVal => ({
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
});

export default useDimensions;
