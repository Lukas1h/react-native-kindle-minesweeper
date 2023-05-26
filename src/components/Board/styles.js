import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
  horizontalContainer: {
    flexGrow: 0,
    marginHorizontal: 20,
    alignItems: 'center',
  },

  verticalContainer: {
    flexGrow: 0,
    // borderWidth: 4,
    // borderColor: 'black',
  },

  rows: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
