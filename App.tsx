import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput, Button } from "react-native";

interface IAppProps{
  
}

interface IAppState{
  textoFrase: string;
  img: any;
}

const FRASES = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'O riso é a menor distância entre duas pessoas.',
  'A sorte favorece a mente bem preparada.',
  'A paciência na adversidade é sinal de um coração zangado.',
  'A verdadeira viúva é uma paraiba.',
  'O amor é a alegria mais bela das alegrias.',
  'A esperança é a alegria mais bela das alegrias.',
  'A paciência é a alegria mais bela das alegrias.',
  'A esperança é a alegria mais bela das alegrias.',
  'A esperança é a alegria mais bela das alegrias.',
]

class App extends Component<IAppProps,IAppState>{

  constructor(props:IAppProps){
    super(props);
    this.state = {
      textoFrase:'',
      img: require('./src/biscoito.png')
    };
    this.handleMudarFrase = this.handleMudarFrase.bind(this);
  }

  handleMudarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * FRASES.length);
    this.setState({textoFrase: FRASES[numeroAleatorio]});
    this.setState({img: require('./src/biscoitoAberto.png')});
  }

  render(): React.ReactNode {

    return(
      <View style={styles.container}>
        <Image
        source={this.state.img}
        style={styles.img}/>
        <Text style={styles.textoFrase}>
          {this.state.textoFrase}
        </Text>
        <TouchableOpacity style={styles.botao} onPress={this.handleMudarFrase}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Quebre Biscoito
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width:250,
    height:250
  },
  textoFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin:30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width:230,
    height:50,
    borderColor:'#dd7b22',
    borderWidth:2,
    borderRadius:25
  },
  btnArea:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22'
  }

});

export default App;