import "./Home.scss";
import { IGenericPageContent } from "src/common/interfaces";

const Home = ({ content }: { content: IGenericPageContent }) => {
    return (
        <div>
            <div id="home-header">
                {/* <img src="/LAM_SAFETY.png" alt="Driving School" /> */}
                <h1 id="home-title">DUC TINH LAM</h1>
            </div>

            <h1 className="home-heading">{content.heading}</h1>
            <h2 className="home-subheading">{content.subheading1}</h2>
            <p className="home-text">{content.text1}</p>
            <h2 className="home-subheading">{content.subheading2}</h2>
            <p className="home-text">{content.text2}</p>
        </div>
    );
};

export default Home;
