import {StyleSheet, Dimensions } from 'react-native';

const cssMapa = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})

export {cssMapa};