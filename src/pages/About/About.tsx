import "./About.scss";
import { IGenericPageContent } from "src/common/interfaces";

const About = ({ content }: { content: IGenericPageContent }) => {
    return (
        <div>
            <h1>{content.heading}</h1>
            <p>{content.text1}</p>
            <h2>{content.subheading1}</h2>
            <p>{content.text2}</p>
            <h2>{content.subheading2}</h2>
            <p>{content.text3}</p>
        </div>
    );
};

export default About;
