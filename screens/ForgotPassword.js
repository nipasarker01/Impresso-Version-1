import React from 'react';
import { StyleSheet, View,Image,
Text,
TouchableOpacity,
StatusBar,
ActivityIndicator,
TextInput,
KeyboardAvoidingView,
Alert,
AsyncStorage,

} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import firebase from 'firebase';
var emailAddress = "user@example.com";
export default class ForgotPassword extends React.Component {
  constructor(props) {
      	super(props);
      	this.state = {email: ""};
      	//
      	this.handleEmailChange = this.handleEmailChange.bind(this)
      	this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleEmailChange(e) {
      this.setState({email: e.target.value});
    }
  	handleSubmit(e) {
  	    e.preventDefault();
  	    var email = this.state.email.trim();

  	    firebase.auth().sendPasswordResetEmail(email).then(function() {
          // Email sent.
          alert("Please check your email "+email+" for instructions ");
        }, function(e) {
          alert(e)
        });
    }

  render() {
    return (

      <Image source={require('./../assets/images/aploadingbg.png')} style={styles.container}>

           <Image

          source={require('./../assets/images/Logo.png')}
             style={styles.logo} />

           <KeyboardAvoidingView behavior="padding">
           <TextInput
           placeholder="Email"
           placeholderTextColor="rgba(255,255,255,0.7)"
           returnKeyType="next"
           onChangeText={email => this.setState({ email })}
           keyboardType="email-address"
           autoCapitalize="none"
           autoCorrect={false}
           style={styles.inputlogin}
           value={this.handleEmailChange}
           underlineColorAndroid='transparent'
           />

             <TouchableOpacity onPress={this.handleSubmit} style={styles.loginbutton2}>
                      <Text style={styles.loginbuttontext} >Send Verification</Text>
                      </TouchableOpacity>

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
width: 150,
height: 65,
marginTop:100,
marginBottom:50,


},

text: {
backgroundColor:'transparent',
color:'#fff',
fontSize:12,
padding:10,


},

loginbutton2:{
backgroundColor:'transparent',
paddingHorizontal:40,
paddingVertical:2,
marginTop:10,
borderRadius: 8,
borderWidth: .5,
borderColor: '#fff',

},

loginbuttontext:{
  fontSize:12,
  paddingLeft:15,
  paddingRight:15,
  paddingTop:4,
  paddingBottom:4,
  color:'#fff',


},


inputlogin:{
 color:'#fff',
  fontSize:12,
  marginTop:15,
  marginBottom:1,
  borderBottomWidth: 1,
  borderBottomColor: '#fff',
  paddingRight:30,
  textAlign:'left',

},

forgotpassbutton:{

  backgroundColor:'transparent',
  marginTop:10,
  position: 'absolute',
  bottom:20,
},


textlogin:{

  backgroundColor:'transparent',
  color:'#fff',
  fontSize:12,


},


errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

});
