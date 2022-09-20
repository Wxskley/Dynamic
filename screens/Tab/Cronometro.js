import React , { Component } from 'react'; import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class App extends Component{

constructor(props){ super(props); this.state = { numero: 0, botao: 'VAI' };

//varialvel do timer do relogio
this.timer = null;

this.vai = this.vai.bind(this);
this.limpar = this.limpar.bind(this);
}

vai(){ let state = this.state;

if(this.timer != null){

  clearInterval(this.timer);
  this.timer = null ;

  state.botao = "VAI";
}else{

  this.timer = setInterval(() =>{
    let state = this.state;
    state.numero  += 0.1;
    this.setState(state);
  },100);

  state.botao = "PARAR";
}

this.setState(state);
}

limpar(){

if(this.timer != null){

  clearInterval(this.timer);
  this.timer = null ;

  
}

let state = this.state;
state.numero = 0;
state.botao = "VAI"
this.setState(state);
}

render(){

return(
  <View style={styles.container}>

    
    <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

    <View style ={styles.btnArea}>

      <TouchableOpacity style={styles.botao} onPress ={this.vai} > 
       <Text style={styles.btnTexto}>{this.state.botao}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress = {this.limpar}> 
        <Text style={styles.btnTexto}>LIMPAR</Text>
      </TouchableOpacity>

    </View>


  </View>
);
} }

const styles = StyleSheet.create({
   container:{ flex: 1, 
    paddingTop: 20 ,
     justifyContent: 
     'center', alignItems:
      'center',
       backgroundColor: '#00aeef',
       },
    timer:{ 
      marginTop: -180, 
      color:'#ffffff',
       fontSize: 90, 
       fontWeight: 'bold',
       }, 
       btnArea:{ flexDirection:'row',
        marginTop: 70, 
        height: 40, },
         botao:{ flex:1 ,
           justifyContent:'center',
            alignItems:'center', 
            backgroundColor: '#ffffff', 
            height: 40, 
            margin: 17,
             borderRadius: 9 }, 
             btnTexto:{ fontSize: 20, 
              fontWeight: 'bold', 
              color:'#00aeef' }

});