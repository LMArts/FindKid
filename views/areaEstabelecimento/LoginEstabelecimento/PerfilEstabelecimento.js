import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { css } from '../../../assets/css/css';
import config from '../../../config/config';
import AsyncStorage from '@react-native-community/async-storage';

export default function PerfilEstabelecimento(props) {
    const [id, setId] = useState(null);
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cidade, setcidade] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [cnpj, setCnpj] = useState(null);
    const [descricao, setDescricao] = useState(null);

    useEffect(() => {
        async function getIdResponsavel() {
            let response = await AsyncStorage.getItem('estabelecimentoData');
            let json = JSON.parse(response);
            setId(json.id);
            setNome(json.nomeEstabelecimento);
            setEmail(json.emailEstabelecimento);
            setEstado(json.estadoEstabelecimento);
            setcidade(json.cidadeEstabelecimento);
            setEndereco(json.enderecoEstabelecimento);
            setTelefone(json.telefoneEstabelecimento);
            setCnpj(json.cnpjEstabelecimento);
            setDescricao(json.descricaoEstabelecimento);
        }
        getIdResponsavel();
    });

    {/*useEffect(() => {
        async function readEstabelecimento() {
            let response = await fetch(
                config.urlRoot + 'readEstabelecimento'
            );
            let json = await response.json();
            setId(json.id);
            setNome(json.nomeEstabelecimento);
            setEmail(json.emailEstabelecimento);
            setEstado(json.estadoEstabelecimento);
            setcidade(json.cidadeEstabelecimento);
            setEndereco(json.enderecoEstabelecimento);
            setTelefone(json.telefoneEstabelecimento);
            setCnpj(json.cnpjEstabelecimento);
            setDescricao(json.descricaoEstabelecimento);
        };
        readEstabelecimento();
    }, []);*/}

    async function exclui() {
        let response = await fetch(config.urlRoot + 'deleteEstabelecimento', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        });
        let json = await response.json();
        if (json === 'error') {
            Alert.alert(" ", "Não foi possível excluir o cadastro!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('perfilEstabelecimento')
                }
            ]);
        } else {
            Alert.alert(" ", "Cadastro excluído com sucesso!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('Login'),
                }
            ]);
            await AsyncStorage.clear();
        }
    };

    return (

        <ScrollView>
            <View>
                <TouchableOpacity style={css.arrowReturn} onPress={() => props.navigation.navigate('MenuEstabelecimento')} >
                    <Image style={css.arrowReturnContent}
                        source={require('../../../assets/image/arrowReturn.png')}
                        />
                </TouchableOpacity>
            </View>
            <View style={css.containerPerfilResp}>
                <View style={css.blockApresentacao}>
                    <Text style={css.labelNamePerfil}>Olá, {nome}</Text>
                    <Text style={css.labelCelPerfil}>{telefone}</Text>
                </View>
                <View style={css.dadosResposavel}>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Nome:</Text> {nome}</Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>E-mail:</Text> {email} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Telefone:</Text> {telefone} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Estado:</Text> {estado} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Cidade:</Text> {cidade} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Endereço: </Text> {endereco} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>CNPJ:</Text> {cnpj} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Descrição:</Text> {descricao} </Text>
                </View>
                <View style={css.conatainerButton}>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => props.navigation.navigate('ConfiguracaoPerfilEstabelecimento', { id: id })}>
                        <Text style={css.login__buttonText}>
                            Editar Cadastro
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => props.navigation.navigate('AtualizaSenhaEstabelecimento')}>
                        <Text style={css.login__buttonText}>
                            Alterar senha
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => exclui()}>
                        <Text style={css.login__buttonText}>
                            Excluir conta
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        
    );
}