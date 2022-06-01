import React, { ReactElement, useEffect, useRef } from "react";
import setCanvasDefaults from "./draw/setCanvasDefaults";
import displayGameOver from "./draw/displayGameOver";
import drawBlock from "./draw/drawBlock";
import Block from "../..//interfaces/Block";
import config from "../../config/config";

import "./Canvas.css";

interface Props {
    snake: Block[];
    food: Block;
    isGameOver: boolean;
    score: number;
}

const Canvas: React.FC<Props> = (props): ReactElement<HTMLElement> => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const snake: Block[] = props.snake;
    const food: Block = props.food;
    const isGameOver: boolean = props.isGameOver;
    const score: number = props.score;
    const nOfRows: number = config.nOfRows;
    const nOfCols: number = config.nOfCols;
    const snakeColor: string = config.snakeColor;
    const foodColor: string = config.foodColor;

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (canvas === null) {
            return undefined;
        }
        const blockWidth: number = canvas.width / nOfCols;
        const blockHeight: number = canvas.height / nOfRows;
        setCanvasDefaults(canvas);
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx === null) {
            return undefined;
        }
        snake.forEach((b) =>
            drawBlock(ctx, b.x, b.y, blockWidth, blockHeight, snakeColor)
        );
        drawBlock(ctx, food.x, food.y, blockWidth, blockHeight, foodColor);

        if (isGameOver) {
            displayGameOver(ctx, canvas, score);
        }
    }, [snake, food, nOfRows, nOfCols, foodColor, snakeColor, isGameOver, score]);

    return (
        <div>
            <canvas width="500" height="500" ref={canvasRef} className="canvas" />
        </div>
    );
};

export default Canvas;
