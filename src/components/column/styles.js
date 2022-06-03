import {StyleSheet} from 'react-native';
const screenPorcentaje = {
  1: 16.66,
  2: 33.33,
  3: 50,
  4: 66.66,
  5: 83.33,
  6: 100,
};
const styles = props => {
  const gap = props.gap / 2;
  return StyleSheet.create({
    column: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: `${screenPorcentaje[props.span]}%`,
      maxWidth: `${screenPorcentaje[props.span]}%`,
      paddingHorizontal: gap,
      paddingLeft: props.firstElement ? 0 : gap,
      paddingRight: props.lastElement ? 0 : gap,
    },
  });
};
export default styles;
