import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, Picker, Alert } from 'react-native';
import { css } from '../../assets/css/css';
import config from '../../config/config';

export default function ConfiguracaoPerfilCrianca(props) {

    const [id, setId] = useState(null);
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

    useEffect(() => {
        async function readCrianca() {
            let response = await fetch(
                config.urlRoot + 'readCrianca', {
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
            setNomeCompletoCrianca(json.nomeCompletoCrianca);
            setDataNascCrianca(json.dataNascCrianca);
            setSexoCrianca(json.sexoCrianca);
            setGrauParentescoCrianca(json.grauParentescoCrianca);
            setCorCabeloCrianca(json.corCabeloCrianca);
            setCorOlhoCrianca(json.corOlhoCrianca);
            setTipoCabeloCrianca(json.tipoCabeloCrianca);
            setTomPeleCrianca(json.tomPeleCrianca);
            setObservacaoCrianca(json.observacaoCrianca);
        };
        readCrianca();
    }, []);

    async function sendForm() {
        let response = await fetch(config.urlRoot + 'updateCrianca', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nomeCompletoCrianca: nomeCompletoCrianca,
                dataNascCrianca: dataNascCrianca,
                sexoCrianca: sexoCrianca,
                grauParentescoCrianca: grauParentescoCrianca,
                corCabeloCrianca: corCabeloCrianca,
                corOlhoCrianca: corOlhoCrianca,
                tipoCabeloCrianca: tipoCabeloCrianca,
                tomPeleCrianca: tomPeleCrianca,
                observacaoCrianca: observacaoCrianca
            })
        });
        let json = await response.json();
        if (json === 'error') {
            Alert.alert(" ", "Não foi possível alterar os dados!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('ConfiguracaoPerfilCrianca')
                }
            ]);
        } else {
            Alert.alert(" ", "Dados alterados com sucesso!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('Crianca')
                }
            ]);
        }
        
    };

    return (

        <ScrollView>

            <View style={css.containerPerfilResp}>
                <TouchableOpacity style={css.arrowReturn} onPress={() => props.navigation.navigate('PerfilCrianca')} >
                    <Image style={css.arrowReturnContent}
                        source={require('../../assets/image/arrowReturn.png')}
                    />
                </TouchableOpacity>
                <View style={css.containerCadastro}>
                    <View style={css.dadosResposavel}>
                        <TextInput style={css.login__input}
                            placeholder='Nome da Criança:'
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
                    <View style={css.conatainerButton}>
                        <TouchableOpacity style={css.btnUpdateInfo} onPress={() => sendForm()}>
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