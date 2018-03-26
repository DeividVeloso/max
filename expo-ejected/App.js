import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends React.Component {
  state = {
    places: []
  };

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
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
        <View style={styles.listView}>
          <ListItem places={this.state.places} />
        </View>
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
  },
  listView: {
    width: '100%'
  }
});
