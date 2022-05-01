import Block from '../interfaces/Block';

function eatFood(snake: Block[], food: Block): Block[] {
    let newSnake: Block[] = snake.slice();
    newSnake.unshift(food);
    return newSnake;
}

export default eatFood;
