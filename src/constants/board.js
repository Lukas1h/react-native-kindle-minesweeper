const gameModes = {
  Beginner: {
    columns: 8,
    rows: 8,
    bombsCount: 10,
  },
  Intermediate: {
    columns: 9,
    rows: 9,
    bombsCount: 12,
  },
  Expert: {
    columns: 10,
    rows: 10,
    bombsCount: 14,
  },
};

export default {
  cellSize: 50,
  gameModes,
};
