import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // paddingTop: 64,
    justifyContent: "space-evenly",
    // alignItems: "center",
    // gap: 12,
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
    // paddingTop:18,
    width:'100%',
    margin:0
    
  },
  wrapperform:{
    padding:16,
    justifyContent:'space-between',
    gap:12,
    // backgroundColor:'red',
    height:'50%',
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
  },
  label:{
    margin:0,
    padding:0
  }
});

export default styles;
