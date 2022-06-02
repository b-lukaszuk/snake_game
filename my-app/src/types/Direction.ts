enum Direction {
    Up = 1,
    Down = 10,
    Right = 2,
    Left = 11,
}
// such a set of numbers prevents backtracking the snake (turning 180 deg)
// by checking the following:
// if(Math.abs(newDirection - moveDirection) !== 9) {changeDirection()}

export default Direction;
