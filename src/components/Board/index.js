import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native-kindle';
import { useSelector } from 'react-redux';

import Cell from '../Cell';

import BoardConstants from '../../constants/board';

import styles from './styles';

const Board = () => {
  const difficulty = useSelector(({ board }) => board.difficulty);
  const { columns, rows } = BoardConstants.gameModes[difficulty];
  let cells = [];

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      cells.push(<Cell key={`cell-${i}-${j}`} x={i} y={j} />);
      //  cells.push(
      //    <TouchableOpacity
      //       onPress={()=>{console.log("Pressed!!!!")}}
      //        style={{ width: 30, height: 30 }}
      //    >
      //      <Text>H!</Text>
      //    </TouchableOpacity>
      //  );
    }
  }

  return (
    <View style={{width:"100%",height:"100%"}}>
      <View
        style={styles.horizontalContainer}
      >
        <View
          style={styles.verticalContainer}
        >
          <View
            style={[styles.rows, { width: columns * BoardConstants.cellSize }]}
          >
            {cells}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Board;
