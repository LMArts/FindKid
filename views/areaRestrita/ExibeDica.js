import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView,Image } from 'react-native';
import { css } from './DicaCss';
import config from '../../config/config';


export default function ExibeDica(props){

  const [tituloDica, setTituloDica] = useState(null);
  const [descricaoDica, setDescricaoDica] = useState(null);

  useEffect(() => {
    async function readDica() {
      let response = await fetch(
        config.urlRoot + 'readDica', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: props.route.params.id
        })
      });
      let json = await response.json();
      setTituloDica(json.tituloDica);
      setDescricaoDica(json.descricaoDica);
    };
    readDica();
  }, []);
  
  return(
    <ScrollView>
      <View style={css.dicasResponse}>
          <Image style={css.imageDicas}source={require('../../assets/image/dica01.png')}/>
          <Text style={css.dicasResponseTitle}>{tituloDica}</Text>
          <Text style={css.dicasResponseContent}>{descricaoDica}</Text>
      </View>
    </ScrollView>
  );
}