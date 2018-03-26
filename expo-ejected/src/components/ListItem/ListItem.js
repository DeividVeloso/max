import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Item from '../Item/Item';

const ListItem = props => {
  return props.places.map((place, index) => (
    <Item id={index} key={index} placeName={place} onPressed={() => props.onItemDeleted(index)} />
  ));
};
export default ListItem;
