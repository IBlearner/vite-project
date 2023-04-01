import "./Services.scss";
import { IGeneralPageContent, IContactFormPrefill } from "src/common/interfaces";
import { FaLongArrowAltRight } from "react-icons/fa";
import { servicesSpecificContent } from "src/common/constants";
import { Languages } from "src/common/enums";

const Services = ({
    generalContent,
    setPage,
    setFormPrefill,
    language
}: {
    generalContent: IGeneralPageContent;
    setPage: Function;
    setFormPrefill: Function;
    language: string;
}) => {
    const navigateToContactPage = (contactFormPrefill: IContactFormPrefill) => {
        setFormPrefill(contactFormPrefill);
        setPage("contact");
    };

    return (
        <div>
            <div className="services-heading">
                <h1>{language === Languages.english ? generalContent.heading.en : generalContent.heading.vn}</h1>
                <img className="heading_underline" src="/heading_underline.png" alt={"TODO"} />
            </div>

            <div className="services-item">
                <img className="services-image" src="/lam-driving.png" alt={servicesSpecificContent.driving.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.driving.description.en : servicesSpecificContent.driving.description.vn}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "driving" })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className="services-heading">
                <h2>{language === Languages.english ? servicesSpecificContent.subheading.en : servicesSpecificContent.subheading.vn}</h2>
                <img className="heading_underline" src="/heading_underline.png" alt={"TODO"} />
            </div>

            <div className="services-item">
                <img className="services-image" src="/thanksai.jpg" alt={servicesSpecificContent.thanksai.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.thanksai.description.en : servicesSpecificContent.thanksai.description.vn}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "thanksai" })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className="services-item">
                <img className="services-image" src="/herbalife.png" alt={servicesSpecificContent.driving.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.herbalife.description.en : servicesSpecificContent.herbalife.description.vn}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "herbalife" })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className="services-item">
                <img className="services-image" src="/quiari.png" alt={servicesSpecificContent.driving.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.quiari.description.en : servicesSpecificContent.quiari.description.vn}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "quiari" })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className="services-item">
                <img className="services-image" src="/TODO.gif" alt={servicesSpecificContent.driving.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.driving.description.en : servicesSpecificContent.driving.description.vn}</p>
                <button className="services-button" onClick={() => navigateToContactPage({ enquiring: "TODO" })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Services;
