import Block from '../interfaces/Block';

function eatFood(snake: Block[], food: Block): Block[] {
    let newSnake: Block[] = new Array(snake.length + 1);
    newSnake[0] = food;
    for (let i = 0; i < snake.length; i++) {
        newSnake[i + 1] = snake[i];
    }
    return newSnake;
}

export default eatFood;
