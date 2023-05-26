import React from 'react';
import { TouchableOpacity, Text, View, Button } from 'react-native-kindle';
import { useDispatch } from 'react-redux';

import BoardConstants from '../../constants/board';
import Minesweeper from '../../lib/Minesweeper';
import { setBoard } from '../../actions/board';

import styles from './styles';

const DifficultySelector = () => {
  const dispatch = useDispatch();

  const handleSelect = (difficulty) => {
    const game = new Minesweeper();
    const board = game.buildGame(difficulty);
    dispatch(setBoard(board, difficulty));
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>Select Difficulty</Text>
        {Object.keys(BoardConstants.gameModes).map((difficulty) => (
          <Button styles={{width:"100%"}} title={difficulty} onPress={() => handleSelect(difficulty)} />
        ))}
      </View>
    </View>
  );
};

export default DifficultySelector;
