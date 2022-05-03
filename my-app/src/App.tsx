import React, { useState, useEffect, ReactElement } from "react";
import Canvas from "./canvas/Canvas";
import Block from "./interfaces/Block";
import "./App.css";
import { shiftSnake } from "./utils/shiftSnake";
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
        const moveSnake = (): void => {
            setSnake((prevSnake: Block[]) => {
                return shiftSnake(prevSnake, moveDirection);
            });
        }
        const didSnakeAteFood = (): boolean => {
            return snake[0].x === food.x && snake[0].y === food.y;
        }
        const growSnake = (): void => {
            setSnake((prevSnake: Block[]) => {
                return eatFood(prevSnake, food);
            })
        }
        const setNewFood = (): void => {
            setFood(getFreeRandBlock(0, config.nOfRows + 1, snake));
        }

        let timerId = setInterval(() => {
            if (didSnakeAteFood()) {
                growSnake();
                setNewFood();
            }
            moveSnake();
        }, 1000);
        if (gameOver) {
            clearInterval(timerId);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [food, gameOver, moveDirection, snake]);

    return (
        <div className="App">
            <button onClick={() => setGameOver(true)}>End game</button>
            <Canvas snake={snake} food={food} />
        </div>
    );
};

export default App;
