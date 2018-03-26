import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends React.Component {
  state = {
    places: []
  };

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ key: Math.random(), value: placeName })
      };
    });
  };

  placeDeletedHandler = index => {
    console.log("INDEX", index)
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          //Retorna verdadeiro se for diferente do index
          //Pois o que for igual é o que foi escolhido para ser deletado
          return place.key !== index;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeholder="An Awesome place"
          onPlaceAdded={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
