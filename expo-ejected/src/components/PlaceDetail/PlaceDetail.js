import React from 'react';
import { View, Text, Button, Image, Modal, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    height: 200,
    width: '100%'
  }
});

const PlaceDetail = props => {
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {props.selectedPlace
          ? <View>
              <Image
                source={props.selectedPlace.image}
                style={styles.placeImage}
              />
              <Text>{props.selectedPlace.name}</Text>
            </View>
          : null}

        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};
export default PlaceDetail;
