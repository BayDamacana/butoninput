import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');

  const handleclick = () => {
    alert("Hello")
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <Button title='Click Button' onPress={handleclick} />

      <TouchableOpacity onPress={handleclick}>
        <Text>Click TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="purple"
        onPress={() => alert('Pressed!')}>
        <Text>Click TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
        <Text>Click TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>

      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputText}
        placeholder="Text..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: '85%',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

