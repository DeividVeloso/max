import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = event => {
    this.setState({ placeName: event });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName) {
      //Consigo pegar meu estado anterior
      //E adicionar um novo objeto
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        };
      });
    }
  };

  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <ListItem key={index} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            placeholder="An Awesome place"
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listView}>
          {placesOutput}
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
  containerInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listView:{
    width: '100%'
  }
});
