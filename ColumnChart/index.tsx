import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from './colors';
import {ColumnChartData, ColumnChartProps} from './interfaces';
import ColumnTitles from './ColumnTitles';

export default function ColumnChart(props: ColumnChartProps) {
  return (
    <View style={[styles.container, props.containerStyles]}>
      {props.data.every((d: ColumnChartData) => !!d.title) ? (
        <ColumnTitles data={props.data} />
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
    borderRadius: 20,
  },
});
