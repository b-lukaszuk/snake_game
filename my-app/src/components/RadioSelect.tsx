import { ReactElement } from "react";

import IRadioChoice from "../interfaces/IRadioChoice";

import "./RadioSelect.css";

interface Props {
    mainLabel: string;
    choices: IRadioChoice[];
    selectedChoice: number;
    actionOnSelect: (chosenValue: number) => void;
}

const RadioSelect: React.FC<Props> = (
    props
): ReactElement<HTMLElement> => {
    const mainLabel: string = props.mainLabel;
    const choices: IRadioChoice[] = props.choices;
    const selectedChoice: number = props.selectedChoice;
    const actionOnSelect: (chosenValue: number) => void = props.actionOnSelect;

    const getRadio = (choice: IRadioChoice): ReactElement<HTMLElement> => {
        return (
            <span key={choice.id}>
                <input
                    type="radio"
                    value={choice.name}
                    name="speed"
                    onChange={() => onSelect(choice)}
                    checked={selectedChoice === choice.value}
                />
                <label htmlFor={choice.name} onClick={() => onSelect(choice)}>
                    {choice.name}
                </label>
            </span>
        );
    };

    const onSelect = (choice: IRadioChoice): void => {
        actionOnSelect(choice.value);
    };

    return (
        <fieldset>
            <legend>{mainLabel}</legend>
            {choices.map((c) => getRadio(c))}
        </fieldset>
    );
};

export default RadioSelect;
