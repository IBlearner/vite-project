import "./Services.scss";
import { IGenericPageContent, IContactFormPrefill } from "src/common/interfaces";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = ({ content, setPage, setFormPrefill }: { content: IGenericPageContent; setPage: Function; setFormPrefill: Function }) => {
    const navigateToContactPage = (contactFormPrefill: IContactFormPrefill) => {
        setFormPrefill(contactFormPrefill);
        setPage("contact");
    };

    return (
        <div>
            <div className="services-heading">
                <h1>{content.heading}</h1>
                <img className="heading_underline" src="/heading_underline.png" alt={content.subheading3} />
            </div>

            <div className="services-item">
                <img className="services-image" src="/lam-driving.png" alt={content.subheading1} />
                <p>{content.text1}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "driving" })}>
                    {content.misc1}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className="services-heading">
                <h2>{content.subheading2}</h2>
                <img className="heading_underline" src="/heading_underline.png" alt={content.subheading3} />
            </div>

            <div className="services-item">
                <img className="services-image" src="/thanksai.jpg" alt={content.subheading3} />
                <p>{content.text3}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "thanksai" })}>
                    {content.misc1}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className="services-item">
                <img className="services-image" src="/herbalife.png" alt={content.subheading4} />
                <p>{content.text4}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "herbalife" })}>
                    {content.misc1}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className="services-item">
                <img className="services-image" src="/quiari.png" alt={content.subheading5} />
                <p>{content.text5}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "quiari" })}>
                    {content.misc1}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className="services-item">
                <img className="services-image" src="/TODO.gif" alt={content.subheading6} />
                <p>{content.text6}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "TODO" })}>
                    {content.misc1}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Services;
