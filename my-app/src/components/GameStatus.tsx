import { ReactElement } from "react";

interface Props {
    isGameOver: boolean;
    score: number;
}

const GameStatus: React.FC<Props> = (props): ReactElement<HTMLElement> => {
    const isGameOver: boolean = props.isGameOver;
    const score: number = props.score;

    return (
        <div>
            <p>
                <b>Game status: </b> {isGameOver ? "game over" : "in progress"}
            </p>
            <p>
                <b>Score: </b> {score}
            </p>
        </div>
    )
}

export default GameStatus;
