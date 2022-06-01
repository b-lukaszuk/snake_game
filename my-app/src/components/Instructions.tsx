import { ReactElement } from "react";

const Instructions: React.FC = (): ReactElement<HTMLElement> => {
    return (
        <div>
            <p> <b>Instructions: </b> </p>
            <span>
                Click the button to start the game.
                <br />
                Arrow keys on your keyboard (&#8592; &#8593; &#8594; &#8595;) change the direction of the snake.
                <br />
                Collect food. Avoid collision with the walls and the snake's body.
            </span>
        </div>
    )
}

export default Instructions;
