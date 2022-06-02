import { ReactElement, useState } from "react";

import IRadioChoice from "../interfaces/IRadioChoice";

import "./SpeedLevelSelector.css";

interface Props {
    choices: IRadioChoice[];
    actionOnSelect: (chosenDelay: number) => void;
}

const SpeedLevelSelector: React.FC<Props> = (
    props
): ReactElement<HTMLElement> => {
    const choices: IRadioChoice[] = props.choices;
    const actionOnSelect: (chosenDelay: number) => void = props.actionOnSelect;

    const [markedRadioVal, setMarkedRadioVal]: [string, Function] = useState(
        choices[1].name
    );

    const getRadio = (choice: IRadioChoice): ReactElement<HTMLElement> => {
        console.log("rendering new radio element", choice.name);
        console.log("markedRadioVal is", markedRadioVal);
        console.log(
            "markedRadioVal === rendered element",
            markedRadioVal === choice.name
        );
        return (
            <span key={choice.id}>
                <input
                    type="radio"
                    value={choice.name}
                    name="speed"
                    onChange={onSelect}
                    checked={markedRadioVal === choice.name}
                />
                <label
                    htmlFor={choice.name}
                    onClick={() => {
                        setMarkedRadioVal(choice.name);
                        actionOnSelect(choice.delay);
                    }}
                >
                    {choice.name}
                </label>
            </span>
        );
    };

    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setMarkedRadioVal(e.target.value);
        choices.forEach((c) => {
            if (c.name === markedRadioVal) {
                actionOnSelect(c.delay);
            }
        });
    };

    return (
        <fieldset>
            <legend>Choose speed level</legend>
            {choices.map((c) => getRadio(c))}
        </fieldset>
    );
};

export default SpeedLevelSelector;
