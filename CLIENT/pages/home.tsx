import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import ModalNotification from "../components/modal";
import axiosInstance from "../axios instance/axios";

function Home({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const translateX = useState(new Animated.Value(0))[0];
  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    Categories();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % banners.length;
        Animated.spring(translateX, {
          toValue: -nextIndex * windowWidth,
          useNativeDriver: true,
        }).start();
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  async function Categories() {
    try {
      const { data } = await axiosInstance.get("/Categories");
      setCategories(data);
    } catch (error) {
      console.log(error, "<-----listProducts error");
    }
  }

  const banners = [
    "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const renderCard = ({ item }) => (
    <View>

    <TouchableOpacity
      key={item.id}
      style={styles.card}
      onPress={() => navigation.navigate("Event", { card: item })}
      >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
      </View>
  );

  const renderBanner = ({ item, index }) => (
    <Image key={index} source={{ uri: item }} style={[styles.banner, { width: windowWidth }]} />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search for Open Play</Text>
      </View>
      <ModalNotification />
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Categories</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCard}
        // keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.cardsContainer}
      />
      <View style={styles.bannerContainer}>
        <Animated.View style={[styles.bannerWrapper, { transform: [{ translateX }] }]}>
          {banners.map((banner, index) => renderBanner({ item: banner, index }))}
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  searchContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  searchText: {
    color: "#B0B0B0",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  locationText: {
    color: "#333",
    fontSize: 16,
  },
  cardsContainer: {
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
    width: Dimensions.get("window").width / 2 - 15,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  bannerContainer: {
    overflow: "hidden",
    height: 100,
    marginBottom: 20,
  },
  bannerWrapper: {
    flexDirection: "row",
  },
  banner: {
    height: 100,
    borderRadius: 8,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
