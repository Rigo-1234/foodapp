import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Card = ({ data, navigation }) => {          // ✅ accept props
  const nav = navigation || useNavigation();      // fallback if not passed
  
  // console.log('We have card',data)

  return (
    <View style={styles.container}>
      <Text style={styles.title}> 
        Today's Special Food
      </Text>

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        

        <SafeAreaView>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}                            // ✅ use prop
            keyExtractor={(item) => item.id}       // ✅ provide key
            renderItem={({item, index}) => (       // index param available
              <TouchableOpacity key={index} style={styles.cards} onPress={() => nav.navigate('product', { product: item })}>
                <View>
                  <Image source={require('../images/splash-icon.png')} style={styles.cardimage} />
                </View>  

                <View style={styles.cardin}>
                    <Text style={styles.cardTitle}>{item.FoodName}</Text>

                    <View style={styles.cardindes}>
                      <Text style={styles.cardDescription}>description item 1</Text>
                      <Text style={styles.cardDescription}>Price:
                        <Text> {item.FoodPrice}F</Text>
                    </Text>
                    </View>
                </View>   
            </TouchableOpacity>
            )}
          />

        </SafeAreaView>
     {/* </ScrollView>  */}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    marginBottom: 20,
  },
  cardimage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 2,
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
  },
  cardin: {
    marginHorizontal: 10,
    marginTop: 3
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  cardindes: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDescription: {
    fontSize: 14,
    marginRight: 10,
    fontWeight: 'bold',
  },
})
