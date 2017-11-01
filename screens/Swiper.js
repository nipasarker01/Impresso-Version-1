import React, {Component} from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,StatusBar,TextInput,KeyboardAvoidingView,Alert,ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import Swiper from 'react-native-swiper';
import StartupScreen from './StartupScreen';
import { EvilIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';



var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  backgroundColor: 'purple',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  text: {
    color: '#fff',
    fontSize: 10,
fontWeight: 'bold',
justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  logo: {
  width: 159,
  height: 159,

  marginBottom:100,


  },
})

export default class SwiperScreen extends React.Component {

 render() {
   return (

     <Swiper style={styles.wrapper} showsButtons={false}  index={0} loop={false}>


       <View style={styles.slide1}>
       <Image

      source={require('./../assets/images/onbd1.png')}
         style={styles.logo} />

       <Text style={styles.title}>GREAT IDEAS COMES FROM PEOPLE LIKE YOU</Text>
       <Text style={styles.text}> IMPRESSO is the connection between innovative ideas & Great Careers</Text>


         </View>
       <View style={styles.slide2}>
       <Image

      source={require('./../assets/images/obd2.png')}
         style={styles.logo} />
       <Text style={styles.title}>MARKET YOUR PROFILES TO COMPANIES</Text>
       <Text style={styles.text}> Build your innovative profile by participating or collaborating on great Ideas!</Text>


       </View>
       <View style={styles.slide3}>
       <Image

      source={require('./../assets/images/obd3.png')}
         style={styles.logo} />
       <Text style={styles.title}>EARN MONEY</Text>
       <Text style={styles.text}> Where Ideas can grow,earn royalties by participating to the ones you love to have.</Text>

       </View>


    <StartupScreen />


     </Swiper>

   );
 }
}
