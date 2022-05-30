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
    const [food, setFood]: [Block, Function] = useState(config.food);
    const [moveDirection, setMoveDirection]: [Direction, Function] = useState(
        Direction.Right
    );
    const [gameOver, setGameOver]: [boolean, Function] = useState(true);
    const [score, setScore]: [number, Function] = useState(snake.length);
    const maxSnakeLength: number = config.nOfRows * config.nOfCols;

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
        const setNewFood = (newSnake: Block[]): void => {
            setFood(getFreeRandBlock(0, config.nOfRows, newSnake));
        }

        const isGameOver = (): boolean => {
            return (willSnakeHitWall(snake, moveDirection, config.nOfRows) ||
                willSnakeEatItself(snake, moveDirection));
        }

        let timerId = setInterval(() => {
            if (gameOver) {
                clearInterval(timerId);
            } else {
                if (willSnakeEatFood()) {
                    // otherwise while loop in getFreeRandBlock (in setNewFood)
                    // is infinite
                    if (snake.length === (maxSnakeLength - 1)) {
                        setScore((prevScore: number) => prevScore + 1);
                        setGameOver(true);
                    } else {
                        // necessary, because of about 1 frame delay
                        // otherwise, new food may come in head
                        setScore((prevScore: number) => prevScore + 1);
                        setNewFood(eatFood(snake, food));
                        growSnake();
                    }
                } else {
                    moveSnake();
                }
            }
            if (isGameOver()) {
                setGameOver(true);
            }
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, [food, gameOver, moveDirection, maxSnakeLength, snake]);

    return (
        <div className="App">
            <p><b>Game status: </b> {gameOver ? "game over" : "in progress"}</p>
            <p><b>Score: </b>{score}</p>
            <button onClick={() => setGameOver(false)}>start game</button>
            <Canvas snake={snake} food={food} isGameOver={gameOver} />
        </div>
    );
};

export default App;
