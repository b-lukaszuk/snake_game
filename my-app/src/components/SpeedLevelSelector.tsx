import { ReactElement } from "react";

import "./SpeedLevelSelector.css";

const SpeedLevelSelector: React.FC = (): ReactElement<HTMLElement> => {
    return (
        <fieldset>
            <legend>Choose speed level</legend>
            <input type="radio" value="kindergarten" name="speed" />
            <label htmlFor="kindergarten">Kindergarten</label>
            <input type="radio" value="school" name="speed" />
            <label htmlFor="school">School</label>
            <input type="radio" value="college" name="speed" checked={true} />
            <label htmlFor="college">College</label>
        </fieldset>
    );
}

export default SpeedLevelSelector;
