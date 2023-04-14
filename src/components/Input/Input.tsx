import { InputTypes } from "src/common/enums";
import "./Input.scss";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

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
                    <div id={`input-${label}`}>
                        <label htmlFor={inputName}>{label}</label>
                        <input
                            type={inputType}
                            id={`input-${inputName}`}
                            name={inputName}
                            value={value}
                            required={isRequired}
                            placeholder={`Please enter your ${inputName}`}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                            minLength={10}
                            maxLength={10}
                        />
                    </div>
                );
            case InputTypes.email:
            case InputTypes.text:
            default:
                return (
                    <div id={`input-${label}`}>
                        <label htmlFor={inputName}>{label}</label>
                        <input
                            type={inputType}
                            id={`input-${inputName}`}
                            name={inputName}
                            value={value}
                            required={isRequired}
                            placeholder={`Please enter your ${inputName}`}
                            onChange={handleInputChange}
                        />
                    </div>
                );
        }
    };

    return (
        { getInput() }
    );
};

export default Input;
