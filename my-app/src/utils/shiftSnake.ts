import Block from '../interfaces/Block';
import Direction from '../types/Direction';

// x and y are like row, col in Python's pd.DataFrame
function shiftBlock(block: Block, direction: Direction): Block {
    if (direction === Direction.Up) {
        return { x: block.x - 1, y: block.y };
    } else if (direction === Direction.Down) {
        return { x: block.x + 1, y: block.y };
    } else if (direction === Direction.Right) {
        return { x: block.x, y: block.y + 1 };
    } else {
        return { x: block.x, y: block.y - 1 };
    }
}

function shiftSnake(snake: Block[], direction: Direction): Block[] {
    let newSnake: Block[] = snake.slice(0, -1);
    newSnake.unshift(shiftBlock(snake[0], direction))
    return newSnake;
}

export { shiftBlock, shiftSnake };
