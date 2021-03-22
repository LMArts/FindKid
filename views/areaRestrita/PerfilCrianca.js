import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { css } from '../../assets/css/css';
import config from '../../config/config';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export default function PerfilCrianca(props) {
    
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
                config.urlRoot + 'readCrianca',{
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
            setCorOlhoCrianca(json.corOlhoCrianca);
            setCorCabeloCrianca(json.corCabeloCrianca);
            setTipoCabeloCrianca(json.tipoCabeloCrianca);
            setTomPeleCrianca(json.tomPeleCrianca);
            setObservacaoCrianca(json.observacaoCrianca);
            setResponse(json);
        };
        readCrianca();
    }, []);

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

    async function exclui() {
        let response = await fetch(config.urlRoot + 'deleteCrianca', {
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
        if (json === 'error') {
            Alert.alert(" ", "Não foi possível excluir o cadastro!", [
                {
                    text: "Fechar", onPress: () =>
                        props.navigation.navigate('ConfiguracaoPerfilCrianca')
                }
            ]);
        } else {
            Alert.alert(" ", "Cadastro excluído com sucesso!", [
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
                <View style={css.blockApresentacao}>
                    <Text style={css.labelNamePerfil}>{nomeCompletoCrianca}</Text>
                </View>
                <View style={css.dadosResposavel}>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Nome Completo:</Text> {nomeCompletoCrianca}</Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Data de Nascimento:</Text> {dataNascCrianca} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Sexo:</Text> {sexoCrianca} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Grau de Parentesco:</Text> {grauParentescoCrianca} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Cor do Olho:</Text> {corOlhoCrianca} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Cor do Cabelo: </Text> {corCabeloCrianca} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Tipo de Cabelo:</Text> {tipoCabeloCrianca} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Tom da Pela:</Text> {tomPeleCrianca} </Text>
                    <Text style={css.label_information}><Text style={css.labelTitle}>Obervações:</Text> {observacaoCrianca} </Text>
                </View>
                <View style={css.conatainerButton}>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => shareQR()}>
                        <Text style={css.login__buttonText}>
                            Compartilhar QR Code
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => props.navigation.navigate('ConfiguracaoPerfilCrianca', {id: id})}>
                        <Text style={css.login__buttonText}>
                            Editar Cadastro
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnUpdateInfo} onPress={() => exclui()}>
                        <Text style={css.login__buttonText}>
                            Excluir Cadastro
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}