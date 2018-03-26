import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Item from '../Item/Item';

const ListItem = props => {
  return props.places.map((place, index) => (
    <Item key={index} placeName={place} />
  ));
};
export default ListItem;
