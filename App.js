import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Escribe </Text>
      <TextInput
        placeholder='Escribe algo'
        placeholderTextColor={'blue'}
        onChangeText={text => onChangeText(text)}
        defaultValue={text}
        />
        <text>{text}</text>
      <StatusBar style="auto" />
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
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
