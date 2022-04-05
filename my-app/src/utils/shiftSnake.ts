interface Block {
    x: number,
    y: number,
}

enum Direction {
    Up,
    Right,
    Down,
    Left,
}

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
    let newSnake: Block[] = [];
    newSnake.push(shiftBlock(snake[0], direction));
    for (let i = 0; i < snake.length - 1; i++) {
        newSnake.push(snake[i]);
    }
    return newSnake;
}

export default shiftSnake;
