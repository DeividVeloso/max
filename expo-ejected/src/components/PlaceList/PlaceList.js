import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';

const styles = StyleSheet.create({
  listView: {
    width: '100%'
  }
});
import ListItem from '../ListItem/ListItem';

const PlaceList = props => {
  //data  - precisa ser um array
  //renderItem - preciso passar como vai ser renderizado os dados em JSX
  return (
    <FlatList 
      style={styles.listView}
      data={props.places}
      renderItem={(info) => {
        return (
          <ListItem 
            placeName={info.item.value}
            onItemPressed={() => props.onItemDeleted(info.item.key)}
          />
        );
      }}
    />
  )
};
export default PlaceList;
