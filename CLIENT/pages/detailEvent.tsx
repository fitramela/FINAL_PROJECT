import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function DetailEvent({ route }) {
  const { card } = route.params;
  
  // Dummy coordinates for the map, you should replace them with actual data if available
  const coordinates = {
    latitude: -7.250445,
    longitude: 112.768845,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{card.name}</Text>
      <Image source={{ uri: card.imageLocation }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{card.category}</Text>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{card.description}</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{card.date}</Text>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{card.kota}</Text>
        <Text style={styles.label}>Quota:</Text>
        <Text style={styles.value}>{card.quota}</Text>
        <Text style={styles.label}>Players:</Text>
        <Text style={styles.value}>{card.player.length}</Text>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{card.address}</Text>
      </View>
      <MapView style={styles.map} initialRegion={coordinates}>
        <Marker coordinate={coordinates} />
      </MapView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2980b9",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#34495e",
    marginBottom: 15,
  },
  map: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});
