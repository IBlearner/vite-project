import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Contact.scss";
import { IContactForm, IContactFormPrefill, IGeneralPageContent, IRadioOption } from "src/common/interfaces";
import { Languages } from "src/common/enums";
import { contactSpecificContent } from "src/common/constants";
import Input from "src/components/Input/Input";
import { InputTypes } from "src/common/enums";
import InputRadio from "src/components/InputRadio/InputRadio";

const Contact = ({ generalContent, formPrefill, language }: { generalContent: IGeneralPageContent; formPrefill: IContactFormPrefill; language: string }) => {
    // Check for specific prefill content to set a default
    formPrefill.enquiring = formPrefill.enquiring?.toLowerCase() === "todo" ? "other" : formPrefill.enquiring;

    let initFormData = {
        name: "",
        email: "",
        phone: "",
        enquiring: "",
        message: "",
        ...formPrefill
    };
    const enquiringOptions: IRadioOption[] = [
        {
            label: "LAM driving school",
            name: "driving"
        },
        {
            label: "Diamond Solar",
            name: "solar"
        },
        {
            label: "ThanksAI",
            name: "thanksai"
        },
        {
            label: "Other",
            name: "other"
        }
    ];

    const [formData, setFormData] = useState<IContactForm>(initFormData);
    const [formRecieved, setFormRecieved] = useState<boolean>(false);
    const [keyDown, setKeyDown] = useState<string>("");

    // For inputs to know what css classes they should inherit
    const [inputNameCssClass, setInputNameCssClass] = useState<string>("");
    const [inputEmailCssClass, setInputEmailCssClass] = useState<string>("");
    const [inputPhoneCssClass, setInputPhoneCssClass] = useState<string>("");
    const [inputMessageCssClass, setInputMessageCssClass] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target);

        // Assigning css classes to inputs based on if they'd been populated
        if (event.target.name === "name") {
            event.target.value ? setInputNameCssClass(" filled") : setInputNameCssClass(" empty");
        }
        if (event.target.name === "email") {
            event.target.value ? setInputEmailCssClass(" filled") : setInputEmailCssClass(" empty");
        }
        if (event.target.name === "phone") {
            event.target.value ? setInputPhoneCssClass(" filled") : setInputPhoneCssClass(" empty");
        }

        // Phone number validation
        if (event.target.name === "phone") {
            if (Number.isNaN(parseInt(keyDown)) && keyDown !== " " && keyDown !== "Backspace") {
                return;
            }
        }

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // Assigning css classes to textarea based on if they'd been populated
        if (event.target.name === "message") {
            event.target.value ? setInputMessageCssClass(" textarea-filled") : setInputMessageCssClass(" textarea-empty");
        }

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Have to use "React." here as it is using the DOM KeyboardEvent instead
    // Stores the user's currently pressed key. Only needed for inputs that require specific input validations
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key);
        console.log(event.key);
    };

    // TODO: get typing of param
    const getCheckedRadio = (x: any) => {
        console.log(x);
        formData.enquiring = x;
    };

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();

        const res = await fetch("http://localhost:3001/", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Change BE response to be json format
        // const data = await res.json();
        if (res.ok) {
            setFormData(initFormData);
            // setFormRecieved(true);
        }
    };

    const messageForm = () => {
        return (
            <form action="submit" onSubmit={submitForm}>
                <Input
                    label="Name"
                    inputType={InputTypes.text}
                    inputName="name"
                    isRequired={true}
                    value={formData.name}
                    cssClass={inputNameCssClass}
                    handleInputChange={handleInputChange}
                />
                <Input
                    label="Email"
                    inputType={InputTypes.email}
                    inputName="email"
                    isRequired={true}
                    value={formData.email}
                    cssClass={inputEmailCssClass}
                    handleInputChange={handleInputChange}
                />
                <Input
                    label="Phone"
                    inputType={InputTypes.tel}
                    inputName="phone"
                    isRequired={true}
                    value={formData.phone}
                    cssClass={inputPhoneCssClass}
                    handleInputChange={handleInputChange}
                    handleKeyPress={handleKeyPress}
                />
                {/* TODO: map all the services from somwhere */}

                <InputRadio
                    label="Which would you like to enquire about?"
                    inputName="message"
                    isRequired={false}
                    options={enquiringOptions}
                    handleInputChange={handleInputChange}
                />
                <br />
                <Input
                    label="What would you like to ask?"
                    inputType={InputTypes.textarea}
                    inputName="message"
                    isRequired={true}
                    value={formData.message}
                    cssClass={inputMessageCssClass}
                    handleInputChange={handleTextareaChange}
                    cols={30}
                    rows={10}
                />
                <br />
                <input className="primary-button" type="submit" value="Submit"></input>
            </form>
        );
    };

    const submitConfirmationMessage = () => {
        return (
            <div>
                <p>Your message has been recieved.</p>
                <p>Thank you!</p>
            </div>
        );
    };

    return (
        <div>
            <h1>{language === Languages.english ? generalContent.heading.en : generalContent.heading.vn}</h1>
            <p>{language === Languages.english ? generalContent.description.en : generalContent.description.vn}</p>
            <p>
                <strong>Email:</strong> ductinh@gmail.com
            </p>
            <p>
                <strong>Phone:</strong> 0413 287 896
            </p>
            <h2>{language === Languages.english ? contactSpecificContent.subheading.en : contactSpecificContent.subheading.vn}</h2>
            <p>{language === Languages.english ? contactSpecificContent.text1.en : contactSpecificContent.text1.vn}</p>
            <div id="form-field">{!formRecieved ? messageForm() : submitConfirmationMessage()}</div>
        </div>
    );
};

export default Contact;
