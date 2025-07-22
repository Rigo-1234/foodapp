import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Offers = () => {
  return (
    <View style={styles.container}>
        <Swiper
            // style={{ height: 150 }}
            autoplay={true}
            autoplayTimeout={5}
            showsButtons={true}
            dotColor={'red'}
            removeClippedSubviews={false}
            activeDotColor={'black'}
            // nextButton={<MaterialIcons name="arrow-right" size={24} color="black" />}
            // prevButton={<MaterialIcons name="arrow-left" size={24} color="black" />}
            nextButton ={<Text style={styles.button}>›</Text>}
            prevButton ={<Text style={styles.button}>‹</Text>}
            // showsButtons={true}
            // showsPagination={true}
            // dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)' }}
            // activeDotStyle={{ backgroundColor: 'red' }}
        >
            <View style={styles.slider}>
                 <Image source={require('../images/cover1.jpg')} style={styles.image} />
            </View>

            <View style={styles.slider}>
                 <Image source={require('../images/cover2.jpg')} style={styles.image} />
            </View>

            <View style={styles.slider}>
                 <Image source={require('../images/cover3.jpg')} style={styles.image} />
            </View>

        </Swiper>
    </View>
  )
}

export default Offers

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf: 'center',
        height: 150,
        // backgroundColor:'red'
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: 'red',
        borderRadius: 10,
        // resizeMode: 'cover',
        // borderRadius: 10,
    },
    slider: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    button: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        // marginHorizontal: 10,
        backgroundColor: 'white',
        width: 30,
        height: 30,
        textAlign: 'center',
        lineHeight: 30
    }
})
// import { StyleSheet, Text, View, Image } from 'react-native';
// import React from 'react';
// import Swiper from 'react-native-swiper';

// const Offers = () => {
//   return (
//     <View style={styles.container}>
//       <Swiper
//         autoplay
//         autoplayTimeout={5}
//         showsButtons
//         dotColor="red"
//         activeDotColor="black"
//         nextButton={<Text style={styles.button}>›</Text>}
//         prevButton={<Text style={styles.button}>‹</Text>}
//       >
//         <View style={styles.slider}>
//           <Image source={require('../images/cover1.jpg')} style={styles.image} />
//         </View>
//         <View style={styles.slider}>
//           <Image source={require('../images/cover2.jpg')} style={styles.image} />
//         </View>
//         <View style={styles.slider}>
//           <Image source={require('../images/cover3.jpg')} style={styles.image} />
//         </View>
//       </Swiper>
//     </View>
//   );
// };

// export default Offers;

// const styles = StyleSheet.create({
//   container: {
//     width: '95%',
//     alignSelf: 'center',
//     height: 150,
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     borderRadius: 10,
//   },
//   slider: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     color: 'black',
//     fontSize: 30,
//     fontWeight: 'bold',
//     backgroundColor: 'white',
//     width: 30,
//     height: 30,
//     textAlign: 'center',
//     lineHeight: 30,
//   },
// });
