import React, { useState, useEffect } from 'react';
import { View, Text, Touchable, StyleSheet } from 'react-native-kindle';
import { Game, moves } from 'js-chess-engine';

const App = () => {
  const [game, setGame] = useState(new Game());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isAITurn, setIsAITurn] = useState(false);
  const gameData = game.exportJson();
  const possibleMoves = moves(gameData);

  useEffect(() => {
    if (isAITurn) {
      makeAIMove();
    }
  }, [isAITurn]);

  const handleSquarePress = (square) => {
    console.log("Handling square press")
    const { from } = selectedSquare || {};

    if (from && possibleMoves[from]?.includes(square)) {
      game.move(from, square);
      setSelectedSquare(null);
      setGame(game);
      setIsAITurn(true);
    } else {
      setSelectedSquare({ from: square });
    }
  };

  const makeAIMove = () => {
    const { bestMove } = game.aiMove();
    if (bestMove) {
      game.move(bestMove.from, bestMove.to);
      setGame(game);
    }
    setIsAITurn(false);
  };


  const renderSquare = (square) => {

    const piece = gameData.pieces[square];
    const isSelected = selectedSquare?.from === square;
    const squareMoves = possibleMoves[square];
    

    return (
      <Touchable
        key={square}
        style={[
          styles.square,
          {
            backgroundColor: piece
              ? /[A-Z]/.test(piece)
                ? 'black'
                : 'white'
              : 'white',
            borderWidth: piece ? 2 : 1,
            borderColor: piece
              ? /[A-Z]/.test(piece)
                ? 'white'
                : 'black'
              : 'black',
          },
        ]}
        onPress={() => handleSquarePress(square)}
      >
        <Text
          style={[
            styles.piece,
            {
              color: piece
                ? /[A-Z]/.test(piece)
                  ? 'white'
                  : 'black'
                : 'white',
              backgroundColor: /[A-Z]/.test(piece) ? 'black' : 'white',
            },
          ]}
        >
          {getSymbolFromChar(piece)}
        </Text>
      </Touchable>
    );
  };

  const boardSquares = [];
  for (let row = 8; row >= 1; row--) {
    for (let col = 1; col <= 8; col++) {
      const square = String.fromCharCode(col + 64) + row;
      boardSquares.push(renderSquare(square));
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 10,
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        {isAITurn ? 'Thinking...' : 'Your Turn'}
      </Text>
      <Text
        style={{
          margin: 10,
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          fontFamily: 'Bookerly Display',
        }}
      >
        Font Test: ♔♕♖♗♘♙♚♛♜♝♞♟
      </Text>
      <View style={styles.board}>{boardSquares}</View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 60 * 11,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 60 * 8,
    height: 60 * 8,
  },
  square: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"grey",
    padding:4
  },
  piece: {
    fontSize: 24,
  },
});

export default App;
