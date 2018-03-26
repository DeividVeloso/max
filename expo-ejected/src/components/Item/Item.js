import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    <TouchableOpacity onPress={props.onPressed}>
      <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Item;
