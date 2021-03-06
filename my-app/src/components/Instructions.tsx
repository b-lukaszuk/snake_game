import { ReactElement } from "react";

const Instructions: React.FC = (): ReactElement<HTMLElement> => {
    return (
        <div >
            <p> <b>Instructions: </b> </p>
            <span>
                Start the game and the snake will move itself.
                <br />
                Press arrow keys on your keybord (&#8592; &#8593; &#8594; &#8595;) to change the direction of the snake
                <br />
                (turn 90 deg. right or left).
                <br />
                Collect food. Avoid collision with the walls and the snake's body.
            </span>
        </div>
    )
}

export default Instructions;
