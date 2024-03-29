import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColumnChartData} from './interfaces';
import colors from './colors';

export default function ColumnTitles(props: {
  data: ColumnChartData[];
  titleStyles: any;
}) {
  return (
    <View style={styles.container}>
      {props.data.map((item: ColumnChartData, index: number) => (
        <View
          key={index}
          style={[styles.block, {width: `${100 / props.data.length}%`}]}>
          <Text style={[styles.title, props.titleStyles]}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  block: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.title,
    fontSize: 14,
  },
});
