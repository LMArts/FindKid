import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    updateSenha__form: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 30,
        flex: 1,
        justifyContent: 'center',

    },
    containerCadastro: {
        backgroundColor: '#fff',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: 0
    },
    dadosResposavel: {
        paddingBottom: 15,
    },
    login__input: {
        backgroundColor: '#DBDBDB',
        fontSize: 19,
        padding: 10,
        marginBottom: 15,
        borderRadius: 10
    },
    btnUpdateInfo: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: '#3d5a80',
    },
    login__buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    login__mensagem: (text = 'none') => ({
        color: 'red',
        textAlign: 'justify',
        display: text
    })
});
export { css };