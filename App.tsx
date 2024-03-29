import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ColumnChart from './ColumnChart';

export default function App() {
  const data: any = [
    {value: 2},
    {value: 3},
    {value: 5},
    {value: 4},
    {value: 2},
    {value: 3},
    {value: 5},
    {value: 4},
    {value: 4},
    {value: 6},
    {value: 7},
    {value: 5},
    {value: 4},
    {value: 6},
    {value: 3},
    {value: 2},
    {value: 1},
    {value: 3},
    {value: 4},
    {value: 5},
  ];

  return (
    <View style={styles.container}>
      <ColumnChart
        data={data}
        maxColumnHeight={100}
        titleStyles={{color: '#c5d6e8', fontSize: 10}}
        columnStyles={{backgroundColor: '#77aae0', width: '90%'}}
        containerStyles={{width: '92%', backgroundColor: '#000', padding: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
