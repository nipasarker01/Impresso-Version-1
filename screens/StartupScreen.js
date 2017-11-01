import React from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,StatusBar,TextInput,KeyboardAvoidingView,Alert,ActivityIndicator} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation'; // 1.0.0-beta.11
import firebase from 'firebase';
import { EvilIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import CompleteprofileScreen from './CompleteprofileScreen';
import { Constants, Facebook, Google } from 'expo';
import LoginScreen from './LoginScreen';
import OnboardingScreen from './OnboardingScreen';
import AccountScreen from './AccountScreen';
import RegisterScreen from './RegisterScreen';
import IdeaBox from './IdeaScreen';
import SwiperScreen from './Swiper';
import ForgotPassword from './ForgotPassword';
import AuthScreen from './AuthScreen';
import OptionScreen from './OptionScreen';
import Menu from './SignedIn/Menu';




class StartupScreen extends React.Component {

  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '154803601777322', // Replace with your own app id in standalone app
        { permissions: ['public_profile','email'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          const auth = firebase.auth();
          const provider = new firebase.auth.FacebookAuthProvider();
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
           auth.signInWithCredential(credential);
          this.props.navigation.navigate('IdeaBox');
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
        alert(e);
    }
  };

  _handleGoogleLogin = async () => {
      try {
        const { type, user } = await Google.logInAsync({
          androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
          iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
          androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
          iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
          scopes: ['profile', 'email']
        });

        switch (type) {
          case 'success': {
            Alert.alert(
              'Logged in!',
              `Hi ${user.name}!`,
            );
            break;
          }
          case 'cancel': {
            Alert.alert(
              'Cancelled!',
              'Login was cancelled!',
            );
            break;
          }
          default: {
            Alert.alert(
              'Oops!',
              'Login failed!',
            );
          }
        }
      } catch (e) {
        Alert.alert(
          'Oops!',
          'Login failed!',
        );
      }
    };


  render() {
    const {navigate} = this.props.navigation;



    return (

      <Image source={require('./../assets/images/aploadingbg.png')} style={styles.container}>


      <StatusBar
       barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />


              <Image

             source={require('./../assets/images/Logo.png')}
                style={styles.logo} />

                <TouchableOpacity onPress={() => navigate('Register')} style={styles.signupbutton}>
                <Text style={styles.signupbuttontext} > Create an Account</Text>
                </TouchableOpacity>

                <View style={styles.orcontainer}>
                <Image

                source={require('./../assets/images/orline.png')}
                  style={styles.orlineleft} />

                  <Text style={styles.ortext}>Or</Text>

                  <Image

                  source={require('./../assets/images/orline.png')}
                    style={styles.orlineright} />


                </View>




                <TouchableOpacity  onPress={this._handleFacebookLogin} style={styles.signupbuttonfb}>
                <EvilIcons name="sc-facebook" size={25} color="purple"  style={styles.signupbuttoniconfb}/>

                <Text style={styles.signupbuttontextfb}> Enter with Facebook  </Text>

                </TouchableOpacity>

                <TouchableOpacity  onPress={this._handleGoogleLogin} style={styles.signupbuttongl}>
                <Zocial name="googleplus" size={14} color="purple" style={styles.signupbuttonicongl}/>
                <Text style={styles.signupbuttontextgl} >  Enter with Google </Text>
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
}

const SignedOut = StackNavigator(



  {
    Home: {
      screen:StartupScreen,
    },
    Login:{
    screen:LoginScreen,

    },
    Register:{
      screen:RegisterScreen,
    },
    Option: {
      screen: OptionScreen,
    },
    Complete:{
      screen:CompleteprofileScreen,
    },
    Onboarding:{

      screen:OnboardingScreen,
    },
   Account:{
     screen:AccountScreen,
   },
   IdeaBox:{
   screen:IdeaBox,

   },
   SwiperScreen:{
     screen:SwiperScreen,
   },
   Forgot:{
   screen:ForgotPassword,

   },
   Menu:{
    screen:Menu,

   },
  },

  {
    navigationOptions: ({navigation}) => ({
      headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
    }),
  }
  );


  const resetAction = NavigationActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: 'StartupScreen'}),
      NavigationActions.navigate({ routeName: 'Menu'})
    ]
  })





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
fontSize:15,
padding:10,


},
socialmedialogin:{
  padding:20,
  width:250,
  height:35,

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

newline:{
width:.3,


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
paddingRight:12,
justifyContent:'flex-end',
},

signupbuttoniconfb:{

  justifyContent:'flex-start',
},
signupbuttongl:{

  marginTop:10,
  borderRadius: 15,
   borderWidth: 1,
   borderColor: '#fff',
   backgroundColor:'#fff',
   overflow: 'hidden' ,
   alignItems:'center',
   flex:0,
   flexDirection:'row',

   paddingVertical:2,

},
signupbuttontextgl:{
  fontSize:12,
 alignSelf:'center',
  color:"#b13ea1",
paddingRight:12,
justifyContent:'flex-end',

paddingRight:17,
},
signupbuttonicongl:{

     justifyContent:'flex-start',
     paddingRight:4,
     paddingLeft:16,
},
loginbutton:{

   backgroundColor:'transparent',
   marginTop:10,
   position: 'absolute',
   bottom:40,


},


newline:{
marginTop:10,


},

errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

orcontainer:{
flex:0,
flexDirection:'row',
backgroundColor:'transparent',

},

orlineleft:{

justifyContent:'flex-start',
height:.2,
width:50,
marginLeft:10,
marginRight:10,
marginTop:20,
marginBottom:20,

},

orlineright:{
justifyContent:'flex-end',
height:.2,
width:50,
marginLeft:10,
marginRight:10,
marginTop:20,
marginBottom:20,
},

ortext:{

justifyContent:'center',
backgroundColor:'transparent',
fontSize:12,
marginTop:10,
marginBottom:20,
color: '#fff',
},
});

export default SignedOut
