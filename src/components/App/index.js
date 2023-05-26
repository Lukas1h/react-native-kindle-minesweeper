import React from 'react';
import { View,Touchable,Header,Text,Image} from 'react-native-kindle';
import { useSelector, useDispatch } from 'react-redux';
import { setBoard } from '../../actions/board';

import Game from '../Game';
import DifficultySelector from '../DifficultySelector';

import styles from './styles';

const App = () => {
    const dispatch = useDispatch();

  const boardInitialized = useSelector(
    ({ board: { cells } }) => cells !== null
  );

  const backButton = ()=>{
    return (
    <Touchable
      onPress={() => {
        dispatch(setBoard(null, null));
      }}
      style={{paddingRight:20}}
    >
      <Image
        style={{ width: 27, height: 27 }}
        source={{ uri: 'file:///app/KPPMainApp/res/KPPUIChrome/BackArrow.svg' }}
      />
    </Touchable>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        headerButtonRight={boardInitialized ? backButton() : <Text></Text>}
        title="Minesweeper"
      />
      {boardInitialized ? <Game /> : <DifficultySelector />}
    </View>
  );
};

export default App;
