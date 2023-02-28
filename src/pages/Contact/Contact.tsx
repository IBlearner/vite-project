import "./Contact.scss";

const Contact = () => {
    const submitForm = () => {
        const post = fetch("http://localhost:3001/", {
            method: "POST"
        })
        console.log(post)
    }

    const messageForm = () => {
        return (
            <form action="submit">
                
                <label htmlFor="fname">Name:</label><br />
                <input type="text" id="fname" name="fname" value="" required placeholder="Please enter your first name"/><br />
                <label htmlFor="fname">Email:</label><br />
                <input type="email" id="email" name="email" value="" required placeholder="Please enter your email"/><br />
                <label htmlFor="fname">Contact number:</label><br />
                <input type="number" id="phone" name="phone" value="" required placeholder="Please enter your contact number"/>

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
                <input type="field" id="message" name="enquiring" value="" required placeholder="Please enter up to 100 characters" /><br />
                {/* <label htmlFor="message">LAM driving school</label><br /> */}

                <input type="submit" value="Submit" onSubmit={() => submitForm()}></input>
            </form>
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
            {messageForm()}
        </div>
    )
}

export default Contact;