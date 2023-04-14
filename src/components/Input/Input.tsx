import { InputTypes } from "src/common/enums";
import "./Input.scss";
import React, { ChangeEventHandler, KeyboardEventHandler } from "react";

const Input = ({
    label,
    inputType,
    inputName,
    isRequired,
    value,
    handleInputChange,
    handleKeyPress
}: {
    label: string;
    inputType: string;
    inputName: string;
    isRequired: boolean;
    value: string;
    handleInputChange: ChangeEventHandler;
    handleKeyPress?: KeyboardEventHandler;
}) => {
    const getInput = () => {
        switch (inputType) {
            case InputTypes.tel:
                return (
                    <div id={`input-${label}`} className="input">
                        <input
                            type={inputType}
                            id={`input-${inputName}`}
                            className="input-field"
                            name={inputName}
                            value={value}
                            required={isRequired}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                            minLength={10}
                            maxLength={10}
                        />
                        <label htmlFor={inputName} className="input-label">{label}</label>
                    </div>
                );
            case InputTypes.email:
            case InputTypes.text:
            default:
                return (
                    <div id={`input-${label}`} className="input">
                        <input
                            type={inputType}
                            id={`input-${inputName}`}
                            className="input-field"
                            name={inputName}
                            value={value}
                            required={isRequired}
                            onChange={handleInputChange}
                        />
                        <label htmlFor={inputName} className="input-label">{label}</label>
                    </div>
                );
        }
    };

    return (
        <React.Fragment>
            {getInput()}
        </React.Fragment>
    );
};

export default Input;
