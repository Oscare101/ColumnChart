import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColumnChartData} from './interfaces';
import colors from './colors';

export default function Columns(props: {
  data: ColumnChartData[];
  columnStyles: any;
  maxColumnHeight: number;
}) {
  const data = props.data;
  const max = [...props.data].sort(
    (a: ColumnChartData, b: ColumnChartData) => b.value - a.value,
  )[0].value;
  const height: number = props.maxColumnHeight || 100;

  return (
    <View style={styles.container}>
      {data.map((item: ColumnChartData, index: number) => (
        <View
          key={index}
          style={[
            styles.block,
            {width: `${100 / props.data.length}%`, height: height},
          ]}>
          <View
            style={[
              styles.column,
              {
                height: (item.value / max) * height,
                backgroundColor: colors.column,
              },
              props.columnStyles,
            ]}
          />
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
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  column: {
    width: '50%',
    borderRadius: 5,
  },
});
