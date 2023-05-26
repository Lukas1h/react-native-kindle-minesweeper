import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Button,
  Dimensions,
  Easing,
  Modal,
  Text,
  View
} from 'react-native-kindle';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Minesweeper from '../../lib/Minesweeper';
import { setBoard } from '../../actions/board';

import styles from './styles';

const { height: screenHeight } = Dimensions.get('screen');

const ResultModal = () => {

  const dispatch = useDispatch();
  const { difficulty, gameCompleted, gameWon } = useSelector(
    ({ board: { difficulty: gameDifficulty, completed, won } }) => ({
      difficulty: gameDifficulty,
      gameCompleted: completed,
      gameWon: won,
    }),
    shallowEqual
  );


  const handleRetryPress = () => {
    const game = new Minesweeper();
    const board = game.buildGame(difficulty);
    dispatch(setBoard(board, difficulty));
  };

  if(gameCompleted){
    return (
      <View style={[styles.messageBox]}>
        <Text style={styles.title}>{gameWon ? 'You Win' : 'You Lose'}</Text>
        <Button title="Retry" onPress={handleRetryPress} />
      </View>
    )
  }else{
    return (
      <></>
    );
  }
};

export default ResultModal;
