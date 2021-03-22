import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { cssGetstarted } from './cssGetStarted';
import config from '../../config/config.json';
export default function GetStarted({ navigation }) {

    

    return (
        <View>
            <View style={cssGetstarted.containerLogotipoStarted}>
                <Image style={cssGetstarted.logotipoStarted}source={require('../../assets/image/getStarted.png')}/>
            </View>
            <View style={cssGetstarted.containerBtnStarted}>
                
                <Text  style={cssGetstarted.textGetStarted}>Bem-vindo ao</Text>
                <Text style={cssGetstarted.textGetStartedBold}>FindKid</Text>
                <Text style={cssGetstarted.textGetStartedDescription}>Identifique crianças com QR Code e compartilhe sua localização.</Text>

                <TouchableOpacity style={cssGetstarted.btngetStarted}  onPress={() => navigation.navigate('Login')}>
                    <Text style={cssGetstarted.btngetStartedText}>
                        Sou um responsável
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={cssGetstarted.btngetStarted} onPress={() => navigation.navigate('LoginEstabelecimento')}>
                    <Text style={cssGetstarted.btngetStartedText}>
                        Sou um parceiro
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
        
    );
}