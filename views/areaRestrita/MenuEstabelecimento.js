import React, {useState,useEffect} from 'react';
import { View, Text, BackHandler, Alert, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/css';

export default function MenuEstabelecimento({navigation}){

  const [user, setUser] = useState(null);

  useEffect(()=>{
    async function getUser(){
      let response = await AsyncStorage.getItem('estabelecimentoData');
      let json = JSON.parse(response);
      setUser(json.nomeEstabelecimento);
    }
    getUser();
  },[]);

  async function logout(){
    await AsyncStorage.clear();
    navigation.navigate('GetStarted');
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
              <TouchableOpacity>
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
                onPress={() => navigation.navigate('PerfilEstabelecimento')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/user.png')}
                />
                <Text style={css.titleMenu}>Meu perfil</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={css.contentF} >
              <TouchableOpacity
                onPress={() => navigation.navigate('PerfilResponsavel')}>
                <Image style={css.imageMenu}
                  source={require('../../assets/image/user.png')}
                />
                <Text style={css.titleMenu}>Retirada</Text>
              </TouchableOpacity>
            </View> */}
            

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