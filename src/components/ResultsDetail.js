import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}> {result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
