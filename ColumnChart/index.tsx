import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from './colors';
import {ColumnChartData, ColumnChartProps} from './interfaces';
import ColumnTitles from './ColumnTitles';
import Columns from './Columns';

export default function ColumnChart(props: ColumnChartProps) {
  return (
    <View style={[styles.container, props.containerStyles]}>
      <Columns data={props.data} columnStyles={props.columnStyles} />
      {props.data.every((d: ColumnChartData) => !!d.title) ? (
        <ColumnTitles data={props.data} titleStyles={props.titleStyles} />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '92%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 5,
  },
});
