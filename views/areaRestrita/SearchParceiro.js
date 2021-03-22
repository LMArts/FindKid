import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { cssparceiros } from '../areaRestrita/Parceiros/cssParceiros';
import config from '../../config/config';
import { css } from '../../assets/css/css';

export default function SearchParceiro(props) {

    const [parceiro, setParceiro] = useState([]);

    useEffect(() => {
        async function buscaParceiro() {
            const response = await fetch(config.urlRoot + 'searchParceiros', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: props.route.params.dado,
                    descricao: props.route.params.dado
                })
            });
            let data = await response.json();
            setParceiro(data);
        };
        buscaParceiro();
    });

    return(      
        <View style={cssparceiros.containerFile}>
                
                <TouchableOpacity style={cssparceiros.arrowReturn} onPress={() => props.navigation.navigate('Parceiros')} >
                    <Image style={css.arrowReturnContent}
                        source={require('../../assets/image/arrowReturn.png')}
                    />
                </TouchableOpacity>

                <View style={cssparceiros.containerWellcome}>
                    <Text style={cssparceiros.textWellcome}>Estabelecimentos</Text>
                </View>

                <View style={cssparceiros.containerParceiros}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={parceiro}
                        renderItem={({ item }) => (
                        
                            <TouchableOpacity style={cssparceiros.contentParceiros} onPress={() => props.navigation.navigate('ExibeParceiro', { id: item.id })}>
                                <Text style={cssparceiros.informationName}>{item.nomeEstabelecimento}</Text>
                                <Text style={cssparceiros.informationAdress}>{item.enderecoEstabelecimento} - {item.cidadeEstabelecimento} - {item.estadoEstabelecimento}</Text>
                                <Text style={cssparceiros.informationAdress}>{item.descricaoEstabelecimento}</Text>
                            </TouchableOpacity>
                        
                        )}
                    />
             </View>
        </View>
    );

}