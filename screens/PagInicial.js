import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,KeyboardAvoidingView,ImageBackground} from 'react-native'
import { auth } from '../firebase'

const PagInicial = ({navigation}) => {
 

 
  return (
    <KeyboardAvoidingView style={styles.background}>
    <ImageBackground   source={require('../assets/Home.png')} 
    style={{ width:'100%',height:'100%',marginTop:0}}  >
     <View style={styles.container}>
     
  <Text style={{marginTop:'125%'}}></Text>
  <TouchableOpacity style={[styles.btn12,{width:'80%',height:50}]} onPress={() => navigation.navigate('Login')}>
      <Text style={{color:'white',textAlign:'center', fontSize:20,fontWeight:'bold' ,justifyContent:'center'}}>SING IN / CREATE ACCOUNT</Text>
  </TouchableOpacity>
  </View>
  </ImageBackground>
</KeyboardAvoidingView>
  )
}
export default PagInicial
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
      width:'100%',
      
      
  
      
    },
  //botoes de login e pagina home
    btn12:{
      width: '78%',
      height:48,
      backgroundColor:'#FFA500',
      marginBottom:12,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
      shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor:'#000000',
    
    },
    //inputs pagina login
    background:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
     
    },
    container1:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      marginTop:240,
     
    },
  input:{
   borderRadius:7,
   padding:10,
   marginBottom:15,
   borderBottomWidth:1,
   borderBottomColor:'white',
   height:48,
   width:'80%',
   fontSize:17,
   color:'white'
  },
  
  
  });
  