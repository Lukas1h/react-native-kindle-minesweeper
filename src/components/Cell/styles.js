import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import BoardConstants from '../../constants/board';

export default StyleSheet.create({
  container: {
    height: BoardConstants.cellSize - 1,
    width: BoardConstants.cellSize - 1,
    justifyContent: 'center',
  },
  containerVisible: {},
  containerHidden: {
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 2,
  },
  label: {
    textAlign: 'center',
    fontWeight: '800',
  },
});
