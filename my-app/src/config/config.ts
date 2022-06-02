const config = {
    // important condition: nOfRows === nOfCols
    "nOfRows": 5,
    "nOfCols": 5,
    // x, y coordinates work similarly to nrow, ncol in Python's pd.DataFrame indexing
    "snake": [
        { "x": 0, "y": 2 },
        { "x": 0, "y": 1 },
        { "x": 0, "y": 0 },
    ],
    "snakeColor": "blue",
    "food": { "x": 3, "y": 3 },
    "foodColor": "red",
    "delay": 1000,
}

export default config;
