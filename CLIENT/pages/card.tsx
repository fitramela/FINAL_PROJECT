import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Event({ route }) {
  const { card } = route.params;

  return (
    
    <View style={styles.container}>
      <Image source={{ uri: card.image }} style={styles.image} />
      <Text style={styles.title}>{card.name}</Text>
      <Text style={styles.description}>{card.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#b80000', // Match the "Ayo" app color
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Event;
