import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBox: {
    padding: 30,
    backgroundColor: Colors.white,
    borderRadius: 6,
    borderColor:"black",
    borderWidth:4
    
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
});
