import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
    contentDicas: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 10,
    },
    contentDicas2: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 20,
    },
    textInformacoes: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    labelInformacoes: {
        marginTop: 6,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#748176'
    },
    divisor: {
        width: 365,
        backgroundColor: '#C9CFCA',
        height: 1,
        marginTop: 10
    },
    dicasResponse: {
        padding: 30,
        backgroundColor: '#fff',
        margin: 30,
        borderRadius: 10
    },
    dicasResponseTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dicasResponseContent: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10
    },
    imageDicas: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30
    },
    arrowDica: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
        alignItems: 'center',
        marginTop: 10
    },
    searchDica: {
        width: 18,
        height: 18,
        resizeMode: 'cover',
        alignItems: 'center',
        marginTop: 5,
        padding: 10
    },
    searchInput: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#DBDBDB',
        width: '100%',
        borderRadius: 10,
        padding: 5
    },

});
export {css};