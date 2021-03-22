import GetStarted from './views/GetStarted/GetStarted';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './views';
import Menu from './views/areaRestrita/Menu';
import MenuEstabelecimento from './views/areaRestrita/MenuEstabelecimento';
import Cadastro from './views/areaRestrita/Cadastro';
import Scanner from './views/areaRestrita/Scanner';
import Crianca from './views/areaRestrita/Crianca';
import PerfilResponsavel from './views/areaRestrita/PerfilResponsavel';
import PerfilCrianca from './views/areaRestrita/PerfilCrianca';
import ConfiguracaoPerfil from './views/areaRestrita/ConfiguracaoPerfil';
import ConfiguracaoPerfilCrianca from './views/areaRestrita/ConfiguracaoPerfilCrianca';
import ConfiguracaoPerfilResponsavel from './views/areaRestrita/ConfiguracaoPerfilResponsavel';
import Dicas from './views/areaRestrita/Dicas';
import SearchDica from './views/areaRestrita/SearchDica';
import SearchParceiro from './views/areaRestrita/SearchParceiro';
import Sobre from './views/areaRestrita/Sobre';
import Mapa from './views/areaRestrita/mapa/mapa';
import Parceiros from './views/areaRestrita/Parceiros/Parceiros';
import ExibeParceiro from './views/areaRestrita/ExibeParceiro';
import ExibeDica from './views/areaRestrita/ExibeDica';
import LoginEstabelecimento from './views/areaEstabelecimento/LoginEstabelecimento/LoginEstabelecimento';
import PrimeiroAcesso from './views/areaRestrita/PrimeiroAcesso/PrimeiroAcesso';
import PrimeiroAcessoEstabelecimento from './views/areaEstabelecimento/LoginEstabelecimento/PrimeiroAcessoEstabelecimento';
import PerfilEstabelecimento from './views/areaEstabelecimento/LoginEstabelecimento/PerfilEstabelecimento';
import AtualizaSenhaEstabelecimento from './views/areaEstabelecimento/LoginEstabelecimento/AtualizaSenhaEstabelecimento';
import ConfiguracaoPerfilEstabelecimento from './views/areaEstabelecimento/LoginEstabelecimento/ConfiguracaoPerfilEstabelecimento';
import ListaCrianca from './views/areaRestrita/mapa/ListaCrianca';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" options={{ headerShown: false }} component={GetStarted} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu} />
        <Stack.Screen name="MenuEstabelecimento" options={{ headerShown: false }} component={MenuEstabelecimento} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Crianca" options={{title: "Criança"}} component={Crianca} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="ListaCrianca" options={{ title: "Selecione uma criança" }} component={ListaCrianca} />
        <Stack.Screen name="ConfiguracaoPerfil" options={{ headerShown: false }} component={ConfiguracaoPerfil} />
        <Stack.Screen name="AtualizaSenhaEstabelecimento" options={{ headerShown: false }} component={AtualizaSenhaEstabelecimento} />
        <Stack.Screen name="ConfiguracaoPerfilEstabelecimento" options={{ headerShown: false }} component={ConfiguracaoPerfilEstabelecimento} />
        <Stack.Screen name="ConfiguracaoPerfilCrianca" options={{ headerShown: false }} component={ConfiguracaoPerfilCrianca} />
        <Stack.Screen name="ConfiguracaoPerfilResponsavel" options={{ headerShown: false }} component={ConfiguracaoPerfilResponsavel} />
        <Stack.Screen name="PerfilResponsavel" options={{ headerShown: false }} component={PerfilResponsavel} />
        <Stack.Screen name="PerfilEstabelecimento" options={{ headerShown: false }} component={PerfilEstabelecimento} />
        <Stack.Screen name="PerfilCrianca" options={{ title: "Perfil da criança", headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' } }} component={PerfilCrianca} />
        <Stack.Screen name="Dicas" options={{ title: "Posso ajudar?", headerTitleStyle: { fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto' } }} component={Dicas} />
        <Stack.Screen name="SearchDica" options={{ title: "Pesquisa"}} component={SearchDica} />
        <Stack.Screen name="SearchParceiro" options={{ headerShown: false }} component={SearchParceiro} />
        <Stack.Screen name="Parceiros" options={{ headerShown: false }} component={Parceiros} />
        <Stack.Screen name="ExibeParceiro" options={{ headerShown: false }} component={ExibeParceiro} />
        <Stack.Screen name="ExibeDica" options={{ title: "Dicas", headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' } }} component={ExibeDica} />
        <Stack.Screen name="LoginEstabelecimento" options={{ headerShown: false }} component={LoginEstabelecimento} />
        <Stack.Screen name="PrimeiroAcesso" options={{ title: "Cadastre-se" }} component={PrimeiroAcesso} />
        <Stack.Screen name="PrimeiroAcessoEstabelecimento" options={{ title: "Cadastre-se" }} component={PrimeiroAcessoEstabelecimento} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}