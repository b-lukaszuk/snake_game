import React, { useState, useEffect, ReactElement } from "react";
import Canvas from "./canvas/Canvas";
import Block from "./interfaces/Block";
import "./App.css";
import { shiftBlock, shiftSnake } from "./utils/shiftSnake";
import eatFood from "./utils/eatFood";
import getFreeRandBlock from "./utils/getRandBlock";
import Direction from "./types/Direction";
import config from "./config/config";

const App: React.FC = (): ReactElement<HTMLElement> => {
    // x - no of row, y - no of col of canvas (see Canvas element)
    // x, y works similar to nrow, ncol in Python's pd.DataFrame
    const [snake, setSnake]: [Block[], Function] = useState(config.snake);
    const [food, setFood]: [Block, Function] = useState(config.food);
    const [moveDirection, setMoveDirection]: [Direction, Function] = useState(
        Direction.Right
    );
    const [gameOver, setGameOver]: [boolean, Function] = useState(false);

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
            setSnake((prevSnake: Block[]) => {
                return shiftSnake(prevSnake, moveDirection);
            });
            let newSnakeHead: Block = shiftBlock(snake[0], moveDirection);
            if (newSnakeHead.x === food.x && newSnakeHead.y === food.y) {
                setSnake((prevSnake: Block[]) => {
                    return eatFood(prevSnake, food);
                });
                console.log("newSnake:", snake);
                setFood((prevFood: Block) => {
                    return {
                        prevFood,
                        ...getFreeRandBlock(0, config.nOfRows + 1, snake),
                    };
                });
                console.log("newFood", food);
            }
        }, 1000);
        if (gameOver) {
            clearInterval(timerId);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [food, moveDirection, snake, gameOver]);

    return (
        <div className="App">
            <button onClick={() => setGameOver(true)}>End game</button>
            <Canvas snake={snake} food={food} />
        </div>
    );
};

export default App;
