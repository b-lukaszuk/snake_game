import React, { useState, useEffect, ReactElement } from "react";
import Canvas from "./canvas/Canvas";
import Block from "./interfaces/Block";
import "./App.css";
import { shiftBlock, shiftSnake } from "./utils/shiftSnake";
import eatFood from "./utils/eatFood";
import getFreeRandBlock from "./utils/getRandBlock";
import willSnakeHitWall from "./utils/willSnakeHitWall";
import willSnakeEatItself from "./utils/willSnakeEatItself";

import Direction from "./types/Direction";
import config from "./config/config";

const App: React.FC = (): ReactElement<HTMLElement> => {
    // x - no of row, y - no of col of canvas (see Canvas element)
    // x, y works similar to nrow, ncol in Python's pd.DataFrame
    const [snake, setSnake]: [Block[], Function] = useState(config.snake);
    const maxSnakeLength: number = config.nOfRows * config.nOfCols;
    const [food, setFood]: [Block, Function] = useState(config.food);
    const [moveDirection, setMoveDirection]: [Direction, Function] = useState(
        Direction.Right
    );
    const [gameOver, setGameOver]: [boolean, Function] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            let newDirection: Direction = moveDirection;
            if (event.key === "ArrowLeft") {
                newDirection = Direction.Left;
            }
            if (event.key === "ArrowUp") {
                newDirection = Direction.Up;
            }
            if (event.key === "ArrowRight") {
                newDirection = Direction.Right;
            }
            if (event.key === "ArrowDown") {
                newDirection = Direction.Down;
            }
            if (newDirection !== moveDirection &&
                Math.abs(newDirection - moveDirection) !== 9) {
                setMoveDirection(newDirection);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [moveDirection]);

    useEffect(() => {
        const moveSnake = (): void => {
            setSnake((prevSnake: Block[]) => {
                return shiftSnake(prevSnake, moveDirection);
            });
        }
        const willSnakeEatFood = (): boolean => {
            let newHead: Block = shiftBlock(snake[0], moveDirection);
            return newHead.x === food.x && newHead.y === food.y;
        }
        const growSnake = (): void => {
            setSnake((prevSnake: Block[]) => {
                return eatFood(prevSnake, food);
            })
        }
        // TODO
        // funkcja ustawiajaca newFood-a czasami ustawia go w miejscu oldFood-a
        // ktory teraz jest nowa glowa weza (spradzic co i jak i naprawic)
        const setNewFood = (): void => {
            setFood(getFreeRandBlock(0, config.nOfRows, snake));
        }

        const isGameOver = (): boolean => {
            return snake.length === maxSnakeLength ||
                willSnakeHitWall(snake, moveDirection, config.nOfRows) ||
                willSnakeEatItself(snake, moveDirection);
        }

        let timerId = setInterval(() => {
            if (!gameOver) {
                if (willSnakeEatFood()) {
                    growSnake();
                    setNewFood();
                } else {
                    moveSnake();
                }
            }
            if (isGameOver()) {
                setGameOver(true);
                clearInterval(timerId);
            }
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, [food, gameOver, maxSnakeLength, moveDirection, snake]);

    return (
        <div className="App">
            <p><b>Game status: </b> {gameOver ? "game over" : "in progress"}</p>
            <p>Snake length: {snake.length}</p>
            <p>Food coordinates: {food.x}, {food.y}</p>
            <button onClick={() => setGameOver((pgo: boolean) => !pgo)}>(un)pause game</button>
            <Canvas snake={snake} food={food} />
        </div>
    );
};

export default App;
