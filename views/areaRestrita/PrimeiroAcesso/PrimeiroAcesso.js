import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Picker, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { css } from './PrimeiroAcessoCss';
import config from '../../../config/config';


export default function PrimeiroAcesso({ navigation }) {

    const [nomeCompleto, setNomeCompleto] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [numero, setNumero] = useState(null);

    async function criar (){
            let response = await fetch(config.urlRoot + 'createResponsavel', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nomeCompleto: nomeCompleto,
                    sexo: sexo,
                    telefone: telefone,
                    email: email,
                    senha: senha,
                    estado: estado,
                    cidade: cidade,
                    endereco: endereco,
                    numero: numero
                })
            });
        let json = await response.json();
        if (json === 'error') {
            Alert.alert(" ", "Não foi possível realizar o cadastro!", [
                {
                    text: "Fechar", onPress: () =>
                        navigation.navigate('PrimeiroAcesso')
                }
            ]);
        } else {
            Alert.alert(" ", "Cadastro realizado com sucesso!", [
                {
                    text: "Fechar", onPress: () =>
                        navigation.navigate('Login')
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
                            placeholder='Nome Completo'
                            onChangeText={text => setNomeCompleto(text)}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={sexo}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setSexo(itemValue)}
                        >
                            <Picker.Item label="Sexo" />
                            <Picker.Item label="Feminino" value="Feminino" />
                            <Picker.Item label="Masculino" value="Masculino" />
                        </Picker>
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
                            placeholder='Número'
                            onChangeText={text => setNumero(text)}
                        />
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