import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import items from "./../data";

export default function ItemCard() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.cardContainer}>
        {items.map((item, index) => (
          <View key={index} style={[styles.itemContainer, index !== items.length - 1 && styles.separator]}>
            <View style={styles.contentContainer}>
              <Image style={styles.image} source={{ uri: item.img }} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>View Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  cardContainer: {
    width: deviceWidth - 25,
    borderRadius: 20,
    paddingVertical: 10,
  },
  itemContainer: {
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontWeight: "bold",
  },
  price: {
    fontWeight: "normal",
    marginTop: 5,
  },
  button: {
    marginTop: 9,
    width: 100,
    backgroundColor: "green",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
