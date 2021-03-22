import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, Picker, Alert } from 'react-native';
import { css } from '../../../assets/css/css';
import config from '../../../config/config';
import AsyncStorage from '@react-native-community/async-storage';


export default function ConfiguracaoPerfilEstabelecimento(props) {

    const [id, setId] = useState(null);
    const [nome, setNome] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [email, setEmail] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [cnpj, setCnpj] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [categoria, setCategoria] = useState(null);

    useEffect(() => {
        async function readEstabelecimento() {
            let response = await fetch(
                config.urlRoot + 'readEstabelecimento', {
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
            setNome(json.nomeEstabelecimento);
            setEmail(json.emailEstabelecimento);
            setTelefone(json.telefoneEstabelecimento);
            setDescricao(json.descricaoEstabelecimento);
            setEstado(json.estadoEstabelecimento);
            setCidade(json.cidadeEstabelecimento);
            setEndereco(json.enderecoEstabelecimento);
            setCategoria(json.categoriaEstabelecimento);
            setCnpj(json.cnpjEstabelecimento);
        };
        readEstabelecimento();
    }, []);


    async function atualizar() {
        let response = await fetch(config.urlRoot + 'updateEstabelecimento', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nome: nome,
                email: email,
                estado: estado,
                cidade: cidade,
                endereco: endereco,
                telefone: telefone,
                cnpj: cnpj,
                descricao: descricao,
                categoria: categoria
            })
        });
        let json = await response.json();
        await AsyncStorage.setItem('estabelecimentolData', JSON.stringify(json));
        if (json === 'error') {
            Alert.alert(" ", "Não foi possível alterar os dados!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('ConfiguracaoPerfilEstabelecimento')
                }
            ]);
        } else {
            Alert.alert(" ", "Dados alterados com sucesso!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('MenuEstabelecimento')
                }
            ]);
        }
        
    };

    return (

        <ScrollView>

            <View style={css.containerPerfilResp}>
                <TouchableOpacity style={css.arrowReturn} onPress={() => props.navigation.navigate('PerfilEstabelecimento')} >
                    <Image style={css.arrowReturnContent}
                        source={require('../../../assets/image/arrowReturn.png')}
                    />
                </TouchableOpacity>
                <View style={css.containerCadastro}>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Nome do estabelecimento:'
                            onChangeText={text => setNome(text)}
                            value={nome}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Telefone'
                            onChangeText={text => setTelefone(text)}
                            value={telefone}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='E-mail'
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Estado'
                            onChangeText={text => setEstado(text)}
                            value={estado}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Cidade'
                            onChangeText={text => setCidade(text)}
                            value={cidade}
                        />
                    </View>
                    
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Endereço'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => setEndereco(text)}
                            value={endereco}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='CNPJ'
                            onChangeText={text => setCnpj(text)}
                            value={cnpj}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Descrição'
                            onChangeText={text => setDescricao(text)}
                            multiline={true}
                            numberOfLines={4}
                            value={descricao}
                        />
                    </View>

                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={categoria}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setCategoria(itemValue)}
                        >
                            <Picker.Item label="Hotel" value="1" />
                            <Picker.Item label="Quiósque" value="2" />
                            <Picker.Item label="Pousada" value="3" />
                        </Picker>
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