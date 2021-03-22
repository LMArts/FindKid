import React from 'react';
import {View, Text, ScrollView,Image } from 'react-native';
import {css} from '../../assets/css/css';


export default function Sobre({}){
  
  return(
    <ScrollView>
      <View style={css.dicasResponse}>
      <Image style={css.imageDicas} source={require('../../assets/image/icone.png')}/>
        <Text style={css.dicasResponseTitle}>Conheça mais nosso App!!</Text>
        <Text style={css.dicasResponseContent}>O FindKid é um aplicativo que
        tem por objetivo auxiliar na identificação e localização de crianças
        desaparecidas em locais aglomerados. A partir do QR Code gerado com
        os dados da criança cadastrada é possível imprimí-lo e utilizá-lo
        como, por exemplo, em uma pulseira de identificação. Dessa forma,
        caso a criança se perda, outro usuário da aplicação que a encontrar 
        poderá escanear o código com seu aplicativo, visualizar os dados dela
        e atualizar sua localização, facilitando o reencontro com os responsáveis.</Text>
      </View>
    </ScrollView>
  );
}