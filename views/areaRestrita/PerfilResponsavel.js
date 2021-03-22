import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { css } from '../../assets/css/css';
import config from '../../config/config';
import AsyncStorage from '@react-native-community/async-storage';

export default function PerfilResponsavel(props) {
    const [id, setId] = useState(null);
    const [nomeCompletoResp, setNomeCompletoResp] = useState(null);
    const [sexoResp, setSexoResp] = useState(null);
    const [emailResp, setEmailResp] = useState(null);
    const [celularResp, setCelularResp] = useState(null);
    const [estadoResp, setEstadoResp] = useState(null);
    const [cidadeResp, setCidadeResp] = useState(null);
    const [enderecoResp, setEnderecoResp] = useState(null);
    const [numeroResp, setNumeroResp] = useState(null);

    useEffect(() => {
        async function getIdResponsavel() {
            let response = await AsyncStorage.getItem('responsavelData');
            let json = JSON.parse(response);
            setId(json.id);
            setNomeCompletoResp(json.nomeCompletoResp);
            setSexoResp(json.sexoResp);
            setCelularResp(json.celularResp);
            setEstadoResp(json.estadoResp);
            setCidadeResp(json.cidadeResp);
            setEnderecoResp(json.enderecoResp);
            setNumeroResp(json.numeroResp);
            setEmailResp(json.emailResp);
        }
        getIdResponsavel();
    });

    async function exclui() {
        let response = await fetch(config.urlRoot + 'deleteResponsavel', {
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
                        props.navigation.navigate('perfilResponsavel')
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
                <TouchableOpacity style={css.arrowReturn} onPress={() => props.navigation.navigate('Menu')} >
                    <Image style={css.arrowReturnContent}
                        source={require('../../assets/image/arrowReturn.png')}
                        />
                </TouchableOpacity>
            </View>
            <View style={css.containerPerfilResp}>
                <View style={css.blockApresentacao}>
                    <Text style={css.labelNamePerfil}>Olá, {nomeCompletoResp}</Text>
                    <Text style={css.labelCelPerfil}>{celularResp}</Text>
                </View>
                <View style={css.dadosResposavel}>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Nome Completo:</Text> {nomeCompletoResp}</Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Sexo:</Text> {sexoResp} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Celular:</Text> {celularResp} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>E-mail:</Text> {emailResp} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Estado:</Text> {estadoResp} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Cidade:</Text> {cidadeResp} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Endereço: </Text> {enderecoResp} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Nº:</Text> {numeroResp} </Text>
                </View>
                <View style={css.conatainerButton}>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => props.navigation.navigate('ConfiguracaoPerfilResponsavel', { id: id })}>
                        <Text style={css.login__buttonText}>
                            Editar Cadastro
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => props.navigation.navigate('ConfiguracaoPerfil')}>
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