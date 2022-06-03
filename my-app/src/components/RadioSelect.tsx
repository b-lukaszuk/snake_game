import { ReactElement, useState } from "react";

import IRadioChoice from "../interfaces/IRadioChoice";

import "./RadioSelect.css";

interface Props {
    choices: IRadioChoice[];
    actionOnSelect: (chosenValue: number) => void;
}

const RadioSelect: React.FC<Props> = (
    props
): ReactElement<HTMLElement> => {
    const choices: IRadioChoice[] = props.choices;
    const actionOnSelect: (chosenValue: number) => void = props.actionOnSelect;

    const [markedRadioVal, setMarkedRadioVal]: [string, Function] = useState(
        choices[0].name
    );

    const getRadio = (choice: IRadioChoice): ReactElement<HTMLElement> => {
        return (
            <span key={choice.id}>
                <input
                    type="radio"
                    value={choice.name}
                    name="speed"
                    onChange={() => onSelect(choice)}
                    checked={markedRadioVal === choice.name}
                />
                <label htmlFor={choice.name} onClick={() => onSelect(choice)}>
                    {choice.name}
                </label>
            </span>
        );
    };

    const onSelect = (choice: IRadioChoice): void => {
        setMarkedRadioVal(choice.name);
        actionOnSelect(choice.value);
    };

    return (
        <fieldset>
            <legend>Choose speed level</legend>
            {choices.map((c) => getRadio(c))}
        </fieldset>
    );
};

export default RadioSelect;
