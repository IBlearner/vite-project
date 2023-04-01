import "./Home.scss";
import { IGeneralPageContent } from "src/common/interfaces";
import { Languages } from "src/common/enums";
import { homeSpecificContent } from "src/common/constants";

const Home = ({ generalContent, language }: { generalContent: IGeneralPageContent; language: string }) => {
    const isEnglish: boolean = language === Languages.english;

    return (
        <div>
            <div id="home-header">
                <h1 id="home-title">DUC TINH LAM</h1>
            </div>

            <h1 className="home-heading">{isEnglish ? generalContent.heading.en : generalContent.heading.vn}</h1>
            <p className="TODO">{isEnglish ? generalContent.description.en : generalContent.description.vn}</p>
            <h2 className="home-subheading">{isEnglish ? homeSpecificContent.subheading.en : homeSpecificContent.subheading.vn}</h2>
            <p className="home-text">{isEnglish ? homeSpecificContent.text1.en : homeSpecificContent.text1.vn}</p>
        </div>
    );
};

export default Home;
