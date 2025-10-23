import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 12,
    backgroundColor:'#F9FAFB'
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderColor:"#BDBDBD",
    borderWidth:1,
    borderRadius:8,
    backgroundColor:'#FFFFFF',
    padding:15,
    paddingTop:18,
  },
  wrapperform:{
    padding:16,
    // justifyContent:'space-between',
    // backgroundColor:'red',
    gap:12,
    // height:'50%',
    flex:1,
    width:'100%',
  },
  button:{
    paddingVertical:12,
    paddingHorizontal:42,
    borderRadius:8,
    backgroundColor:'#EA9C36',
  },
  buttonText:{
    color:'#081B43',
    fontWeight:'bold',
    fontSize:16,
  },
  errorText:{
    color: 'red',
  }
});

export default styles;
