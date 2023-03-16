import { ChangeEvent, FormEvent, useState } from "react";
import "./Contact.scss";
import { IContactForm } from "src/common/interfaces";

const Contact = () => {
    const formDataEmpty = {
        name: "ewr",
        email: "wer@wer",
        phone: "0455555555",
        enquiring: "12",
        message: "123"
    };
    const [formData, setFormData] = useState<IContactForm>(formDataEmpty);
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

    // Have to user "React." here as it is using the DOM KeyboardEvent instead
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
            setFormData(formDataEmpty);
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

                <p>Which would you like to enquire about?</p>
                <input type="radio" id="driving" name="enquiring" required value="driving" />
                <label htmlFor="driving">LAM driving school</label>
                <br />
                <input type="radio" id="solar" name="enquiring" required value="solar" />
                <label htmlFor="solar">Diamond Solar</label>
                <br />
                <input type="radio" id="thanksai" name="enquiring" required value="thanksai" />
                <label htmlFor="thanksai">ThanksAI</label>
                <br />
                <input type="radio" id="other" name="enquiring" required value="other" />
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
            <h1>Contact me</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h2>Email</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h2>Phone</h2>
            <p>0411111111</p>
            <div id="form-field">{!formRecieved ? messageForm() : submitConfirmationMessage()}</div>
        </div>
    );
};

export default Contact;
