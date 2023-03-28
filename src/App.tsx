import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Toolbar from "./components/Toolbar/Toolbar";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Reviews from "./pages/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import { views, supportedLanguages, staticContent } from "./common/constants";
import { IGenericObj } from "./common/interfaces";

function App() {
    const [page, setPage] = useState("Contact");
    const [language, setLanguage] = useState<IGenericObj>(supportedLanguages.english);
    // const [content, setContent] = useState(staticContent.english);
    const [formPrefill, setFormPrefill] = useState({});

    // useEffect(() => {
    //     switch (language.name) {
    //         case "vietnamese":
    //             setContent(staticContent.vietnamese);
    //             break;
    //         case "english":
    //         default:
    //             setContent(staticContent.english);
    //             break;
    //     }
    // }, [language]);

    const getPage = () => {
        switch (page) {
            case views.about.routeName:
                return <About content={staticContent.about} />;
            case views.services.routeName:
                return <Services content={staticContent.services} setPage={setPage} setFormPrefill={setFormPrefill} />;
            case views.contact.routeName:
                return <Contact content={staticContent.contact} formPrefill={formPrefill} />;
            case views.reviews.routeName:
                return <Reviews content={staticContent.reviews} />;
            case views.home.routeName:
            default:
                return <Home content={staticContent.home} />;
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
