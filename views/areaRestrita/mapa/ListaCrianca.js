import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Button } from 'react-native';
import { css } from '../../../assets/css/css';
import config from '../../../config/config';

export default function ListaCrianca(props) {

    const [crianca, setCrianca] = useState([]);

    useEffect(()=>{
        async function listaCrianca() {
            const response = await fetch(config.urlRoot + 'selectCrianca');
            const data = await response.json();
            setCrianca(data);
        }
        listaCrianca();
    })

    return(
            <View style={css.containerPerfilResp}>
                <View style={css.containerList}>
                    <FlatList 
                        keyExtractor={(item, index) => index.toString()}
                        data={crianca}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={css.contentDicas} onPress={()=> props.navigation.navigate('Mapa', {id: item.id})}>
                                <Text style={css.labelNamePerfil}>{item.nomeCompletoCrianca}</Text>
                                <Image style={css.arrowDica} source={require('../../../assets/image/arrow.png')} />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
    );
}