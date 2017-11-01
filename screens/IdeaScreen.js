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
 ScrollView,
  tintColor } from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation"; // 1.0.0-beta.11
import { SearchBar } from "react-native-elements";

import { Entypo,Ionicons, Zocial } from '@expo/vector-icons';

import Notifications from "./SignedIn/Notifications";
import Favorites from "./SignedIn/Favorites";
import Menu from "./SignedIn/Menu";

 class IdeaBox extends React.Component {


   static navigationOptions = {
       header:null
     };

   render() {
     return (

  <View >
  <StatusBar
     barStyle="light-content"

  />

       <View  style={styles.header} >


       <Entypo name="plus" size={30} color={'white'}  style={styles.iconleft} />
         <Text style={styles.buttontext}>IDEABOX</Text>
         <Entypo name="sound-mix" size={30} color={'white'}  style={styles.iconright} />


         </View>


     <ScrollView >
     <View style={styles.container}>

     <SearchBar
     lightTheme

     placeholder='Search by name or Keyword' />

     <Image

    source={require('./../assets/Card/Ideabox.png')}
       style={styles.logo} />

       <Image

      source={require('./../assets/Card/Ideabox2.png')}
         style={styles.logo} />

         <Image

        source={require('./../assets/Card/Ideabox3.png')}
           style={styles.logo} />

    </View>

   </ ScrollView>
 </View>
);
   }
   }



   export const SignedIn = TabNavigator({
   Home: {
     screen: IdeaBox,
     navigationOptions: {
       tabBarLabel: "IdeaBox",

       tabBarIcon: ({ tintColor }) => (

                <Ionicons name="ios-bulb-outline" size={30} color={tintColor} />

       )
     }
   },
   Notification: {
     screen: Notifications,
     navigationOptions: {
       tabBarLabel: "Notifications",
       tabBarIcon: ({ tintColor }) => (
             <Ionicons name="md-notifications-outline" size={30} color={tintColor} />
       )
     }
   },
   Favorite: {
     screen: Favorites,
     navigationOptions: {
       tabBarLabel: "Favorites",
       tabBarIcon: ({ tintColor }) => (
             <Zocial name="pinboard" size={30} color={tintColor} />
       )
     }
   },

   Menu: {
     screen: Menu,
     navigationOptions: {
       tabBarLabel: "Menu",
       tabBarIcon: ({ tintColor }) => (
          <Entypo name="menu" size={30} color={tintColor} />
       )
     }
   },
 }, {
   tabBarPosition: 'bottom',
   animationEnabled: true,
   tabBarOptions: {
     activeTintColor: '#e91e63',
       showIcon: true,
   },

   
 });






export default SignedIn;


   /*
   constructor(props) {
     super(props);
     this.state ={
        user:null,
        loading:true,

     }
   }

   componentWillMount() {
       // get the current user from firebase
       // const userData = this.props.firebaseApp.auth().currentUser;
       AsyncStorage.getItem('userData').then((user_data_json) => {
         let userData = JSON.parse(user_data_json);
         this.setState({
           user: userData,
           loading: false
         });
       });
     }

  render() {

    return (

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
  }
*/


  const styles = StyleSheet.create({
     container: {
       flex: 1,
       marginTop:10,
       alignItems:'center',


  },
  header:{
    backgroundColor:'purple',
    flex: 0,
    paddingTop:30,
    height:64,
    flexDirection: 'row',
  },


  logo: {
  width: 300,
  height: 300,
  marginTop:10,


  },

buttontext: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
flex: 1,
        },

iconleft: {
          marginLeft: 10,
          justifyContent:'flex-start',
          width:64
        },

iconright: {
          marginRight: 10,
          justifyContent:'flex-end',
          width:64,
        },



  });
