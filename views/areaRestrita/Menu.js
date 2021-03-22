import React, {useState,useEffect} from 'react';
import { View, Text, BackHandler, Alert, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/css';

export default function Menu({navigation}){

  const [user, setUser] = useState(null);

  useEffect(()=>{
    async function getUser(){
      let response = await AsyncStorage.getItem('responsavelData');
      let json = JSON.parse(response);
      setUser(json.nomeCompletoResp);
    }
    getUser();
  },[]);

  async function logout(){
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  useEffect(() => {
      const backAction = () => {
        Alert.alert("Alerta!","Deseja realmente sair?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () => 
            BackHandler.exitApp() 
        }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  
  }, []);

  return(
    <SafeAreaView>

      <ScrollView>

        <View style={css.areaMenu}>

          <Text style={css.wellcomeUser}>Olá, {user} </Text>

          <View style={css.containerMenu}>

            <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Parceiros')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/parceiros.png')}
                />
                <Text style={css.titleMenu}>Parceiros</Text>
              </TouchableOpacity>
            </View>

            <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('ListaCrianca')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/icone.png')}
                />
                <Text style={css.titleMenu}>Mapa</Text>
              </TouchableOpacity>
            </View>

            <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Scanner')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/qrcode.png')}
                />
                <Text style={css.titleMenu}>Scanner</Text>
              </TouchableOpacity>
            </View>

            <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Rastreio')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/alerta.png')}
                />
                <Text style={css.titleMenu}>Alerta</Text>
              </TouchableOpacity>
            </View>

            <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Crianca')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/crianca.png')}
                />
                <Text style={css.titleMenu}>Criança</Text>
              </TouchableOpacity>
            </View>

            <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Dicas')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/dicas.png')}
                />
                <Text style={css.titleMenu}>Dicas</Text>
              </TouchableOpacity>
            </View>

            <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('PerfilResponsavel')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/user.png')}
                />
                <Text style={css.titleMenu}>Meu perfil</Text>
              </TouchableOpacity>
            </View>

            <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Sobre')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/sobre.png')}
                />
                <Text style={css.titleMenu}>Sobre</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={css.buttonExit} >
            <TouchableOpacity onPress={() => logout()}>
              <Text style={css.titleExit}>Sair</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}