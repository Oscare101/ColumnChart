import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColumnChartData} from './interfaces';

export default function ColumnTitles(props: {data: ColumnChartData[]}) {
  return (
    <View style={styles.container}>
      {props.data.map((item: ColumnChartData, index: number) => (
        <View
          key={index}
          style={[styles.block, {width: `${100 / props.data.length}%`}]}>
          <Text>{item.title}</Text>
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
});
