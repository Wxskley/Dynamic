import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,KeyboardAvoidingView,TextInput, ImageBackground,ScrollView} from 'react-native'
import { auth } from '../firebase'
import{sendPasswordResetEmail} from 'firebase/auth';
import { async } from '@firebase/util';



const ForgetPassword =()=>{
    const navigation = useNavigation();

    const[forget,setForgetEmail] = useState('');

    async function reset(){
    
     await sendPasswordResetEmail(auth, forget)
        .then(() => {
          alert('Email Enviado')
          navigation.replace('Login')
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    return(
      <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding":"height"}
      style={styles.background}>
        <ImageBackground   source={require('../assets/RstPassword.png')} 
          style={{ width:'100%', flex:1,resizeMode:'cover',padding:0}}  >
          <ScrollView style={{width:"100%"}}/>
       <View style={styles.container1}>
       <TextInput
      style={styles.input}
     value={forget}
     onChangeText={setForgetEmail}   
       placeholder = 'E-mail'
       placeholderTextColor={'white'}
     />
         <TouchableOpacity style={styles.btn12}  onPress={reset}>
        <Text style={{color:'white',textAlign:'center', fontSize:20,fontWeight:'bold' }}>RECUPERAR SENHA</Text>
      </TouchableOpacity>
    

       </View>
       </ImageBackground>
   </KeyboardAvoidingView>
   )
}

export default ForgetPassword
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
      width: '50%',
      height:35,
      backgroundColor:'#FFA500',
      marginBottom:12,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor:'#000000',
    marginLeft:110,
    
    
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
      marginBottom:80,
     
    },
  input:{
  
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