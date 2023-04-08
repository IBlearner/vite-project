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

            <div className={"services-item " + servicesSpecificContent.driving.name}>
                <img className="services-image" src="/driving.png" alt={servicesSpecificContent.driving.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.driving.description.en : servicesSpecificContent.driving.description.vn}</p>
                <button className="primary-button" onClick={() => navigateToContactPage({ enquiring: "driving" })}>
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

            <div className={"services-item " + servicesSpecificContent.thanksai.name}>
                <img className="services-image" src="/thanksai.jpg" alt={servicesSpecificContent.thanksai.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.thanksai.description.en : servicesSpecificContent.thanksai.description.vn}</p>
                <button className="primary-button" onClick={() => navigateToContactPage({ enquiring: servicesSpecificContent.thanksai.name })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className={"services-item " + servicesSpecificContent.solar.name}>
                <img className="services-image" src="/TODO.gif" alt={servicesSpecificContent.solar.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.solar.description.en : servicesSpecificContent.solar.description.vn}</p>
                <button className="primary-button" onClick={() => navigateToContactPage({ enquiring: servicesSpecificContent.solar.name })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className={"services-item " + servicesSpecificContent.quiari.name}>
                <img className="services-image" src="/quiari.png" alt={servicesSpecificContent.quiari.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.quiari.description.en : servicesSpecificContent.quiari.description.vn}</p>
                <button className="primary-button" onClick={() => navigateToContactPage({ enquiring: servicesSpecificContent.quiari.name })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>

            <div className={"services-item " + servicesSpecificContent.herbalife.name}>
                <img className="services-image" src="/herbalife.png" alt={servicesSpecificContent.herbalife.friendlyName} />
                <p>{language === Languages.english ? servicesSpecificContent.herbalife.description.en : servicesSpecificContent.herbalife.description.vn}</p>
                <button className="primary-button" onClick={() => navigateToContactPage({ enquiring: servicesSpecificContent.herbalife.name })}>
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
