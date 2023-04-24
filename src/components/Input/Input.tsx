import { InputTypes } from "src/common/enums";
import "./Input.scss";
import React, { ChangeEventHandler, KeyboardEventHandler } from "react";

const Input = ({
    label,
    inputType,
    inputName,
    isRequired,
    value,
    cssClass,
    handleInputChange,
    handleKeyPress,
    cols,
    rows
}: {
    label: string;
    inputType: string;
    inputName: string;
    isRequired: boolean;
    value: string;
    cssClass: string;
    handleInputChange: ChangeEventHandler;
    handleKeyPress?: KeyboardEventHandler;
    cols?: number;
    rows?: number;
}) => {
    const getInput = () => {
        switch (inputType) {
            case InputTypes.textarea:
                return (
                    <div id={`textarea-${inputName}`} className="textarea">
                        <textarea
                            name={inputName}
                            id={`textarea-${inputName}`}
                            className="textarea-input-field"
                            cols={cols ?? 30}
                            rows={rows ?? 10}
                            required={isRequired}
                            value={value}
                            onChange={handleInputChange}
                        />
                        <label htmlFor={inputName} className={"textarea-label" + cssClass}>
                            {label}
                        </label>
                    </div>
                );
            case InputTypes.tel:
                return (
                    <div id={`input-${inputName}`} className="input">
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
                        <label htmlFor={inputName} className={"input-label" + cssClass}>
                            {label}
                        </label>
                    </div>
                );
            case InputTypes.email:
            case InputTypes.text:
            default:
                return (
                    <div id={`input-${inputName}`} className="input">
                        <input
                            type={inputType}
                            id={`input-${inputName}`}
                            className={"input-field"}
                            name={inputName}
                            value={value}
                            required={isRequired}
                            onChange={handleInputChange}
                        />
                        <label htmlFor={inputName} className={"input-label" + cssClass}>
                            {label}
                        </label>
                    </div>
                );
        }
    };

    return <React.Fragment>{getInput()}</React.Fragment>;
};

export default Input;
