import Block from "../interfaces/Block";

function isBlockInSnake(block: Block, snake: Block[]): boolean {
    for (let i = 0; i < snake.length; i++) {
        if (block.x === snake[i].x && block.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

export default isBlockInSnake;
