import {StyleSheet} from 'react-native';

const styles = colors =>
  StyleSheet.create({
    card: {
      backgroundColor: '#1b1b',
      width: '100%',
      height: 100,
    },
    row: {
      paddingTop: 20,
      width: 100,
      borderColor: '#000',
      borderWidth: 1,
    },
  });

export default styles;
