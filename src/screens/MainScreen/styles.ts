import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
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
    fontSize: 24,
  },
  backdrop: {
    backgroundColor: '#fff',
  },
  desc: {
    alignSelf: 'center',
    margin: '2%',
  },
});

export default styles;
