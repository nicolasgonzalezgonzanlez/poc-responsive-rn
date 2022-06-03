import React from 'react';
import {View, Dimensions} from 'react-native';
import makeStyles from './styles';

import {useEffect} from 'react';

const Column = ({span = 6, children, firstElement, lastElement, gap}) => {
  const styles = makeStyles({span, firstElement, lastElement, gap});

  return <View style={styles.column}>{children}</View>;
};

export default Column;
