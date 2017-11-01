import React from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,
  StatusBar,TextInput,KeyboardAvoidingView,Alert,
Button,TouchableHighlight,

} from 'react-native';
import { StackNavigator, TabNavigator,NavigationActions } from "react-navigation"; // 1.0.0-beta.11

import StartupScreen from './../StartupScreen';
import firebase from 'firebase';

const thisClass = this; //  here is how you assign this to variable
const accountStyles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
});




const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Menu',
          params: {}
        })
      ]
    })
    const goHome = NavigationActions.navigate({
      routeName: 'StartupScreen',
      params: {}
    })



export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    // get the current user from firebase
    const userData = firebase.auth().currentUser;
    this.setState({
      user: userData,
      loading: false
    });

  }

  render() {



    // If we are loading then we display the indicator, if the account is null and we are not loading
    // Then we display nothing. If the account is not null then we display the account info.
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
       this.state.user &&
        <View style={styles.body}>
          <View style={accountStyles.email_container}>
            <Text style={accountStyles.email_text}>{this.state.user.email}</Text>
          </View>


          <TouchableHighlight onPress={this.logout} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Logout</Text>
          </TouchableHighlight>
        </View>
      ;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          {content}
        </View>
      </View>
    );
  }



  logout() {
    firebase.auth().signOut().then(() => {

      const resetAction = NavigationActions.reset({
                 index: 0,
                 actions: [NavigationActions.navigate({ routeName: 'SignedOut' })]
               })
               this.props.screenProps.outerNavigation.dispatch(resetAction)
}, (error) => {
console.log(error);
});
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
