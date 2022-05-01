import React, { useEffect, useRef } from 'react';
import setCanvasDefaults from './draw/setCanvasDefaults';
import drawBlock from './draw/drawBlock';
import Block from '../interfaces/Block';
import config from "../config/config";

import './Canvas.css';

interface Props {
    snake: Block[],
    food: Block,
}

const Canvas: React.FC<Props> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const snake: Block[] = props.snake;
    const food: Block = props.food;
    const nOfRows: number = config.nOfRows;
    const nOfCols: number = config.nOfCols;
    const snakeColor: string = config.snakeColor;
    const foodColor: string = config.foodColor;

    useEffect(() => {
        console.log("canvas snake:", snake);
        console.log("canvas food", food);
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (canvas === null) { return undefined; }
        const blockWidth: number = canvas.width / nOfCols;
        const blockHeight: number = canvas.height / nOfRows;
        setCanvasDefaults(canvas);
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx === null) { return undefined; }
        snake.forEach(b => drawBlock(ctx, b.x, b.y, blockWidth, blockHeight, snakeColor));
        drawBlock(ctx, food.x, food.y, blockWidth, blockHeight, foodColor);
    }, [snake, food, nOfRows, nOfCols, foodColor, snakeColor]);

    return (
        <div>
            <canvas
                width="500" height="500"
                ref={canvasRef} className="canvas" />
        </div>
    )
}

export default Canvas;
