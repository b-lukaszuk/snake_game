import React, { useState, useEffect } from "react";
import Canvas from "./canvas/Canvas";
import Block from "./interfaces/Block";
import "./App.css";
import { shiftBlock, shiftSnake } from "./utils/shiftSnake";
import Direction from "./types/Direction";
import config from "./config/config";

function App() {
    // x - no of row, y - no of col of canvas (see Canvas element)
    // x, y works similar to nrow, ncol in Python's pd.DataFrame
    const [snake, setSnake]: [Block[], Function] = useState(config.snake);
    const [food, setFood]: [Block, Function] = useState(config.food);
    const [moveDirection, setMoveDirection]: [Direction, Function] = useState(
        Direction.Right
    );

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            console.log("keypress detected:", event.key);
            if (event.key === "ArrowLeft") {
                setMoveDirection(Direction.Left);
            }
            if (event.key === "ArrowUp") {
                setMoveDirection(Direction.Up);
            }
            if (event.key === "ArrowRight") {
                setMoveDirection(Direction.Right);
            }
            if (event.key === "ArrowDown") {
                setMoveDirection(Direction.Down);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        let timerId = setInterval(() => {
            setSnake(shiftSnake(snake, moveDirection));
        }, 500);
        return () => {
            clearInterval(timerId);
        };
    }, [food, moveDirection, snake]);

    return (
        <div className="App">
            <Canvas snake={snake} food={food} />
        </div>
    );
}

export default App;
