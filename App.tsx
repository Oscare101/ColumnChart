import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ColumnChart from './ColumnChart';

export default function App() {
  const data: any = [
    {value: 2, title: '1'},
    {value: 3, title: '2'},
    {value: 5, title: '3'},
    {value: 4, title: '4'},
    {value: 2, title: '1'},
    {value: 3, title: '2'},
    {value: 5, title: '3'},
    {value: 4, title: '4'},
    {value: 4, title: '4'},
    {value: 2, title: '1'},
    {value: 3, title: '2'},
    {value: 5, title: '3'},
    {value: 4, title: '4'},
    {value: 4, title: '4'},
    {value: 4, title: '4'},
    {value: 2, title: '1'},
    {value: 3, title: '2'},
    {value: 5, title: '3'},
    {value: 4, title: '4'},
  ];

  return (
    <View style={styles.container}>
      <ColumnChart
        data={data}
        titleStyles={{color: 'red'}}
        columnStyles={{backgroundColor: 'red'}}
        containerStyles={{width: '50%'}}
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
