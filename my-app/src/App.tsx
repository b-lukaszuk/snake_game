import React, { useState, useEffect, ReactElement } from "react";

import Block from "./interfaces/Block";
import Button from "./components/Button";
import config from "./config/config";
import Canvas from "./components/canvas/Canvas";
import Direction from "./types/Direction";
import eatFood from "./utils/eatFood";
import GameStatus from "./components/GameStatus";
import getFreeRandBlock from "./utils/getRandBlock";
import Instructions from "./components/Instructions";
import IRadioChoice from "./interfaces/IRadioChoice";
import { shiftBlock, shiftSnake } from "./utils/shiftSnake";
import RadioSelect from "./components/RadioSelect";
import willSnakeHitWall from "./utils/willSnakeHitWall";
import willSnakeEatItself from "./utils/willSnakeEatItself";

import "./App.css";

const App: React.FC = (): ReactElement<HTMLElement> => {
    const [delay, setDelay]: [number, Function] = useState(config.delay);
    const delays: IRadioChoice[] = [
        { id: 0, name: "Kindergarten", value: 1000 },
        { id: 1, name: "School", value: 800 },
        { id: 2, name: "College", value: 600 },
    ];
    const [food, setFood]: [Block, Function] = useState(config.food);
    const [gameOver, setGameOver]: [boolean, Function] = useState(true);
    const maxSnakeLength: number = config.nOfRows * config.nOfCols;
    const [moveDirection, setMoveDirection]: [Direction, Function] = useState(
        Direction.Right
    );
    const [snake, setSnake]: [Block[], Function] = useState(config.snake);
    const [score, setScore]: [number, Function] = useState(snake.length);

    const startClickHandler = (): void => {
        setScore(snake.length);
        setGameOver(false);
    };

    const radioSelectHandler = (delayMicroSecs: number): void => {
        setDelay(delayMicroSecs);
    };

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
            if (
                newDirection !== moveDirection &&
                Math.abs(newDirection - moveDirection) !== 9
            ) {
                setMoveDirection(newDirection);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [moveDirection]);

    useEffect(() => {
        const initializeGame = (): void => {
            setSnake(config.snake);
            setFood(config.food);
            setMoveDirection(Direction.Right);
        };
        const moveSnake = (): void => {
            setSnake((prevSnake: Block[]) => {
                return shiftSnake(prevSnake, moveDirection);
            });
        };
        const willSnakeEatFood = (): boolean => {
            let newHead: Block = shiftBlock(snake[0], moveDirection);
            return newHead.x === food.x && newHead.y === food.y;
        };
        const growSnake = (): void => {
            setSnake((prevSnake: Block[]) => {
                return eatFood(prevSnake, food);
            });
        };
        const setNewFood = (newSnake: Block[]): void => {
            setFood(getFreeRandBlock(0, config.nOfRows, newSnake));
        };

        const isGameOver = (): boolean => {
            return (
                willSnakeHitWall(snake, moveDirection, config.nOfRows) ||
                willSnakeEatItself(snake, moveDirection)
            );
        };

        const onGameOver = (): void => {
            clearInterval(timerId);
            initializeGame();
        };

        let timerId = setInterval(() => {
            if (gameOver) {
                onGameOver();
            } else {
                if (willSnakeEatFood()) {
                    // otherwise while loop in getFreeRandBlock (in setNewFood)
                    // is infinite
                    if (snake.length === maxSnakeLength - 1) {
                        setScore((prevScore: number) => prevScore + 1);
                        setGameOver(true);
                    } else {
                        // necessary,
                        // rendering is lagging about 1 frame behind code
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
        }, delay);
        return () => {
            clearInterval(timerId);
        };
    }, [delay, food, gameOver, maxSnakeLength, moveDirection, score, snake]);

    return (
        <div className="App">
            <Instructions />
            <GameStatus isGameOver={gameOver} score={score} />
            {gameOver && (
                <Button onClick={startClickHandler} displText={"start game"} />
            )}
            <Canvas snake={snake} food={food} isGameOver={gameOver} score={score} />
            {gameOver && (
                <RadioSelect
                    choices={delays}
                    actionOnSelect={radioSelectHandler}
                />
            )}
        </div>
    );
};

export default App;
