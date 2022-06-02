import { ReactElement } from "react";

const Instructions: React.FC = (): ReactElement<HTMLElement> => {
    return (
        <div>
            <p> <b>Instructions: </b> </p>
            <span>
                Click the button to start the game. The snake moves itself.
                <br />
                Arrow keys on your keyboard (&#8592; &#8593; &#8594; &#8595;) change the direction of the snake
                <br />
                (90 deg. right or left from the direction of the snake's head).
                <br />
                Collect food. Avoid collision with the walls and the snake's body.
                <br />
            </span>
        </div>
    )
}

export default Instructions;
