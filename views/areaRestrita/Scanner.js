import { View, Text, TextInput, Button, Picker, Image, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { css } from '../../assets/css/css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import config from '../../config/config';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';

export default function Scanner({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');
    const [displayForm, setDisplayForm] = useState('none');
    const [code, setCode] = useState(null);
    const [nomeCompletoCrianca, setNomeCompletoCrianca] = useState(null);
    const [dataNascCrianca, setDataNascCrianca] = useState(null);
    const [sexoCrianca, setSexoCrianca] = useState(null);
    const [grauParentescoCrianca, setGrauParentescoCrianca] = useState(null);
    const [corOlhoCrianca, setCorOlhoCrianca] = useState(null);
    const [corCabeloCrianca, setCorCabeloCrianca] = useState(null);
    const [tipoCabeloCrianca, setTipoCabeloCrianca] = useState(null);
    const [tomPeleCrianca, setTomPeleCrianca] = useState(null);
    const [observacaoCrianca, setObservacaoCrianca] = useState(null);
    const [localization, setLocalization] = useState(null);

    const [nomeResp, setNomeResp] = useState(null);
    const [celularResp, setCelularResp] = useState(null);

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    async function handleBarCodeScanned({ type, data }) {
        setScanned(true);
        setDisplayQR('none');
        setDisplayForm('flex');
        setCode(data);
        await getCoordenada();
        await getLocation();
        await searchCrianca(data);
        await searchResponsavel(data);
    }

    async function searchResponsavel(codigo) {
        let response = await fetch(config.urlRoot + 'searchResponsavel', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: codigo
            })
        });
        let json = await response.json();
        setNomeResp(json.nomeCompletoResp);
        setCelularResp(json.celularResp);
    }

    async function searchCrianca(codigo) {
        let response = await fetch(config.urlRoot + 'searchCrianca', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: codigo
            })
        });
        let json = await response.json();
        setNomeCompletoCrianca(json.nomeCompletoCrianca);
        setDataNascCrianca(json.dataNascCrianca);
        setSexoCrianca(json.sexoCrianca);
        setGrauParentescoCrianca(json.grauParentescoCrianca);
        setCorOlhoCrianca(json.corOlhoCrianca);
        setCorCabeloCrianca(json.corCabeloCrianca);
        setTipoCabeloCrianca(json.tipoCabeloCrianca);
        setTomPeleCrianca(json.tomPeleCrianca);
        setObservacaoCrianca(json.observacaoCrianca);

    }

    useEffect(()=>{
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
    });

    async function getCoordenada() {
        let coordenada = await Location.getCurrentPositionAsync({});
        setLatitude(coordenada.coords.latitude);
        setLongitude(coordenada.coords.longitude);
    }

    async function getLocation(){
        let location = await Location.getCurrentPositionAsync({});
        Geocoder.init(config.geocodingAPI);
        Geocoder.from(location.coords.latitude, location.coords.longitude)
            .then(json => {
                let rua = json.results[0].address_components[0].short_name;
                let bairro = json.results[0].address_components[1].short_name;
                let cidade = json.results[0].address_components[2].short_name;
                let estado = json.results[0].address_components[3].short_name;
                setLocalization(`${rua} - ${bairro} - ${cidade} - ${estado}`);
            })
            .catch(error => console.warn(error));
    }

    async function readAgain() {
        setScanned(false);
        setDisplayQR('flex');
        setDisplayForm('none');
        setCode(null);
        setNomeCompletoCrianca(null);
        setDataNascCrianca(null);
        setSexoCrianca(null);
        setGrauParentescoCrianca(null);
        setCorOlhoCrianca(null);
        setCorCabeloCrianca(null);
        setTipoCabeloCrianca(null);
        setTomPeleCrianca(null);
        setObservacaoCrianca(null);
        setLocalization(null);
    }

    async function salvarLocal(){
        let response = await fetch(config.urlRoot+'salvarLocal',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                code: code,
                local: localization,
                latitude: latitude,
                longitude: longitude
            })
        });
        let json = await response.json();
        if (json === 'error') {
            Alert.alert(" ", "Não foi possível alterar os dados!", [
                {
                    text: "Fechar", onPress: () =>
                        navigation.navigate('ConfiguracaoPerfilResponsavel')
                }
            ]);
        } else {
            Alert.alert(" ", "Local alterado com sucesso!", [
                {
                    text: "Fechar", onPress: () =>
                        navigation.navigate('Menu')
                }
            ]);
        }
    }

    return (

            <View>

                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : value => handleBarCodeScanned(value)}
                    style={css.qrcode(displayQR)}
                />
                
            <ScrollView>

                <View style={[css.qrcode__form(displayForm), css.updateSenha__form]}>
                    <View style={css.containerCadastro}>

                        <View style={css.dadosResposavel}>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Responsável:</Text> {nomeResp}</Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Telefone:</Text> {celularResp}</Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Nome Completo:</Text> {nomeCompletoCrianca}</Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Data de Nascimento:</Text> {dataNascCrianca} </Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Sexo:</Text> {sexoCrianca} </Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Grau de Parentesco:</Text> {grauParentescoCrianca} </Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Cor do Olho:</Text> {corOlhoCrianca} </Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Cor do Cabelo: </Text> {corCabeloCrianca} </Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Tipo de Cabelo:</Text> {tipoCabeloCrianca} </Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Tom da Pela:</Text> {tomPeleCrianca} </Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Obervações:</Text> {observacaoCrianca} </Text>
                            <Text style={css.label_information}><Text style={css.labelTitle}>Localização Atual:</Text> {localization} </Text>

                        </View>

                        <View>
                            <TouchableOpacity style={css.login__button} onPress={() => salvarLocal()}>
                                <Text style={css.login__buttonText}>Salvar Local</Text>
                            </TouchableOpacity>
                        </View>

                        {scanned &&
                            <View>
                                <TouchableOpacity style={css.login__button} onPress={() => readAgain()}>
                                    <Text style={css.login__buttonText}>Escanear Novamente</Text>
                                </TouchableOpacity>
                            </View>
                        }

                    </View>
                </View>
            </ScrollView>
        </View>
        
    );
}