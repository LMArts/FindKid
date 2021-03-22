import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,TextInput,KeyboardAvoidingView,Image } from 'react-native';
import config from '../../../config/config.json';
import {css} from '../../../assets/css/css';
import AsyncStorage from '@react-native-community/async-storage';



export default function LoginEstabelecimento({navigation}){
    const [display, setDisplay]=useState('none');
    const [estabelecimento, setEstabelecimento]=useState(null);
    const [senhaEstabelecimento, setSenhaEstabelecimento]=useState(null);
    const [login, setLoginEstabelecimento]=useState(false);
  
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
      let response = await AsyncStorage.getItem('estabelecimentoData');
      let json = await JSON.parse(response);
      if(json !== null){
        setEstabelecimento(json.emailEstabelecimento);
        setSenhaEstabelecimento(json.senhaEstabelecimento);
        setLoginEstabelecimento(true);
      }
      console.log(json);
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
            setEstabelecimento(null);
            setPasswordEstabelecimento(null);
          }
        }
      }
    }**/}
  
    async function sendForm1(){
      let response = await fetch(`${config.urlRoot}loginEstabelecimento`,{
        method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            emailEstabelecimento: estabelecimento,
            senhaEstabelecimento: senhaEstabelecimento
          })
      })
      let json = await response.json();
      if(json === 'error'){
        setDisplay('flex');
        setTimeout(()=>{
          setDisplay('none');
        }, 10000);
        await AsyncStorage.clear();
      }else{
         await AsyncStorage.setItem('estabelecimentoData', JSON.stringify(json));
         navigation.navigate('MenuEstabelecimento');
      }
    }
  
    return (
      
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.containerLogin, css.darkbg]}>

        <View style={css.login__logomarca}>
          <Text style={css.login__textLogomarca}>Faça Login para continuar</Text>
        </View>
        
        <View>
          <Text style={css.login__mensagem(display)}>Usuário ou senha inválidos!</Text>
        </View>
        
        <View  style={css.login__form}>
          
          <TextInput  style={css.login__input} placeholder="Informe seu email" onChangeText={text=>setEstabelecimento(text)}/>
          <TextInput style={css.login__input} placeholder="Informe sua senha" secureTextEntry={true} onChangeText={text=>setSenhaEstabelecimento(text)}/>
          
          <TouchableOpacity style={css.login__button} onPress={()=>sendForm1()}>
            <Text style={css.login__buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PrimeiroAcessoEstabelecimento')}>
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