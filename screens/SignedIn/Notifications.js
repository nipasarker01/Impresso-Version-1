import React from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,StatusBar,TextInput,KeyboardAvoidingView,Alert,} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import firebase from 'firebase';




export default class Notifications extends React.Component {


  render() {
    return (

      <Image source={require('./../../assets/images/aploadingbg.png')} style={styles.container}>

       <StatusBar
          barStyle="light-content"

       />


        <Image

       source={require('./../../assets/images/Logo.png')}
          style={styles.logosgn} />

<Text style={styles.text}>
       Hi I am a cool Notification.

       </Text>
        </Image>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:null,
    width:null,
    alignItems: 'center',

},
logo: {
width: 160,
height: 103,
marginTop:100,
marginBottom:50,


},

text: {
backgroundColor:'transparent',
color:'#fff',
fontSize:20,
padding:10,

},


});
