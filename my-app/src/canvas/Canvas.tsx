import React, { useEffect, useRef } from 'react';
import setCanvasDefaults from './draw/setCanvasDefaults';

import './Canvas.css';

interface Block {
    x: number,
    y: number,
}

interface Props {
    snake: Block[],
    food: Block,
}

const Canvas: React.FC<Props> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let snake: Block[] = props.snake;
    let food: Block = props.food;

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (canvas === null) { return undefined; }
        setCanvasDefaults(canvas);
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx === null) { return undefined; }
    }, [snake, food]);

    return (
        <div>
            <canvas ref={canvasRef} className="canvas" />
        </div>
    )
}

export default Canvas;
