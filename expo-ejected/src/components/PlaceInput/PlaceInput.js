import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
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
  }
});

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = event => {
    this.setState({ placeName: event });
  };

  placeSubmitHandler = () => {
    console.log("Entrou", this.state.placeName);
    if(this.state.placeName){
      this.props.onPlaceAdded(this.state.placeName);
    }
  }

  render() {
    return (
      <View style={styles.containerInput}>
        <TextInput
          style={styles.placeInput}
          value={this.props.placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder={this.props.placeholder}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}
export default PlaceInput;
