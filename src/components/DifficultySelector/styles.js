import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    margin:40,
    textAlign:'center'
  },
  button: {
    marginVertical: 20,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: "black",
  },
});
