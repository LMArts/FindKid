import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import {cssMapa} from './cssMapa';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import config from '../../../config/config';


export default function Mapa(props){

  const [longitude, setLongitude] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [local, setLocal] = useState(null);

  useEffect(() => {
    async function readResp() {
      let response = await fetch(
        config.urlRoot + 'readQrcode',{
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
      setLatitude(json.latitudeQrcode);
      setLongitude(json.longitudeQrcode);
      setLocal(json.localizacaoQrcode);
    };
    readResp();
  }, []);
 
  return(

   <View>
      <MapView provider={PROVIDER_GOOGLE} style={cssMapa.map} 
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.300,
            longitudeDelta: 0.300
          }}
        >
      </MapView>

   </View>

  );
}
