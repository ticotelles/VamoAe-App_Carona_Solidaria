import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // paddingTop: 64,
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
    paddingTop:20,
  }
});

export default styles;
