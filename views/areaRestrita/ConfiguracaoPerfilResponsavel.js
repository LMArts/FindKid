import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, Picker, Alert } from 'react-native';
import { css } from '../../assets/css/css';
import config from '../../config/config';
import AsyncStorage from '@react-native-community/async-storage';


export default function ConfiguracaoPerfilResponsavel(props) {

    const [id, setId] = useState(null);
    const [nomeCompletoResp, setNomeCompletoResp] = useState(null);
    const [sexoResp, setSexoResp] = useState(null);
    const [celularResp, setCelularResp] = useState(null);
    const [emailResp, setEmailResp] = useState(null);
    const [estadoResp, setEstadoResp] = useState(null);
    const [cidadeResp, setCidadeResp] = useState(null);
    const [enderecoResp, setEnderecoResp] = useState(null);
    const [numeroResp, setNumeroResp] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        async function readResponsavel() {
            let response = await fetch(
                config.urlRoot + 'readResponsavel', {
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
            setId(json.id);
            setNomeCompletoResp(json.nomeCompletoResp);
            setSexoResp(json.sexoResp);
            setCelularResp(json.celularResp);
            setEmailResp(json.emailResp);
            setEstadoResp(json.estadoResp);
            setCidadeResp(json.cidadeResp);
            setEnderecoResp(json.enderecoResp);
            setNumeroResp(json.numeroResp);
        };
        readResponsavel();
    }, []);

    async function atualizar() {
        let response = await fetch(config.urlRoot + 'updateResponsavel', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nomeCompletoResp: nomeCompletoResp,
                sexoResp: sexoResp,
                celularResp: celularResp,
                emailResp: emailResp,
                estadoResp: estadoResp,
                cidadeResp: cidadeResp,
                enderecoResp: enderecoResp,
                numeroResp: numeroResp
            }),
            
        });
        let json = await response.json();
        await AsyncStorage.setItem('responsavelData', JSON.stringify(json));
        if (json === 'error') {
            Alert.alert(" ", "Não foi possível alterar os dados!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('ConfiguracaoPerfilResponsavel')
                }
            ]);
        } else {
            Alert.alert(" ", "Dados alterados com sucesso!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('Menu')
                }
            ]);
        }
        
    };

    return (

        <ScrollView>

            <View style={css.containerPerfilResp}>
                <TouchableOpacity style={css.arrowReturn} onPress={() => props.navigation.navigate('PerfilResponsavel')} >
                    <Image style={css.arrowReturnContent}
                        source={require('../../assets/image/arrowReturn.png')}
                    />
                </TouchableOpacity>
                <View style={css.containerCadastro}>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Nome Completo:'
                            onChangeText={text => setNomeCompletoResp(text)}
                            value={nomeCompletoResp}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={sexoResp}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setSexoResp(itemValue)}
                        >
                            <Picker.Item label="Feminino" value="Feminino" />
                            <Picker.Item label="Masculino" value="Masculino" />
                        </Picker>
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Telefone'
                            onChangeText={text => setCelularResp(text)}
                            value={celularResp}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='E-mail'
                            onChangeText={text => setEmailResp(text)}
                            value={emailResp}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Estado'
                            onChangeText={text => setEstadoResp(text)}
                            value={estadoResp}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Cidade'
                            onChangeText={text => setCidadeResp(text)}
                            value={cidadeResp}
                        />
                    </View>
                    
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Endereço'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => setEnderecoResp(text)}
                            value={enderecoResp}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Número'
                            onChangeText={text => setNumeroResp(text)}
                            value={numeroResp}
                        />
                    </View>

                    <View style={css.conatainerButton}>
                        <TouchableOpacity style={css.btnUpdateInfo} onPress={() => atualizar()}>
                            <Text style={css.login__buttonText}>
                                Atualizar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
}