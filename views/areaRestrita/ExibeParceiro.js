import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import { css } from '../../assets/css/css';
import config from '../../config/config';

export default function ExibeParceiro(props) {
    
    const [nomeEstabelecimento, setNomeEstabelecimento] = useState(null);
    const [estadoEstabelecimento, setEstadoEstabelecimento] = useState(null);
    const [cidadeEstabelecimento, setCidadeEstabelecimento] = useState(null);
    const [enderecoEstabelecimento, setEnderecoEstabelecimento] = useState(null);
    const [telefoneEstabelecimento, setTelefoneEstabelecimento] = useState(null);
    const [cnpjEstabelecimento, setCnpjEstabelecimento] = useState(null);
    const [descricaoEstabelecimento, setDescricaoEstabelecimento] = useState(null);
   
    useEffect(() => {
        async function readParceiro() {
            let response = await fetch(
                config.urlRoot + 'readParceiro',{
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
            setNomeEstabelecimento(json.nomeEstabelecimento);
            setEstadoEstabelecimento(json.estadoEstabelecimento);
            setCidadeEstabelecimento(json.cidadeEstabelecimento);
            setEnderecoEstabelecimento(json.enderecoEstabelecimento);
            setTelefoneEstabelecimento(json.telefoneEstabelecimento);
            setCnpjEstabelecimento(json.cnpjEstabelecimento);
            setDescricaoEstabelecimento(json.descricaoEstabelecimento);
        };
        readParceiro();
    }, []);

    return (

        <ScrollView style={css.containerFile}>
            <View>
                <TouchableOpacity style={css.arrowReturn} onPress={() => props.navigation.navigate('Parceiros')} >
                    <Image style={css.arrowReturnContent}
                        source={require('../../assets/image/arrowReturn.png')}
                    />
                </TouchableOpacity>
                <View style={css.blockApresentacao}>
                    <Text style={css.labelNamePerfil}>{nomeEstabelecimento}</Text>
                </View>
                <View style={css.blockImageExibeParceiros}>
                <Image style={css.blockImageExibeContent}
                        source={require('../../assets/image/imagemParceiros.jpg')}
                    />
                   
                </View>
               
               
                <View>
                <Image style={css.blockImageAvaliacao}
                        source={require('../../assets/image/avaliacao.png')}
                    />
                </View>
                <View style={css.containerDatailsEstabelecimento}>
                    <Text style={css.detailsEstabelecimento}><Text style={css.labelEstabelecimento}>Descrição:</Text> {descricaoEstabelecimento} </Text>
                    <Text style={css.detailsEstabelecimento}><Text style={css.labelEstabelecimento}>Endereço:</Text>  {enderecoEstabelecimento} - {cidadeEstabelecimento} - {estadoEstabelecimento}</Text>
                    <Text style={css.detailsEstabelecimento}><Text style={css.labelEstabelecimento}>Telefone:</Text>  {telefoneEstabelecimento} </Text>
                    <Text style={css.detailsEstabelecimento}><Text style={css.labelEstabelecimento}>CNPJ:</Text>  {cnpjEstabelecimento} </Text>
                </View>
            </View>
        </ScrollView>
    );
}