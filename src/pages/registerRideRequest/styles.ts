import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
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
    alignItems:'center',
    marginTop:30
  },
  buttonText:{
    color:'#FFFFFF',
    fontWeight:'bold',
    fontSize:16,
  },
  errorText:{
    color: 'red',
  },
  label:{
    lineHeight:25
  }
});

export default styles;
