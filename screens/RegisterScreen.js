import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator

} from 'react-native';

import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import firebase from 'firebase';


export default class RegisterScreen extends React.Component {
  state = { email: '', password: '', error: '', loading: false };

      onRegisterPress() {
          this.setState({ error: '', loading: true });

          const { email, password } = this.state;
          var user = firebase.auth().currentUser;
           firebase.auth().createUserWithEmailAndPassword(email, password)
              .then((user) => {

                user.sendEmailVerification().then(function() {
             alert('Email Sent ');
              }).catch(function(e) {
                alert(e);
                   });
  this.props.navigation.navigate('Login');
            })
              .catch(function(e) {
                this.setState({
                  loading: false
                });
   alert(e);

            })
      }

      renderButtonOrSpinner() {
          if (this.state.loading) {
              return <ActivityIndicator size="large"/>;
          }

          return <TouchableOpacity onPress={this.onRegisterPress.bind(this)}  style={styles.signupbuttonsignup}>
          <Text style={styles.signupbuttontextsignup} >Create account</Text>

          </TouchableOpacity>;

        }



  render() {
    return (

      <Image source={require('./../assets/images/aploadingbg.png')} style={styles.container}>

       <StatusBar
          barStyle="light-content"

       />


        <Image

       source={require('./../assets/images/Logo.png')}
          style={styles.logosgn} />

    <KeyboardAvoidingView behavior="padding">

          <TextInput
          placeholder="Your Name"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid='transparent'
          style={styles.inputsgnup}

          />

          <TextInput
          placeholder="Your Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputsgnup}
          underlineColorAndroid='transparent'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />

          <TextInput
          placeholder="Choose a Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          returnKeyType="go"
          style={styles.inputsgnup}
          ref={(input) => this.passwordInput = input}
          value={this.state.password}
          underlineColorAndroid='transparent'
          onChangeText={password => this.setState({ password })}
          />

          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                     {this.renderButtonOrSpinner()}


    </KeyboardAvoidingView>


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

signupbutton:{
   borderRadius: 8,
    borderWidth: .5,
    borderColor: '#fff',
    backgroundColor:'transparent',
    marginTop:50,


},
signupbuttontext:{
    fontSize:15,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:4,
    paddingBottom:4,
    color:'#fff',
},

text: {
backgroundColor:'transparent',
color:'#fff',
fontSize:6,
padding:10,
paddingLeft:0,
textAlign:'left',
paddingTop:0,
},

inputsgnup:{
color:'#fff',
fontSize:15,
marginTop:15,
marginBottom:1,
borderBottomWidth: 1,
borderBottomColor: '#fff',
paddingRight:30,
textAlign:'left',


},
socialmedialogin:{
  position: 'absolute',
  bottom:20,
  width: 180,
  height: 30,

},


signupbutton:{

   backgroundColor:'rgb(162,205,231)',
   paddingHorizontal:40,
   paddingVertical:5,
   marginTop:10,

},
signupbuttontext:{
  fontSize:8,
  paddingLeft:38,
  paddingRight:38,
  paddingTop:4,
  paddingBottom:4,
  fontWeight:"700",
  color:'#fff',

},
loginbutton:{

   backgroundColor:'transparent',
   position:'absolute',
   top:30,
   right:20,
},
loginbuttontext:{
  fontSize:8,
  fontWeight:"700",
  color:'#fff',

},
logosgn: {
width: 150,
height: 65,
marginTop:100,
marginBottom:50,

},

signupbuttonsignup:{

   backgroundColor:'transparent',
   paddingHorizontal:30,
   paddingVertical:1,
   marginTop:10,
   borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
},
signupbuttontextsignup:{
  fontSize:15,
  paddingLeft:20,
  paddingRight:20,
  paddingTop:4,
  paddingBottom:4,
  fontWeight:"700",
  color:'#fff',

},

errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

});
