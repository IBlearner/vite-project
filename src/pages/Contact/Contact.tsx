import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Contact.scss";
import { IContactForm, IContactFormPrefill, IGenericPageContent } from "src/common/interfaces";

const Contact = ({ content, formPrefill }: { content: IGenericPageContent; formPrefill: IContactFormPrefill }) => {
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
                <label htmlFor="name">Name:</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required
                    placeholder="Please enter your first name"
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    required
                    placeholder="Please enter your email"
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="phone">Contact number:</label>
                <br />
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
                />
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
                    placeholder="Please enter up to 100 characters"
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
            <h1>{content.heading}</h1>
            <p>{content.text1}</p>
            <h2>{content.subheading1}</h2>
            <p>{content.text2}</p>
            <h2>{content.subheading2}</h2>
            <p>{content.text3}</p>
            <div id="form-field">{!formRecieved ? messageForm() : submitConfirmationMessage()}</div>
        </div>
    );
};

export default Contact;
