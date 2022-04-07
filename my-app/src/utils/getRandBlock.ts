import Block from "../interfaces/Block";
import randInt from "./randInt";

function getRandBlock(minIncl: number, maxExcl: number): Block {
    return { x: randInt(minIncl, maxExcl), y: randInt(minIncl, maxExcl) };
}

export default getRandBlock;
