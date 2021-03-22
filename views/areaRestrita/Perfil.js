import React,{useState, useEffect} from 'react';
import {View, Text,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {css} from '../../assets/css/css';
import Menu from '../areaRestrita/Menu';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../config/config.json'

export default function Perfil({navigation}){
  const [idResposavel, setIdResponsavel] = useState(null);
  const [senhaAntiga, setSenhaAntiga] = useState(null);
  const [novaSenha, setNovaSenha] = useState(null);
  const [confNovaSenha, setConfNovaSenha] = useState(null);
  const [msg, setMsg] = useState(null);

  useEffect(()=>{
    async function getIdResponsavel(){
      let response = await AsyncStorage.getItem('responsavelData');
      let json = JSON.parse(response);
      setIdResponsavel(json.id);
    }
    getIdResponsavel();
  });

  async function trocaSenha(){
      let response=await fetch(`${config.urlRoot}verifyPass`,{
          method:'POST',
          body:JSON.stringify({
              id: idResposavel,
              senhaAntiga: senhaAntiga,
              novaSenha: novaSenha,
              confNovaSenha: confNovaSenha
          }),
          headers:{
              Accept: 'application/json',
              'Content-Type': 'application/json'
          }
      });
      let json=await response.json();
      setMsg(json);
  }
  return(
    <ScrollView>
    <View>
            <TouchableOpacity style={css.arrowReturn} onPress={() => navigation.navigate('Menu')} >
            <Image style={css.arrowReturnContent}
                  source={require('../../assets/image/arrowReturn.png')}
                />
                    </TouchableOpacity>
            </View>
    <View style={css.updateSenha__form}>
       <Text>{msg}</Text>
      <TextInput style={css.login__input} placeholder="Informe sua senha antiga" onChangeText={text=>setSenhaAntiga(text)} />
      <TextInput style={css.login__input} placeholder="Informe sua nova senha" onChangeText={text=>setNovaSenha(text)}/>
      <TextInput style={css.login__input} placeholder="Informe sua confirmação de senha" onChangeText={text=>setConfNovaSenha(text)}/>
      <TouchableOpacity style={css.login__button} onPress={()=>trocaSenha()}>
          <Text style={css.login__buttonText}>
            Alterar senha
          </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}