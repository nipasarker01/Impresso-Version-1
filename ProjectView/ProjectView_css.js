import {
    StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
     flex: 1,
     marginTop: 100,
     alignItems: 'center',
   },
   cardHeading: {
     fontSize: 15,
     
   },
   cardImage: {
     height: 200,
     flex:1,

   },
   iconcontainer:{

     flexDirection: 'row',
     alignItems: 'center',
     paddingVertical:20,
     paddingHorizontal:100,
   },
   iconStyle: {

     color:'red',
     justifyContent:'center',
   },

   iconStylebtm:{
     color:'rgb(230,176,178)',
   },
   iconText:{

  paddingRight:15,
  justifyContent:'center',
   },
   iconImage:{
    position:'absolute',
    top:0,
    right:0,
    backgroundColor:'transparent'


   },
  btnOne:{

   marginRight:20,
    justifyContent:'center',
    backgroundColor:'transparent',
    borderRadius: 15,
    borderWidth: .5,
    borderColor: '#000'
  },
  btntxt:{
    paddingHorizontal:20,
    paddingVertical:4,

  },
  btntxt2:{
    paddingHorizontal:20,
    paddingVertical:4,
    color:'#fff',

  },
  btnTwo:{

      justifyContent:'center',
      backgroundColor:'red',
      borderRadius: 15,
      borderWidth: .5,
      borderColor: 'red',
      overflow:'hidden',
  },

});
