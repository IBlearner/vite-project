import "./About.scss";
import { IGeneralPageContent } from "src/common/interfaces";
import { aboutSpecificContent } from "src/common/constants";
import { Languages } from "src/common/enums";

const About = ({ generalContent, language }: { generalContent: IGeneralPageContent; language: string }) => {
    return (
        <div>
            <h1 className="home-heading">{language === Languages.english ? generalContent.heading.en : generalContent.heading.vn}</h1>
            <h2 className="home-subheading">{language === Languages.english ? aboutSpecificContent.subheading.en : aboutSpecificContent.subheading.vn}</h2>
            <p className="home-text">{language === Languages.english ? aboutSpecificContent.text1.en : aboutSpecificContent.text1.vn}</p>
            <h2 className="home-subheading">{language === Languages.english ? aboutSpecificContent.subheading.en : aboutSpecificContent.subheading.vn}</h2>
            <p className="home-text">{language === Languages.english ? aboutSpecificContent.text2.en : aboutSpecificContent.text2.vn}</p>
        </div>
    );
};

export default About;
