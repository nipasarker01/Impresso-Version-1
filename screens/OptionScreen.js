import React from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,StatusBar,TextInput,KeyboardAvoidingView,Alert,} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import firebase from 'firebase';
import { EvilIcons,Entypo,FontAwesome } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import CompleteprofileScreen from './CompleteprofileScreen';
import { Constants, Facebook, Google } from 'expo';
import LoginScreen from './LoginScreen';
import OnboardingScreen from './OnboardingScreen';
import AccountScreen from './AccountScreen';
import RegisterScreen from './RegisterScreen';
import IdeaBox from './IdeaScreen';
import LoadingScreen from './LoadingScreen';







export default class OptionScreen extends React.Component {



  render() {
    return (

        <Image source={require('./../assets/images/aploadingbg.png')} style={styles.container}>


             <StatusBar
                barStyle="light-content"

             />

          <Image

             source={require('./../assets/images/Logo.png')}
                style={styles.logo} />



                <TouchableOpacity style={styles.signupbuttonfb}>
                <FontAwesome name="linkedin" size={12} color="purple"  style={styles.signupbuttoniconfb}/>
                <Text style={styles.signupbuttontextfb} > Enter with LinkedIn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupbuttonfb}>
                <EvilIcons name="sc-twitter" size={16} color="purple"  style={styles.signupbuttonicontwt}/>
                <Text style={styles.signupbuttontexttwt} > Enter with Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.signupbuttonfb}>
                <Entypo name="sina-weibo" size={12} color="purple"  style={styles.signupbuttoniconwbo}/>
                <Text style={styles.signupbuttontextwbo} > Enter with Weibo</Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.signupbutton}>
                <Text style={styles.signupbuttontext} > Create an Account</Text>
                </TouchableOpacity>



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
width: 150,
height: 65,
marginTop:100,
marginBottom:50,


},

signupbutton:{
   borderRadius: 15,
    borderWidth: .5,
    borderColor: '#fff',
    backgroundColor:'transparent',
    marginTop:50,


},
signupbuttontext:{
    fontSize:15,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:2,
    paddingBottom:2,
    color:'#fff',
},
loginbuttontext:{
  fontSize:15,
  paddingLeft:15,
  paddingRight:15,
  paddingTop:4,
  paddingBottom:4,
  color:'#fff',


},



signupbuttonfb:{

    marginTop:10,
    borderRadius: 15,
     borderWidth: 1,
     borderColor: '#fff',
     backgroundColor:'#fff',
     overflow: 'hidden' ,
     alignItems:'center',
     flex:0,
     flexDirection:'row',




},
signupbuttontextfb:{
    fontSize:12,
   alignSelf:'center',
    color:"#b13ea1",
paddingRight:9,
justifyContent:'flex-end',
paddingVertical:2,
},
signupbuttontexttwt:{
    fontSize:12,
   alignSelf:'center',
    color:"#b13ea1",
paddingRight:15,
justifyContent:'flex-end',
paddingVertical:2,
},
signupbuttonicontwt:{

  justifyContent:'flex-start',
  paddingRight:4,
  paddingLeft:7,
  paddingVertical:2,

},
signupbuttoniconwbo:{
  justifyContent:'flex-start',
  paddingRight:6,
  paddingLeft:7,
  paddingVertical:2,


},

signupbuttontextwbo:{

  fontSize:12,
  alignSelf:'center',
  color:"#b13ea1",
  paddingRight:17,
  justifyContent:'flex-end',
  paddingVertical:2,

},


signupbuttoniconfb:{

  justifyContent:'flex-start',
  paddingRight:4,
  paddingLeft:10,
  paddingVertical:2,
},




});
