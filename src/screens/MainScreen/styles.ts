import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: { alignItems: 'center' },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  score: {
    margin: '10%',
    alignSelf: 'center',
  },
  backdrop: {
    backgroundColor: '#fff',
  },
});

export default styles;
