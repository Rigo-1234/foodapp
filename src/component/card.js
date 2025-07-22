import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Card = ({ data, navigation }) => {
  const nav = navigation || useNavigation();

  const renderItem = ({ item }) => {
    const imageUri = item.FoodImageUrl?.trim();
    const isValidImage = imageUri && imageUri.startsWith('https');

    console.log('Rendering item:', item);

    return (
      <TouchableOpacity
        style={styles.cards}
        onPress={() => nav.navigate('product', { item })}

      >
        {isValidImage ? (
          <Image
            source={{ uri: imageUri }}
            style={styles.cardimage}
            resizeMode="cover"
            onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
          />
        ) : (
          <View style={[styles.cardimage, styles.imagePlaceholder]}>
            <Text>No Image</Text>
          </View>
        )}

        <View style={styles.cardin}>
          <Text style={styles.cardTitle}>{item.FoodName || 'No Name'}</Text>
          <View style={styles.cardindes}>
            <Text style={styles.cardDescription}>
              Price: {item.FoodPrice ? `${item.FoodPrice} F` : 'N/A'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Special Food</Text>

      <FlatList
        data={data.filter((item) => item.FoodName && item.FoodImageUrl)}
        keyExtractor={(item) => item.id || Math.random().toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginBottom: 10,
  },
  cards: {
    width: 300,
    height: 200,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 5,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  cardimage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  imagePlaceholder: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardin: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardindes: {
    marginTop: 5,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
