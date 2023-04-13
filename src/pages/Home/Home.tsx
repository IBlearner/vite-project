import "./Home.scss";
import { IGeneralPageContent } from "src/common/interfaces";
import { Languages } from "src/common/enums";
import { homeSpecificContent } from "src/common/constants";

const Home = ({ generalContent, language, setPage }: { generalContent: IGeneralPageContent; language: string; setPage: Function }) => {
    const isEnglish: boolean = language === Languages.english;

    return (
        <div id="home">
            <h1 id="home-header">Duc Tinh Lam</h1>

            <img id="home-profile-picture" src="/tinh_profile_picture.jpg" alt="Duc Tinh Lam profile picture" />

            {/* <h1 className="home-heading">{isEnglish ? generalContent.heading.en : generalContent.heading.vn}</h1> */}
            <q id="home-quote">{isEnglish ? generalContent.description.en : generalContent.description.vn}</q>
            <br />

            <button className="primary-button" onClick={() => setPage("services")}>
                {isEnglish ? homeSpecificContent.text1.en : homeSpecificContent.text1.vn}
            </button>
            <br />
        </div>
    );
};

export default Home;
