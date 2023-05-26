import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // justifyContent:"center",
    // alignItems:"center"
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    
    paddingTop:20,
    paddingBottom:60
  },
  headerText: {
    fontSize: 20,
    fontWeight: '800',
    color: "black",
  },
});
