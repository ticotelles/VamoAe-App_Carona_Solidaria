import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#2563EB",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12
    
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: '80%',
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginTop: 12,
  },
  logo:{
    // backgroundColor: 'red',
    width: 250,
    height: 230,
    marginBottom: 20,
  },
  wrapperCadastro: {
    width: '65%',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLogin:{
    alignItems:'center',
    backgroundColor:'#EA9C36',
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: '65%',
    borderRadius: 6,
    marginTop: 12,
  },
  textNaoCadastro:{
    color: '#4B5563',
  },
  textCadastro:{
    color:'#000000',
    fontWeight: 'bold',
  },
    errorText:{
    color: 'red',
  },
});

export default styles;
