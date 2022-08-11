import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

const items = [
  { id: '0', text: 'View' },
  { id: '1', text: 'Text' },
  { id: '2', text: 'Image' },
  { id: '3', text: 'ScrollView' },
  { id: '4', text: 'ListView' },
];

const ListTv = () => {
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
    textAlign: 'center',
  },
});

export default ListTv;
