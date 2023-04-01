import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Toolbar from "./components/Toolbar/Toolbar";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Reviews from "./pages/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import { viewsData, supportedLanguages, pageGeneralContent } from "./common/constants";
import { IGenericObj } from "./common/interfaces";

function App() {
    const [page, setPage] = useState("Contact");
    const [language, setLanguage] = useState<IGenericObj>(supportedLanguages.english);
    // const [content, setContent] = useState(staticContent.english);
    const [formPrefill, setFormPrefill] = useState({});
    const { home, about, services, contact, reviews } = pageGeneralContent;

    useEffect(() => {
        // switch (language.name) {
        //     case "vietnamese":
        //         setContent(staticContent.vietnamese);
        //         break;
        //     case "english":
        //     default:
        //         setContent(staticContent.english);
        //         break;
        // }
        console.log(language.friendlyName);
    }, [language]);

    const getPage = () => {
        switch (page) {
            case viewsData.about.routeName:
                return <About generalContent={about} language={language.friendlyName} />;
            case viewsData.services.routeName:
                return <Services generalContent={services} setPage={setPage} setFormPrefill={setFormPrefill} language={language.friendlyName} />;
            case viewsData.contact.routeName:
                return <Contact generalContent={contact} formPrefill={formPrefill} language={language.friendlyName} />;
            case viewsData.reviews.routeName:
                return <Reviews generalContent={reviews} language={language.friendlyName} />;
            case viewsData.home.routeName:
            default:
                return <Home generalContent={home} language={language.friendlyName} />;
        }
    };

    return (
        <div id="app">
            <Toolbar page={page} setPage={setPage} language={language} setLanguage={setLanguage} />
            {getPage()}
            <Footer />
        </div>
    );
}

export default App;
