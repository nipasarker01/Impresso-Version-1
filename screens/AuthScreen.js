import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
ActivityIndicator,
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import OnboardingScreen from './OnboardingScreen.js';
import StartupScreen from './StartupScreen.js';
import SwiperScreen from './Swiper';
import IdeaBox from './IdeaScreen';
import ForgotPassword from './ForgotPassword';


import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyCqOENmxG7FZjSVEVFucwV2YSc2RzYT6cI",
    authDomain: "impresso-c6b19.firebaseapp.com",
    databaseURL: "https://impresso-c6b19.firebaseio.com",
    projectId: "impresso-c6b19",
    storageBucket: "impresso-c6b19.appspot.com",
    messagingSenderId: "1038145153346"
 };
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class AuthScreen extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       user: null,
       loading: false
     };
   }


   componentWillMount(){
     var that = this;
    
      firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
          that.setState({
            user: user,
            loading: false
          })
        }else{
          that.setState({
            loading: false
          })
        }
      });
    }


    render() {
          if(this.state.loading){
            return <ActivityIndicator size="large"/>;
          }else if(this.state.user){
            return(
              <IdeaBox />
              )
          }else{
             return (
              <SwiperScreen />
             )
          }
        }
      }


const styles = StyleSheet.create({
   container: {
     flex: 1,
     height:null,
     width:null,
     alignItems: 'center',

},
});
