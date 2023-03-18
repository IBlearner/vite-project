import "./Services.scss";
import { IGenericPageContent } from "src/common/interfaces";

const Services = ({ content }: { content: IGenericPageContent }) => {
    return (
        <div>
            <h1>{content.heading}</h1>
            <img className="services-image" src="/lam-driving.png" alt={content.subheading1} />
            <p>{content.text1}</p>
            <h2>{content.subheading2}</h2>
            <img className="services-image" src="/thanksai.jpg" alt={content.subheading3} />
            <p>{content.text3}</p>
            <img className="services-image" src="/herbalife.png" alt={content.subheading4} />
            <p>{content.text4}</p>
            <img className="services-image" src="/TODO.gif" alt={content.subheading5} />
            <p>{content.text5}</p>
            <img className="services-image" src="/TODO.gif" alt={content.subheading6} />
            <p>{content.text6}</p>
        </div>
    );
};

export default Services;
