import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity ,
 } from 'react-native';
import { Container, Header, Content, Card, CardItem, Left, Body, Right, Button, Footer} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './ProjectView_css';



const Greenjet = require('./assets/images/projectimg.png');

export default class ProjectView extends Component {

  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'PROJECT DESCRIPTION', img: { Greenjet } },

      ],
    };
  }




  render() {
    return (
      <View style={{flex:1}}>

      <Header />
       <Content>
        <View style={styles.iconContainer}>

            <Icon name="favorite-border" size={25} style={styles.iconStyle} />
            <Text style={styles.iconText}>35</Text>
            <Icon name="share" size={25} style={styles.iconStyle} />
              <Text style={styles.iconText}>24</Text>
            <Icon name="bookmark" size={25} style={styles.iconStyle} />
                <Text style={styles.iconText}>4</Text>
                <Icon name="chat-bubble-outline" size={25} style={styles.iconStyle} />

                <Text style={styles.iconText}>9</Text>

        </View>

        <View style={{ flexDirection: 'row',justifyContent:'center' }}>


        <TouchableOpacity style={styles.btnOne}>
        <Text style={styles.btnTxt} >SHARED FILES</Text>
        </TouchableOpacity>


             <TouchableOpacity style={styles.btnTwo}>
             <Text style={styles.btnTxt2} >FIND COLLABS</Text>
             </TouchableOpacity>


       </View>


            <Card>

            <CardItem header>
            <Left>

                <Text style={styles.cardHeading}>PROJECT DESCRIPTION</Text>

            </Left>

            <Right>
              <Icon name="mode-edit" size={25}  />

            </Right>
            </CardItem>

              <CardItem style={{ flex:1 }}>
                <Text style={{ textAlign:'justify'}}>
                Green Jet Ski is a project for water adventure lovers.It is a
                personal watercraft that can be used for sports or just to
                have fun with your friends and familly.It is inspired on a turtle
                and it incorporates a futuristic design that will make users
                travel 20 years from now.
                </Text>
              </CardItem>
              <CardItem cardBody>


                <Image source={Greenjet} style={styles.cardImage} />
                 <Icon name="mode-edit" size={25} style={styles.iconImage} />
              </CardItem>

              <CardItem style={{ flexDirection: 'row',justifyContent:'center' }} >


                 <Icon name="fiber-manual-record" size={25} style={styles.iconStylebtm} />

                 <Icon name="fiber-manual-record" size={15} style={styles.iconStylebtm} />

              </CardItem>
            </Card>

</Content>

<Footer />
      </View>
    );
  }
}
