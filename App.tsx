import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ColumnChart from './ColumnChart';

export default function App() {
  const data: any = [
    {value: 2, title: '1'},
    {value: 3, title: '2'},
    {value: 5, title: '3'},
  ];

  return (
    <View style={styles.container}>
      <ColumnChart data={data} />
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
