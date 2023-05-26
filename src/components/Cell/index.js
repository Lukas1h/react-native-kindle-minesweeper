import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native-kindle';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { flagCell, revealCell, revealCellsAround } from '../../actions/board';

import styles from './styles';

const Cell = ({ x, y }) => {
  const dispatch = useDispatch();
  const { revealed, flagged, hasBomb, bombsAround } = useSelector(
    ({ board: { cells, completed } }) => ({
      ...cells[y][x],
      revealed: completed || cells[y][x].revealed,
    }),
    shallowEqual
  );

  const handlePress = () => {
    console.log("Handeling press")
    if (flagged || revealed) {
      return;
    }

    if (bombsAround === 0) {
      dispatch(revealCellsAround(x, y));
    } else {
      dispatch(revealCell(x, y));
    }
  };

  const handleLongPress = () => {
    if (revealed) {
      return;
    }
    dispatch(flagCell(x, y, !flagged));
  };

  // return (
  //   <TouchableOpacity
  //     onPress={() => {
  //       handlePress();
        // console.log('Pressed!!!!');
  //     }}
  //     style={{ width: 30, height: 30 }}
  //   >
      // {revealed && (
      //   <Text style={styles.label}>{hasBomb ? 'B' : bombsAround || null}</Text>
      // )}
      // {!revealed && (
      //   <Text style={styles.label}>H</Text>
      // )}
  //   </TouchableOpacity>
  // );
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress();
        console.log('Pressed!!!!');
      }}
      style={[
        styles.container,
        revealed ? styles.containerVisible : styles.containerHidden,
      ]}
    >
      <Text
        style={[
          styles.label,
          { backgroundColor: revealed ? 'white' : 'lightgray' },
        ]}
      >
        {revealed ? (hasBomb ? 'B' : bombsAround || null) : null}
      </Text>
    </TouchableOpacity>
  );
};

export default Cell;
