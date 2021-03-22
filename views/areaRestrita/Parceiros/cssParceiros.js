import {StyleSheet} from 'react-native';

const cssparceiros = StyleSheet.create({
    arrowReturn:{
        paddingTop:50,
        paddingLeft:20,
        backgroundColor:'#7B7EA3'
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
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 5
    },
    contentDicas2: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 5,
        marginBottom: 10
    },
    containerFile:{
        backgroundColor:'#7B7EA3'
    },
    textWellcome:{
        fontSize:33,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop:20,
        color:'#fff'
    },
    containerParceiros:{
        padding:20
    },
    contentParceiros:{
        backgroundColor:'#fff',
        minHeight:100,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 3,
        shadowRadius: 1,
        padding:20,
        margin:5
    },
    informationName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4
    },
    informationAdress: {
        fontSize: 16,
    },

})

export {cssparceiros};