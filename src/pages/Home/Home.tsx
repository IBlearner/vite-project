import "./Home.scss";
import { IGeneralPageContent } from "src/common/interfaces";
import { Languages } from "src/common/enums";
import { homeSpecificContent } from "src/common/constants";

const Home = ({ generalContent, language }: { generalContent: IGeneralPageContent; language: string }) => {
    const isEnglish: boolean = language === Languages.english;

    return (
        <div id="home">
            <div id="home-header">
                <img src="/tinh_profile_picture.jpg" alt="Duc Tinh Lam profile picture" />
            </div>

            {/* <h1 className="home-heading">{isEnglish ? generalContent.heading.en : generalContent.heading.vn}</h1> */}
            <q id="home-quote">{isEnglish ? generalContent.description.en : generalContent.description.vn}</q>

            <button className="primary-button">{isEnglish ? homeSpecificContent.text1.en : homeSpecificContent.text1.vn}</button>
        </div>
    );
};

export default Home;
