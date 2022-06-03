import React, {Children} from 'react';
import {View} from 'react-native';
import makeStyles from './styles';

const Row = ({children, gap = 0, rowStyle}) => {
  const styles = makeStyles();

  return (
    <View style={[styles.row, rowStyle]}>
      {Children.map(children, (Component, i) => {
        const newProps = {
          firstElement: i === 0,
          lastElement: Children.count(children) - 1 === i,
          gap,
        };
        return React.cloneElement(Component, newProps);
      })}
    </View>
  );
};

export default Row;
