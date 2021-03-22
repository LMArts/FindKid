import React, { useState, useEffect } from 'react';
import {View, Text,TouchableOpacity, Image, FlatList } from 'react-native';
import {css} from './DicaCss';
import config from '../../config/config';
import { TextInput } from 'react-native-gesture-handler';


export default function Dicas(props){

  const [dica, setDica] = useState([]);
  const [busca, setBusca] = useState(null);

  useEffect(() => {
    async function listaDica() {
      const response = await fetch(config.urlRoot + 'selectDica');
      const data = await response.json();
      setDica(data);
    }
    listaDica();
  })
  
  return(

              <View>

                  <View style={css.contentDicas2}>
                    <View style={css.searchInput}>
                      <TextInput
                        placeholder="Pesquisar"
                        onChangeText={text => setBusca(text)}
                      />
                      <TouchableOpacity onPress={() => props.navigation.navigate('SearchDica', { dado: busca })}>
                        <Image style={css.searchDica} source={require('../../assets/image/search.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                  <View style={css.contentDicas}>
                    <FlatList
                      keyExtractor={(item, index) => index.toString()}
                      data={dica}
                      renderItem={({ item }) => (
                        <TouchableOpacity style={css.contentDicas} onPress={() => props.navigation.navigate('ExibeDica', { id: item.id })}>
                          <Text style={css.textInformacoes}>{item.tituloDica}</Text>
                          <Text style={css.labelInformacoes}>{item.resumoDica}</Text>
                          <Image style={css.arrowDica} source={require('../../assets/image/arrow.png')} />
                          <View style={css.divisor}></View>
                        </TouchableOpacity>
                      )}
                    />
                  </View>

                 
              </View>            
  );
}