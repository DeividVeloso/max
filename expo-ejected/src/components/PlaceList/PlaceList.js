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
        console.log("INFO", info)
        return (
          <ListItem 
            placeName={info.item.name}
            placeImage={info.item.image}
            onItemPressed={() => props.onItemSelected(info.item.key)}
          />
        );
      }}
    />
  )
};
export default PlaceList;
