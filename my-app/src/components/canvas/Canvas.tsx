import React, { ReactElement, useEffect, useRef } from "react";

import Block from "../..//interfaces/Block";
import config from "../../config/config";
import displayGameOver from "./draw/displayGameOver";
import drawBlock from "./draw/drawBlock";
import setCanvasDefaults from "./draw/setCanvasDefaults";

import "./Canvas.css";

interface Props {
    food: Block;
    isGameOver: boolean;
    score: number;
    snake: Block[];
    nRows: number;
}

const Canvas: React.FC<Props> = (props): ReactElement<HTMLElement> => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const food: Block = props.food;
    const foodColor: string = config.foodColor;
    const isGameOver: boolean = props.isGameOver;
    // nRows is always equal nCols
    const nRows: number = props.nRows;
    const score: number = props.score;
    // x, y coordinates work similarly to nrow, ncol in Python's pd.DataFrame indexing
    const snake: Block[] = props.snake;
    const snakeColor: string = config.snakeColor;

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (canvas === null) {
            return undefined;
        }
        const blockWidth: number = canvas.width / nRows;
        const blockHeight: number = canvas.height / nRows;
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
    }, [snake, food, nRows, foodColor, snakeColor, isGameOver, score]);

    return (
        <div>
            <canvas width="500" height="500" ref={canvasRef} className="canvas" />
        </div>
    );
};

export default Canvas;
