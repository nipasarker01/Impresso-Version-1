import React from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,StatusBar,TextInput,KeyboardAvoidingView,Alert,} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import { EvilIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

 export default class CompleteprofileScreen extends React.Component {

   static navigationOptions = {
       header:null
     };

   render() {
     return (

         <Image source={require('./../assets/images/aploadingbg.png')} style={styles.container}>


              <StatusBar
                 barStyle="light-content"

              />


           <Text style={styles.othertext}> INNOVATOR PROFILE </Text>

           <TextInput
           placeholder="First Name"
           placeholderTextColor="rgba(255,255,255,0.7)"
           returnKeyType="next"
           autoCapitalize="none"
           autoCorrect={false}
           style={styles.inputsgnup}

           />

           <TextInput
           placeholder="Last Name"
           placeholderTextColor="rgba(255,255,255,0.7)"
           returnKeyType="next"
           autoCapitalize="none"
           autoCorrect={false}
           style={styles.inputsgnup}

           />
     <Text style={styles.othertext1}>ADD A PROFILE PHOTO</Text>

     <Image

        source={require('./../assets/images/Photobuttons.png')}
           style={styles.logo} />


   <TouchableOpacity style={styles.signupbutton}>
                           <Text style={styles.signupbuttontext} >NEXT</Text>
                           </TouchableOpacity>

        </Image>

     );
   }
   }




/*  render() {

    return (

      class CompleteprofileScreen extends React.Component {
        static navigationOptions = {
            title: 'COMPLETE YOUR PROFILE',
          };

        render() {
          return (

              <Image source={require('./../assets/images/aploadingbg.png')} style={styles.container}>


                   <StatusBar
                      barStyle="light-content"

                   />

                <TEXT>INNOVATOR PROFILE</TEXT>

                <TextInput
                placeholder="First Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputsgnup}

                />

                <TextInput
                placeholder="Last Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputsgnup}

                />
          <TEXT>ADD A PROFILE PHOTO</TEXT>

          <Image

             source={require('./../assets/images/Photobuttons.png')}
                style={styles.logo} />


        <TouchableOpacity style={styles.signupbutton}>
                                <Text style={styles.signupbuttontext} >NEXT</Text>
                                </TouchableOpacity>

             </Image>

          );
        }
        }


      <Image source={require('./../assets/images/aploadingbg.png')} style={styles.container}>


             <StatusBar
                barStyle="light-content"

             />

              <Image

             source={require('./../assets/images/Logo.png')}
                style={styles.logo} />

                <TouchableOpacity onPress={() => navigate('Register')} style={styles.signupbutton}>
                <Text style={styles.signupbuttontext} > Create an Account</Text>
                </TouchableOpacity>





                <TouchableOpacity  onPress={this._handleFacebookLogin} style={styles.signupbuttonfb}>

                <Text style={styles.signupbuttontextfb} ><EvilIcons name="sc-facebook" size={5} color="purple" />  Enter with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={this._handleGoogleLogin} style={styles.signupbuttongl}>
                <Text style={styles.signupbuttontextgl} ><Zocial name="googleplus" size={5} color="purple" /> Enter with Google</Text>
                </TouchableOpacity>




                <TouchableOpacity onPress={() => navigate('Option')}>
                <Text style={styles.text} >MORE OPTIONS</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => navigate('Login')} style={styles.loginbutton}>
                <Text style={styles.loginbuttontext} >LOG IN</Text>
                </TouchableOpacity>

       </Image>
  );
  }
}*/

  const styles = StyleSheet.create({
     container: {
       flex: 1,
       height:null,
       width:null,
       alignItems: 'center',

  },


  logo: {
  width: 62,
  height: 69,

  },

  othertext: {
  backgroundColor:'transparent',
  color:'#fff',
  fontSize:6,
  padding:10,
  marginTop:150,

  },
  othertext1: {
  backgroundColor:'transparent',
  color:'#fff',
  fontSize:6,
  padding:10,
  marginTop:20,

  },
  comproftext: {
    backgroundColor:'transparent',
    color:'#fff',
    fontSize:8,
    padding:10,
    marginTop:50,



  },
  socialmedialogin:{
    padding:20,
    width:250,
    height:35,

  },
  signupbutton:{
     borderRadius: 8,
      borderWidth: .5,
      borderColor: '#fff',
      backgroundColor:'transparent',
      marginTop:50,


  },
  signupbuttontext:{
      fontSize:6,
      paddingLeft:40,
      paddingRight:40,
      paddingTop:4,
      paddingBottom:4,
      color:'#fff',
  },

  signupbuttonfb:{

      marginTop:10,
      borderRadius: 8,
       borderWidth: 1,
       borderColor: '#fff',
       backgroundColor:'#fff',
       overflow: 'hidden' ,




  },
  signupbuttontextfb:{
      fontSize:6,
      paddingLeft:15,
      paddingRight:15,
      paddingTop:6,
      paddingBottom:4,
      color:"#b13ea1",

  },
  signupbuttongl:{

      marginTop:10,

  },
  signupbuttontextgl:{
      fontSize:6,
      paddingLeft:18,
      paddingRight:18,
      paddingTop:6,
      paddingBottom:4,
      color:"#b13ea1",
      borderRadius: 8,
       borderWidth: 1,
       borderColor: '#fff',
       backgroundColor:'#fff',
       overflow: 'hidden' ,
  },
  loginbutton:{

     backgroundColor:'transparent',
     marginTop:10,
     position: 'absolute',
     bottom:20,


  },
  loginbuttontext:{
    fontSize:6,
    color:'#fff',


  },


  inputsgnup:{
  color:'#fff',
  fontSize:8,
  marginTop:15,
  marginBottom:1,
  borderBottomWidth: 1,
  borderBottomColor: '#fff',
  paddingRight:40,
  textAlign:'left',
  backgroundColor:'transparent',
  color:'#fff',
  fontSize:6,
  padding:10,
  marginTop:20,





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
     borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
  },
  signupbuttontextsignup:{
    fontSize:8,
    paddingLeft:15,
    paddingRight:15,
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
