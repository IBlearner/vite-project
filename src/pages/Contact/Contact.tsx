import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Contact.scss";
import { IContactForm, IContactFormPrefill, IGeneralPageContent } from "src/common/interfaces";
import { Languages } from "src/common/enums";
import { contactSpecificContent } from "src/common/constants";
import Input from "src/components/Input/Input";
import { InputTypes } from "src/common/enums";

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
    const [formData, setFormData] = useState<IContactForm>(initFormData);
    const [formRecieved, setFormRecieved] = useState<boolean>(false);
    const [keyDown, setKeyDown] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);

        // Phone number validation
        if (event.target.name === "phone") {
            if (Number.isNaN(parseInt(keyDown)) && keyDown !== " " && keyDown !== "Backspace") {
                return;
            }
        }

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Have to use "React." here as it is using the DOM KeyboardEvent instead
    // Stores the user's currently pressed key. Only needed for inputs that require specific input validations
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setKeyDown(event.key);
        console.log(event.key);
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
                    handleInputChange={handleInputChange}
                />
                <br />
                <Input
                    label="Email"
                    inputType={InputTypes.email}
                    inputName="email"
                    isRequired={true}
                    value={formData.email}
                    handleInputChange={handleInputChange}
                />
                <br />
                <Input
                    label="Phone"
                    inputType={InputTypes.tel}
                    inputName="phone"
                    isRequired={true}
                    value={formData.phone}
                    handleInputChange={handleInputChange}
                    handleKeyPress={handleKeyPress}
                />
                {/* <label htmlFor="phone">Contact number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    required
                    placeholder="Please enter your contact number"
                    onKeyDown={handleKeyPress}
                    onChange={handleInputChange}
                    minLength={10}
                    maxLength={10}
                /> */}
                {/* TODO: map all the services from somwhere */}
                <p>Which would you like to enquire about?</p>
                <input
                    type="radio"
                    id="driving"
                    name="enquiring"
                    required
                    value="driving"
                    onChange={handleInputChange}
                    checked={formData.enquiring === "driving"}
                />
                <label htmlFor="driving">LAM driving school</label>
                <br />
                <input type="radio" id="solar" name="enquiring" required value="solar" onChange={handleInputChange} checked={formData.enquiring === "solar"} />
                <label htmlFor="solar">Diamond Solar</label>
                <br />
                <input
                    type="radio"
                    id="thanksai"
                    name="enquiring"
                    required
                    value="thanksai"
                    onChange={handleInputChange}
                    checked={formData.enquiring === "thanksai"}
                />
                <label htmlFor="thanksai">ThanksAI</label>
                <br />
                <input type="radio" id="other" name="enquiring" required value="other" onChange={handleInputChange} checked={formData.enquiring === "other"} />
                <label htmlFor="other">Other</label>
                <br />
                <p>What would you like to ask?</p>
                <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    required
                    value={formData.message}
                    onChange={handleTextareaChange}
                />
                <br />
                <input type="submit" value="Submit"></input>
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
            <h2>{language === Languages.english ? contactSpecificContent.subheading.en : contactSpecificContent.subheading.vn}</h2>
            <p>{language === Languages.english ? contactSpecificContent.text1.en : contactSpecificContent.text1.vn}</p>
            <div id="form-field">{!formRecieved ? messageForm() : submitConfirmationMessage()}</div>
        </div>
    );
};

export default Contact;
