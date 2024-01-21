import { useState } from 'react';
import {  Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [showModal, setShowModal] = useState(false)


  return (
    <View style={styles.centeredView}>
      <Pressable onPress={() => setShowModal(true)} >
        <Text style={styles.textStyle}>Show modal message!</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This be modal...</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: '#4b4b4b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#9b9b9b',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyself: 'center',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#white',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
