import { ChangeEvent, FormEvent, useState } from "react";
import "./Contact.scss";
import { IContactForm } from "src/common/interfaces";

const Contact = () => {
    const contactFormEmpty = {
        fname: "ewr",
        email: "wer@wer",
        phone: "0455555555",
        enquiring: "12",
        message: "123"
    }
    const [contactForm, setContactForm] = useState<IContactForm>(contactFormEmpty);
    const [formRecieved, setFormRecieved] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        setContactForm({...contactForm, [event.target.name]: event.target.value});
    }

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();


        const res = await fetch("http://localhost:3001/", {
            method: "POST"
        });

        // Change BE response to be json format
        // const data = await res.json();
        if (res.ok) {
            setContactForm(contactFormEmpty);

            setFormRecieved(true);
        }
    }

    const messageForm = () => {
        return (
            <form action="submit" onSubmit={submitForm}>
                <label htmlFor="fname">Name:</label><br />
                <input type="text" id="fname" name="fname" value={contactForm.fname} required placeholder="Please enter your first name" onChange={handleInputChange} /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" value={contactForm.email} required placeholder="Please enter your email" onChange={handleInputChange} /><br />
                <label htmlFor="phone">Contact number:</label><br />
                <input type="tel" id="phone" name="phone" pattern="[0]{1}[1-9]{1}[0-9]{8}" value={contactForm.phone} required placeholder="Please enter your contact number" onChange={handleInputChange} />

                <p>Which would you like to enquire about?</p>
                <input type="radio" id="driving" name="enquiring" value="driving" />
                <label htmlFor="driving">LAM driving school</label><br />
                <input type="radio" id="solar" name="enquiring" value="solar" />
                <label htmlFor="solar">Diamon Solar</label><br />
                <input type="radio" id="thanksai" name="enquiring" value="thanksai" />
                <label htmlFor="thanksai">ThanksAI</label><br />
                <input type="radio" id="other" name="enquiring" value="other" />
                <label htmlFor="other">Other</label><br />

                <p>What would you like to ask?</p>
                <input type="field" id="message" name="message" value={contactForm.message} required placeholder="Please enter up to 100 characters" onChange={handleInputChange} /><br />
                {/* <label htmlFor="message">LAM driving school</label><br /> */}

                <input type="submit" value="Submit" ></input>
            </form>
        )
    }

    const submitConfirmationMessage = () => {
        return (
            <div>
                <p>Your message has been recieved.</p>
                <p>Thank you!</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Contact me</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Email</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Phone</h2>
            <p>0411111111</p>
            <div id="form-field">
                { !formRecieved ? messageForm() : submitConfirmationMessage() }
            </div>
        </div>
    )
}

export default Contact;