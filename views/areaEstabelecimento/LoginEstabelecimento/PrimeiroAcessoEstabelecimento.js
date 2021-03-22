import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Picker, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { css } from './PrimeiroAcessoCss';
import config from '../../../config/config';


export default function PrimeiroAcessoEstabelecimento({ navigation }) {

    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [cnpj, setCnpj] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [categoria, setCategoria] = useState(null);

    

    async function criar (){
            let response = await fetch(config.urlRoot + 'createEstabelecimento', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha,
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
        if (json === 'error') {
            Alert.alert(" ", "Não foi possível realizar o cadastro!", [
                {
                    text: "Fechar", onPress: () =>
                        navigation.navigate('PrimeiroAcessoEstabelecimento')
                }
            ]);
        } else {
            Alert.alert(" ", "Cadastro realizado com sucesso!", [
                {
                    text: "Fechar", onPress: () =>
                        navigation.navigate('LoginEstabelecimento')
                }
            ]);
        }
    }

    return (
        <ScrollView>
            <View style={css.updateSenha__form}>
                <View >
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Nome do estabelecimento'
                            onChangeText={text => setNome(text)}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Telefone'
                            onChangeText={text => setTelefone(text)}
                            maxLength={11}
                            keyboardType={'phone-pad'}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='mail@example.com'
                            onChangeText={text => setEmail(text)}
                            keyboardType={'email-address'}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Senha'
                            maxLength={8}
                            onChangeText={text => setSenha(text)}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Estado'
                            onChangeText={text => setEstado(text)}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Cidade'
                            onChangeText={text => setCidade(text)}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Endereco'
                            onChangeText={text => setEndereco(text)}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='CNPJ'
                            onChangeText={text => setCnpj(text)}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Descrição'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => setDescricao(text)}
                        />
                    </View> 
                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={categoria}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setCategoria(itemValue)}
                        >
                            <Picker.Item label="Categoria" />
                            <Picker.Item label="Hotel" value="1" />
                            <Picker.Item label="Quiósque" value="2" />
                            <Picker.Item label="Pousada" value="3" />
                        </Picker>
                    </View>
                </View>    
                <View style={css.conatainerButton}>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => criar()}>
                        <Text style={css.login__buttonText}>
                            Cadastrar
                            </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}