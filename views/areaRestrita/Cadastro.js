import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, Picker} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { css } from '../../assets/css/css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import config from '../../config/config';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export default function Cadastro({ navigation }) {

    const local = config.origin;
    
    const [codigoQrcode, setCodigoQrcode] = useState(null);

    const [responsavel, setResponsavel] = useState(null);
    
    const [nomeCompletoCrianca, setNomeCompletoCrianca] = useState(null);
    const [dataNascCrianca, setDataNascCrianca] = useState(null);
    const [sexoCrianca, setSexoCrianca] = useState(null);
    const [grauParentescoCrianca, setGrauParentescoCrianca] = useState(null);
    const [corOlhoCrianca, setCorOlhoCrianca] = useState(null);
    const [corCabeloCrianca, setCorCabeloCrianca] = useState(null);
    const [tipoCabeloCrianca, setTipoCabeloCrianca] = useState(null);
    const [tomPeleCrianca, setTomPeleCrianca] = useState(null);
    const [observacaoCrianca, setObservacaoCrianca] = useState(null);

    const [response, setResponse] = useState(null);

    async function getResponsavel() {
        let response = await AsyncStorage.getItem('responsavelData');
        let json = JSON.parse(response);
        setResponsavel(json.id);
    }

    useEffect(() => {
        getResponsavel();
    }, []);
    
    useEffect(()=>{
        randomCode();
        setNomeCompletoCrianca(null);
        setDataNascCrianca(null);
        setSexoCrianca(null);
        setGrauParentescoCrianca(null);
        setCorOlhoCrianca(null);
        setCorCabeloCrianca(null);
        setTipoCabeloCrianca(null);
        setTomPeleCrianca(null);
        setObservacaoCrianca(null);
    }, [response]);

    {/*const marcaEndereco = () =>{
        setLocal(`${endereco} - ${numero} - ${cidade} - ${estado}`);
    }*/}

    async function randomCode()
    {
        let result = '';
        let length=20;
        let chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        setCodigoQrcode(result);
    }

    async function sendForm(){
        let response = await fetch(config.urlRoot+'create',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                responsavelId: responsavel,
                codigoQrcode: codigoQrcode,
                nomeCompletoCrianca: nomeCompletoCrianca,
                dataNascCrianca: dataNascCrianca,
                sexoCrianca: sexoCrianca,
                grauParentescoCrianca: grauParentescoCrianca,
                corOlhoCrianca: corOlhoCrianca,
                corCabeloCrianca: corCabeloCrianca,
                tipoCabeloCrianca: tipoCabeloCrianca,
                tomPeleCrianca: tomPeleCrianca,
                observacaoCrianca: observacaoCrianca,
                local: local
            })
        });
        let json = await response.json();
        setResponse(json);
    }

    async function shareQR() {
        const image = config.urlRoot + 'image/codigo.png';
        FileSystem.downloadAsync(
            image,
            FileSystem.documentDirectory + '.png'
        ).then(({ uri }) => {
            Sharing.shareAsync(uri);
        });
        await Sharing.shareAsync();
    }

    return(
        <ScrollView>
            
            <View style={css.updateSenha__form}>
                <View style={css.containerCadastro}>

                    {response && (
                        <View>
                            <Image style={css.imageQRCode} source={{ uri: response, height: 190, width: 190 }} />
                            <View style={css.conatainerButton}>
                                <TouchableOpacity style={css.btnUpdateInfo} onPress={() => shareQR()}>
                                    <Text style={css.login__buttonText}>
                                        Compartilhar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Nome Completo'
                            onChangeText={text => setNomeCompletoCrianca(text)}
                            value={nomeCompletoCrianca}
                        />
                    </View>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Data de Nascimento'
                            onChangeText={text => setDataNascCrianca(text)}
                            value={dataNascCrianca}
                        />
                    </View>
                    
                    <View style={css.dadosResposavel}>
                        <Picker 
                            selectedValue={sexoCrianca}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setSexoCrianca(itemValue)}
                        >
                            <Picker.Item label="Sexo"/>
                            <Picker.Item label="Feminino" value="Feminino" />
                            <Picker.Item label="Masculino" value="Masculino" />
                        </Picker>
                    </View>

                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={grauParentescoCrianca}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setGrauParentescoCrianca(itemValue)}
                        >
                            <Picker.Item label="Grau de Parentesco"/>
                            <Picker.Item label="Filho(a)" value="Filho(a)" />
                            <Picker.Item label="Sobrinho(a)" value="Sobrinho(a)" />
                            <Picker.Item label="Neto(a)" value="Neto(a)" />
                            <Picker.Item label="Enteado(a)" value="Enteado(a)" />
                        </Picker>
                    </View>
                    
                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={corCabeloCrianca}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setCorCabeloCrianca(itemValue)}
                        >
                            <Picker.Item label="Cor do Cabelo" />
                            <Picker.Item label="Preto" value="Preto" />
                            <Picker.Item label="Castanho" value="Castanho" />
                            <Picker.Item label="Loiro" value="Loiro" />
                        </Picker>
                    </View>

                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={corOlhoCrianca}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setCorOlhoCrianca(itemValue)}
                        >
                            <Picker.Item label="Cor do Olho" />
                            <Picker.Item label="Preto" value="Preto" />
                            <Picker.Item label="Castanho" value="Castanho" />
                            <Picker.Item label="Verde" value="Verde" />
                            <Picker.Item label="Azul" value="Azul" />
                        </Picker>
                    </View>

                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={tipoCabeloCrianca}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setTipoCabeloCrianca(itemValue)}
                        >
                            <Picker.Item label="Tipo de Cabelo" />
                            <Picker.Item label="Liso" value="Liso" />
                            <Picker.Item label="Cacheado" value="Cacheado" />
                            <Picker.Item label="Ondulado" value="Ondulado" />
                            <Picker.Item label="Crespo" value="Crespo" />
                        </Picker>
                    </View>

                    <View style={css.dadosResposavel}>
                        <Picker
                            selectedValue={tomPeleCrianca}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setTomPeleCrianca(itemValue)}
                        >
                            <Picker.Item label="Tom da Pele" />
                            <Picker.Item label="Branco" value="Branco" />
                            <Picker.Item label="Pardo" value="Pardo" />
                            <Picker.Item label="Negro" value="Negro" />
                            <Picker.Item label="Amarelo" value="Amarelo" />
                            <Picker.Item label="Indígena" value="Indígena" />
                        </Picker>
                    </View>
                    
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Observações'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => setObservacaoCrianca(text)}
                            value={observacaoCrianca}
                        />
                    </View>    
                </View>

                <View style={css.conatainerButton}>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => sendForm()}>
                        <Text style={css.login__buttonText}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );

}