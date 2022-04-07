import Block from "../interfaces/Block";
import randInt from "./randInt";
import isBlockInSnake from "./isBlockInSnake";

function getRandBlock(minIncl: number, maxExcl: number): Block {
    return { x: randInt(minIncl, maxExcl), y: randInt(minIncl, maxExcl) };
}

function getFreeRandBlock(minIncl: number, maxExcl: number, snake: Block[]): Block {
    let randBlock: Block = getRandBlock(minIncl, maxExcl);
    while (isBlockInSnake(randBlock, snake)) {
        randBlock = getRandBlock(minIncl, maxExcl);
    }
    return randBlock;
}

export default getFreeRandBlock;
