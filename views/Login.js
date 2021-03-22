import AsyncStorage from '@react-native-community/async-storage';
import React,{useEffect, useState} from 'react';
import {View, Text, TextInput,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/css';
import config from '../config/config';
import * as LocalAuthentication from 'expo-local-authentication';



export default function Login({navigation}){
  const [display, setDisplay]=useState('none');
  const [responsavel, setUser]=useState(null);
  const [password, setPassword]=useState(null);
  const [login, setLogin]=useState(false);

  //verificando se o responsavel possui algum login
  useEffect(()=>{
    verifyLogin()
  },[]);
  {/**useEffect(()=>{
    if(login === true){
      biometric();
    }
  },[login]);**/}
  async function verifyLogin(){
    let response = await AsyncStorage.getItem('responsavelData');
    let json = await JSON.parse(response);
    if(json !== null){
      setUser(json.emailResp);
      setPassword(json.senhaResp);
      setLogin(true);
    }
    console.log(json)
  }
  //Biometria
  {/**async function biometric(){
    let compatible = await LocalAuthentication.hasHardwareAsync();
    if(compatible){
      let biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if(!biometricRecords){
        alert('Biometria não cadastrada');
      }else{
        let result = await LocalAuthentication.authenticateAsync();
        if(result.success){
          sendForm();
        }else{
          setUser(null);
          setPassword(null);
        }
      }
    }
  }**/}

  async function sendForm(){
    let response = await fetch(`${config.urlRoot}login`,{
      method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          emailResp: responsavel,
          senhaResp: password
        })
    })
    let json = await response.json();
    if(json === 'error'){
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      }, 1000);
      await AsyncStorage.clear();
    }else{
       await AsyncStorage.setItem('responsavelData', JSON.stringify(json));
       navigation.navigate('Menu');
    }
  }

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.containerLogin, css.darkbg]}>
      
      <View style={css.login__logomarca}>
        <Text style={css.login__textLogomarca}>Faça login para continuar</Text>
      </View>
      
      <View>
        <Text style={css.login__mensagem(display)}>Usuário ou senha inválida!</Text>
      </View>
      
      <View  style={css.login__form}>
        
        <TextInput  style={css.login__input} placeholder="Informe seu email" onChangeText={text=>setUser(text)}/>
        <TextInput style={css.login__input} placeholder="Informe sua senha" secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
        
        <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
          <Text style={css.login__buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PrimeiroAcesso')}>
          <Text style={css.login__buttonFirstAccess}>
            Primeiro Acesso
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={css.login__buttonFirstAccess}>
            Esqueci a Senha
            </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>

  )
}