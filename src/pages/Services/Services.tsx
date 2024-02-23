import "./Services.scss";
import { IGeneralPageContent, IContactFormPrefill, IServiceContent } from "src/common/interfaces";
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

    const getServicesItem = (serviceSpecificContent: IServiceContent, imgExtension: string = "png") => {
        return (
            <div className={"services-item " + serviceSpecificContent.name}>
                <img className="services-image" src={`/${serviceSpecificContent.name}.${imgExtension}`} alt={serviceSpecificContent.friendlyName} />
                <p>{language === Languages.english ? serviceSpecificContent.description.en : serviceSpecificContent.description.vn}</p>
                <button className="primary-button services-button" onClick={() => navigateToContactPage({ enquiring: `${serviceSpecificContent.name}` })}>
                    {language === Languages.english ? servicesSpecificContent.contactMeText.en : servicesSpecificContent.contactMeText.vn}
                    <span className="services-button-arrow">
                        <FaLongArrowAltRight />
                    </span>
                </button>
            </div>
        );
    };

    return (
        <div>
            <div className="services-heading">
                <h1>{language === Languages.english ? generalContent.heading.en : generalContent.heading.vn}</h1>
                <img className="heading_underline" src="/heading_underline.png" alt={"TODO"} />
            </div>

            {getServicesItem(servicesSpecificContent.driving, "png")}

            <div className="services-heading">
                <h2>{language === Languages.english ? servicesSpecificContent.subheading.en : servicesSpecificContent.subheading.vn}</h2>
                <img className="heading_underline" src="/heading_underline.png" alt={"TODO"} />
            </div>

            {getServicesItem(servicesSpecificContent.thanksai, "jpg")}

            {getServicesItem(servicesSpecificContent.solar)}

            {getServicesItem(servicesSpecificContent.oriflame, "png")}
        </div>
    );
};

export default Services;
