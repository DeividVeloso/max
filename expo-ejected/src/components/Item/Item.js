import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5
  }
});

const Item = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  );
};
export default Item;
