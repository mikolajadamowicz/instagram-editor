import { StyleSheet } from 'react-native';
import { COLORS, TAB_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: TAB_HEIGHT,
  },
  text: {
    margin: 10,
  },
  underline: {
    backgroundColor: COLORS.primary,
    height: '5%',
    borderRadius: 10,
  },
});

export { styles };
