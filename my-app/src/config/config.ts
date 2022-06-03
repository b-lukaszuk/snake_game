const config = {
    "delay": 1000,
    "food": { "x": 3, "y": 3 },
    "foodColor": "red",
    // important condition: nOfRows is always equal to nOfCols (gameField is square)
    "nOfRows": 5,
    // x, y coordinates work similarly to nrow, ncol in Python's pd.DataFrame indexing
    "snake": [
        { "x": 0, "y": 2 },
        { "x": 0, "y": 1 },
        { "x": 0, "y": 0 },
    ],
    "snakeColor": "blue",
}

export default config;
