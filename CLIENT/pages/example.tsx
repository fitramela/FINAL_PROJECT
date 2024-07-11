import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Example() {
  return (
    <View style={styles.container}>
      <Text>Example Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Example;
