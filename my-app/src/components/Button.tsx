import { ReactElement } from "react";

import "./Button.css";

interface Props {
    displText: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<Props> = (props): ReactElement<HTMLElement> => {
    const displText: string = props.displText;
    const onClickAction: (e: React.MouseEvent<HTMLElement>) => void = props.onClick;

    return (
        <button onClick={onClickAction}>
            {displText}
        </button>
    )
}

export default Button;
