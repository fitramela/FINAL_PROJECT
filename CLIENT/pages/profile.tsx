import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Profile() {
  const User = {
    "_id": 1,
    "username": "Rizya",
    "password": "12345",
    "gender": "male",
    "image": "https://static.tvtropes.org/pmwiki/pub/images/7928682b4732ceb0c6222bb7170285ab.jpg",
    "interest": "Gym",
    "dateOfBirth": "05-01-2001",
    "status": "unbanned",
    "history": [1, 3],
    "createdAt": "2024-07-08T09:26:05.000Z",
    "updatedAt": "2024-07-08T09:26:05.000Z"
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: User.image }} style={styles.profileImage} />
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.info}>{User.username}</Text>
      <Text style={styles.label}>Gender:</Text>
      <Text style={styles.info}>{User.gender}</Text>
      <Text style={styles.label}>Interest:</Text>
      <Text style={styles.info}>{User.interest}</Text>
      <Text style={styles.label}>Date of Birth:</Text>
      <Text style={styles.info}>{User.dateOfBirth}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b80000',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
  },
});

export default Profile;
