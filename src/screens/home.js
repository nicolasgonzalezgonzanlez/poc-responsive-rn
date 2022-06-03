import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
//components
import CustomSafeArea from '../components/wrapper';
import Column from '../components/column';
import Row from '../components/row';
import makeStyles from './styles';

export const HomeScreen = ({navigation}) => {
  const styles = makeStyles();

  return (
    <CustomSafeArea>
      <Row>
        <Column span={6}>
          <Row>
            <Column span={1}>
              <View style={styles.card}>
                <Text>Ocupa 2</Text>
              </View>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row gap={15}>
        <Column span={1}>
          <View style={styles.card}>
            <Text>Ocupa 1</Text>
          </View>
        </Column>
        <Column span={1}>
          <View style={styles.card}>
            <Text>Ocupa 1</Text>
          </View>
        </Column>
        <Column span={2}>
          <View style={styles.card}>
            <Text>Ocupa 2</Text>
          </View>
        </Column>
        <Column span={2}>
          <View style={styles.card}>
            <Text>Ocupa 2</Text>
          </View>
        </Column>
      </Row>
      <View style={styles.row}>
        <Row gap={2}>
          <Column span={3}>
            <View style={styles.card}>
              <Text>Hola voy a crecer 2</Text>
            </View>
          </Column>
          <Column span={3}>
            <View style={styles.card}>
              <Text>Hola voy a crecer 2</Text>
            </View>
          </Column>
        </Row>
      </View>
    </CustomSafeArea>
  );
};
