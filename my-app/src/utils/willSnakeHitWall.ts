import Block from "../interfaces/Block";
import Direction from "../types/Direction";
import { shiftBlock } from "./shiftSnake";

function willSnakeHitWall(snake: Block[], direction: Direction,
    noOfRows: number): boolean {
    let newHead: Block = shiftBlock(snake[0], direction);
    let outOfX: boolean = newHead.x < 0 || newHead.x >= noOfRows;
    let outOfY: boolean = newHead.y < 0 || newHead.y >= noOfRows;
    return outOfX || outOfY;
}

export default willSnakeHitWall;
