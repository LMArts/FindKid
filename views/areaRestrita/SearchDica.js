import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { css } from './DicaCss';
import config from '../../config/config';

export default function SearchDica(props) {

    const [dica, setDica] = useState([]);

    useEffect(() => {
        async function buscaDica() {
            const response = await fetch(config.urlRoot + 'searchDica', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo: props.route.params.dado,
                    descricao: props.route.params.dado
                })
            });
            let data = await response.json();
            setDica(data);
        };
        buscaDica();
    });

    return(
        <View style={css.contentDicas}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={dica}
                renderItem={({ item }) => (
                    <TouchableOpacity style={css.contentDicas} onPress={() => props.navigation.navigate('ExibeDica', { id: item.id })}>
                        <Text style={css.textInformacoes}>{item.tituloDica}</Text>
                        <Text style={css.labelInformacoes}>{item.resumoDica}</Text>
                        <Image style={css.arrowDica} source={require('../../assets/image/arrow.png')} />
                        <View style={css.divisor}></View>
                    </TouchableOpacity>
                )}
            />
        </View>         
    );

}