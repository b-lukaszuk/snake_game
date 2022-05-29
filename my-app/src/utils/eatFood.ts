import Block from '../interfaces/Block';

// returns new snake (after eating food)
function eatFood(snake: Block[], food: Block): Block[] {
    let newSnake: Block[] = snake.slice();
    newSnake.unshift(food);
    return newSnake;
}

export default eatFood;
