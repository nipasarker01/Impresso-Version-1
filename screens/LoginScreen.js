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

export default class LoginScreen extends React.Component {
  state = { email: '', password: '', error: '', loading: false };

      onLoginPress() {
          this.setState({ error: '', loading: true });

          const { email, password } = this.state;
          firebase.auth().signInWithEmailAndPassword(email, password)
              .then((user) => { this.setState({ error: '', loading: false });

                this.props.navigation.navigate('IdeaBox');

            })
            .catch(function(e) {

                      alert(e);
          })
    }
  

      renderButtonOrSpinner() {
          if (this.state.loading) {
              return <ActivityIndicator size="large"/>;
          }

          return <TouchableOpacity onPress={this.onLoginPress.bind(this)} style={styles.loginbutton2}>
          <Text style={styles.loginbuttontext} >LOG IN</Text>
          </TouchableOpacity>;
          }



  render() {
       const {navigate} = this.props.navigation;

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
             onSubmitEditing={() => this.passwordInput.focus()}
             keyboardType="email-address"
             autoCapitalize="none"
             autoCorrect={false}
             style={styles.inputlogin}
             underlineColorAndroid='transparent'
             value={this.state.email}
             onChangeText={email => this.setState({ email })}
             />

             <TextInput
             placeholder="Password"
             placeholderTextColor="rgba(255,255,255,0.7)"
             secureTextEntry
             returnKeyType="go"
             underlineColorAndroid='transparent'
             style={styles.inputlogin}
             value={this.state.password}
             onChangeText={password => this.setState({ password })}
             />

             <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                        {this.renderButtonOrSpinner()}

           </KeyboardAvoidingView>




           <TouchableOpacity onPress={() => navigate('Forgot')}  style={styles.forgotpassbutton}>
           <Text style={styles.textlogin} >FORGOT PASSWORD</Text>
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

text: {
backgroundColor:'transparent',
color:'#fff',
fontSize:6,
padding:10,


},

loginbutton2:{
backgroundColor:'transparent',
paddingHorizontal:40,
paddingVertical:2,
marginTop:10,
borderRadius: 15,
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
  bottom:40,
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
