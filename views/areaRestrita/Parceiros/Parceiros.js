import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, TextInput } from 'react-native';
import { cssparceiros } from './cssParceiros';
import config from '../../../config/config.json';
import { css } from '../../../assets/css/css';


export default function Parceiros(props) {

    const [parceiro, setParceiro] = useState([]);
    const [busca, setBusca] = useState(null);

    useEffect(() => {
        async function listaParceiro() {
            const response = await fetch(config.urlRoot + 'selectParceiro');
            const data = await response.json();
            setParceiro(data);          
        }
        listaParceiro();
    })

    return (
        
            <View style={cssparceiros.containerFile}>
                
                <TouchableOpacity style={cssparceiros.arrowReturn} onPress={() => props.navigation.navigate('Menu')} >
                    <Image style={css.arrowReturnContent}
                        source={require('../../../assets/image/arrowReturn.png')}
                    />
                </TouchableOpacity>

                <View style={cssparceiros.containerWellcome}>
                    <Text style={cssparceiros.textWellcome}>Estabelecimentos</Text>
                </View>

                <View style={cssparceiros.containerParceiros}>

                    <View style={cssparceiros.contentDicas2}>
                        <View style={cssparceiros.searchInput}>
                            <TextInput
                                placeholder="Pesquisar"
                                onChangeText={text => setBusca(text)}
                            />
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchParceiro', { dado: busca })}>
                                <Image style={cssparceiros.searchDica} source={require('../../../assets/image/search.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

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