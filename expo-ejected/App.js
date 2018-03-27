import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import placeImage from './src/assets/beatiful-place.jpg';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/16/13/3200x1600/landscape-1459440369-gettyimages-580734179.jpg?resize=768:*'
          }
        })
      };
    });
  };

  placeSelectedHandler = index => {
    this.setState({
      selectedPlace: this.state.places.find(x => x.key === index)
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          placeholder="An Awesome place"
          onPlaceAdded={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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
