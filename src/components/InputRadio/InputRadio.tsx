import { IRadioOption } from "src/common/interfaces";
import "./InputRadio.scss";
import React, { ChangeEventHandler, KeyboardEventHandler } from "react";

const InputRadio = ({
    label,
    inputName,
    isRequired,
    options,
    handleInputChange
}: {
    label: string;
    inputName: string;
    isRequired: boolean;
    options: IRadioOption[];
    handleInputChange: ChangeEventHandler;
}) => {
    const getMappedRadios = () => {
        return options.map((option) => {
            return (
                <div id={`input-${option.name}`} className="input-radio-option" key={option.name}>
                    <input
                        type="radio"
                        id={`input-radio-${option.name}`}
                        className="input-radio-option"
                        name={option.name}
                        required={isRequired}
                        value={option.name}
                        onChange={handleInputChange}
                        // checked={formData.enquiring === value}
                    />
                    <label htmlFor={option.name}>{option.label}</label>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            {/* TODO: Testing to see if the htmlFor should belong to the input-radio group outer level or the options inside.. */}
            <label htmlFor={`input-radio-${inputName}`} className="textarea-label">
                {label}
            </label>
            <div id={`input-radio-${inputName}`} className="input-radio">
                {getMappedRadios()}
            </div>
        </React.Fragment>
    );
};

export default InputRadio;
