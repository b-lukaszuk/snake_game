import Block from '../interfaces/Block';

// returns a new snake (after eating a food)
function eatFood(snake: Block[], food: Block): Block[] {
    let newSnake: Block[] = snake.slice();
    newSnake.unshift(food);
    return newSnake;
}

export default eatFood;
