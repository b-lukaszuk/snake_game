import Block from "../interfaces/Block";
import Direction from "../types/Direction";
import isBlockInSnake from "./isBlockInSnake";
import { shiftBlock } from "./shiftSnake";

function willSnakeEatItself(snake: Block[], direction: Direction): boolean {
    let newHead: Block = shiftBlock(snake[0], direction);
    return isBlockInSnake(newHead, snake);
}

export default willSnakeEatItself;
