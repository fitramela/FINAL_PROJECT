import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import axiosInstance from '../axios instance/axios';

function Event({ route ,navigation}) {
  const { card } = route.params;
  // console.log(card ,'<---carddd')
  const [event , setEvent] = React.useState([])
useEffect(()=>{
  getEvent()
},[])
  const getEvent = async ()=>{
    try {
      const { data } = await axiosInstance.get("/Events?category="+ card.name );
      // console.log(data,'<---data')
      setEvent(data);
    } catch (error) {
      console.log(error, "<-----listevent error");
    }
  }
 

  return (
    <View style={styles.container}>
      <Image source={{ uri: card.image }} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{card.name}</Text>
      <Text style={styles.eventDescription}>{card.description}</Text>
      
      <Text style={styles.sectionTitle}>Related Events</Text>
      <FlatList
        data={event}
        keyExtractor={(item) => item._id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.pinterestCard}
          key={item.id}
          onPress={() => navigation.navigate("Detail Event", { card: item })}
          >
            <Image source={{ uri: item.imageLocation }} style={styles.pinterestImage} />
            <Text style={styles.pinterestTitle}>{item.name}</Text>
            <Text style={styles.pinterestCategory}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  eventDescription: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  pinterestCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
    flex: 1,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  pinterestImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  pinterestTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '#333',
  },
  pinterestCategory: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default Event;
