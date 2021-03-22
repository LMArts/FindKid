import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E3444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#0E3444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPage:{
    backgroundColor:'#DBCBD8',
    padding:10,
    margin: 10
  },
  styleText:{
    color:'#564787'
  },
  button__home:{
    backgroundColor: '#FFADD6',
    padding:20,
    borderRadius: 10,
    marginBottom:20 
  },
  button__rastreio:{
  backgroundColor: '#FFADD6',
  padding:20,
  borderRadius: 10
  },
  text__home:{
    textAlign: 'center',
    color:'#fff',
    fontSize:19,
    fontWeight: 'bold'
  },
  text__rastreio:{
    textAlign: 'center',
    color:'#fff',
    fontSize:19,
    fontWeight: 'bold'
  },
  containerLogin:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login__logomarca:{
    marginTop: 10
  },
  login__textLogomarca:{
    fontSize:55,
    color:'#000',
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 30,
    marginBottom: 30
  },
  login__mensagem:(text='none')=>({
      fontSize: 22,
      fontWeight: 'bold',
      color: 'red',
      marginTop: 10,
      marginBottom: 15,
      display:text
  }),
  login__form:{
    width:'80%'
  },
  login__input:{
    backgroundColor: '#DBDBDB',
    fontSize: 19,
    padding: 10,
    marginBottom: 15,
    borderRadius: 10
  },
  login__button:{
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#0176A9',
  },
  login__buttonText:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  login__buttonFirstAccess: {
    color: '#0176A9',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 15
  },
  btnUpdateInfoSenha:{
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    marginTop:10,
    backgroundColor: '#3d5a80',
  },
  areaMenu:{
    marginTop:30,
    backgroundColor:'#E9EDEC'
  },
  wellcomeUser:{
    textAlign:'center',
    fontSize:30,
    margin:30,
    fontWeight: 'bold',
    color:'#252D2A'
  },
  containerMenu:{
    flex: 1,
    backgroundColor: '#E9EDEC',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection:'row'
  },
  contentF:{
    width:150,
    height: 150,
    backgroundColor: '#fff',
    margin:10, 
    borderRadius:8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent:'center',
    alignItems:"center"
  },
  imageMenu:{
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  titleMenu:{
    textAlign:'center',
    fontSize:19,
    fontWeight: 'bold'
  },
  buttonExit:{
    padding: 10,
    marginBottom: 15,
    marginLeft:37,
    borderRadius: 10,
    backgroundColor: '#FF4747',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'82%',
    marginVertical:10,
    color: '#fff'
  },
  titleExit:{
    textAlign:'center',
    fontSize:19,
    fontWeight: 'bold',
    color:'#fff'
  },
  updateSenha__form:{
    width:'100%',
    backgroundColor:'#fff',
    padding: 30,
    flex: 1,
    justifyContent:'center',
    
  },
  trocarSenhaTitle:{
    fontSize:40,
    textAlign:'left',
    fontWeight: 'bold',
    marginBottom:30
  },
  containerPerfilResp:{
    backgroundColor:'#fff',
    flex: 1,
    flexDirection:'column',
    padding: 10
  },
  containerCadastro: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    padding: 0
  },
  label_information:{
    margin:5,
    fontSize:22,
    backgroundColor:'#f8f9fa',
    padding:20,
    borderRadius:10,
  },
  labelTitle:{
    fontSize:22,
    fontWeight: 'bold',
    color:'#3d5a80'
  },
  labelTitleLocal: {
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#3d5a80'
  },
  blockApresentacao:{
    width:'100%',
    backgroundColor:'#fff',
    marginLeft:25,
    marginTop:30
  },
  labelNamePerfil:{
    fontSize:28,
    fontWeight: 'bold',
    color:'#3d5a80',
    marginTop: 8
  },
  labelCelPerfil:{
    fontSize:18,
    marginTop:10
  },
  dadosResposavel:{
    padding: 10,
  },
  conatainerButton:{
    marginTop:0,
    padding:10
  },
  btnUpdateInfo:{
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#3d5a80',

  },
  contentDicas:{
    flex:1,
    justifyContent:'space-between',
    flexWrap: 'wrap',
    flexDirection:'row',
    padding: 20,

  },
  iconArrow:{
    width: 15,
    height: 15,
    resizeMode: 'cover',
    alignItems:'center',
    marginTop:10
  },
  textInformacoes:{
    fontSize:16,
    fontWeight: 'bold',
    
  },
  labelInformacoes:{
    marginTop:6,
    fontSize:15,
    fontWeight: 'bold',
    color:'#748176'
  },
  divisor:{
    width:375,
    backgroundColor:'#C9CFCA',
    height:1,
    marginLeft:10
  },
  dicasResponse:{
    padding:30,
    backgroundColor:'#fff',
    margin:30,
    borderRadius:10
  },
  dicasResponseTitle:{
    textAlign:'center',
    fontSize:26,
    fontWeight: 'bold',
  },
  dicasResponseContent:{
    fontSize:18,
    textAlign: 'center',
    marginTop:10
  },
  arrowReturn:{
    paddingTop:50,
    paddingLeft:20,
    backgroundColor:'#fff'
  },
  trocarSenhaInput:{
    backgroundColor:'#f8f9fa',
    padding:20,
    marginBottom:10,
    fontSize:15,
    borderRadius:10,
  },
  imageDicas:{
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:30
  },
  qrcode: (display = 'flex') => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    justifyContent: 'center',
    display: display
  }),
  qrcode__form: (display = 'none') => ({
    width: '100%',
    display: display
  }),
  containerList:{
    textAlign: 'justify',
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 3,
    shadowRadius: 1
  },
  imageQRCode:{
    marginLeft: 'auto',
    marginRight: 'auto'
  }, 
  textoCodigo:{
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  conteinerParceiros: {
    backgroundColor: '#fff',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 10
  },
  contentParceiros: {
    backgroundColor: '#edf2f4',
    padding: 20,
    marginBottom: 10,
    borderRadius: 16
  },
  informationName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  informationAdress: {
    fontSize: 16,
  },
  text:{
    color: "black"
  },
  blockImageExibeParceiros:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    backgroundColor:'#fff'
  },  
  blockImageExibeContent:{
    width: 350,
    height: 200,
    resizeMode: 'cover',
    borderRadius:10
  },
  containerFile:{
    backgroundColor:'#fff'
  },
  blockImageAvaliacao:{
    width: 130,
    height: 30,
    resizeMode: 'cover',
    marginLeft:10,
    marginTop:10
  },
  containerDatailsEstabelecimento:{
    padding:30
  },
  detailsEstabelecimento:{
    marginBottom:10,
    fontSize:20
  },
  labelEstabelecimento:{
    fontWeight: 'bold'
  },
  divisor: {
    width: 375,
    backgroundColor: '#C9CFCA',
    height: 1,
    marginTop: 10
  },
  arrowDica: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
    alignItems: 'center',
    marginTop: 20
  },
  contentDicas: {
    backgroundColor: "#ebebeb",
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },

});
export {css};