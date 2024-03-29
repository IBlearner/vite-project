import "./Toolbar.scss";
import { useEffect, useState } from "react";
import { viewsData, supportedLanguages } from "src/common/constants";
import { isMobile } from "src/common/helpers";
import { IGenericObj } from "src/common/interfaces";
import { RiMenuLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const Toolbar = ({ page, setPage, language, setLanguage }: { page: string; setPage: Function; language: IGenericObj; setLanguage: Function }) => {
    const data = [viewsData.home, viewsData.about, viewsData.services, viewsData.contact, viewsData.reviews];
    const [isMobileMode, setIsMobileMode] = useState(true);
    // Mobile only - to toggle the toolbar to be opened or closed
    const [isToolbarOpen, setIsToolbarOpen] = useState(false);

    useEffect(() => {
        setIsMobileMode(!!isMobile.any());
        console.log(page);
    }, []);

    // Sets the screen to the top of whatever page they clicked
    const scrollToTopOfPage = () => {
        // TODO: page does not scroll right up to top in mobile mode UNLESS it was already at the top on the previous page. WHY
        // window.scrollBy(0, -1000);
        window.scrollTo(0, 0);
        window.scroll(0, 0);
    };

    // TODO: add more language options
    const changeLanguage = () => {
        const chosenLanguage = language.name === "en" ? setLanguage(supportedLanguages.vietnamese) : setLanguage(supportedLanguages.english);
        return chosenLanguage.toUpperCase();
    };

    const toolbar = () => {
        return (
            <div className={`toolbar ${isMobileMode ? "mobile-mode" : "computer-mode"} ${isToolbarOpen ? "toolbar-open" : "toolbar-close"}`}>
                {/* <div className="toolbar-logo">Duc</div> */}
                {data.map((view) => {
                    return (
                        <div
                            className={`toolbar-item ${page.toLowerCase() === view.routeName ? "selected" : ""}`}
                            onClick={() => {
                                // TODO: maybe don't perform this scroll if they've selected the one they're currently on
                                scrollToTopOfPage();
                                setPage(view.routeName);
                                setIsToolbarOpen(false);
                            }}
                            key={view.routeName}
                        >
                            {view.name}
                        </div>
                    );
                })}
            </div>
        );
    };

    const mobileOnlyToolbar = () => {
        return (
            <div className="toolbar-mobile">
                <div className="toolbar-logo" onClick={() => setPage("home")}>
                    <TiHome size={"26px"} />
                </div>
                <button id="toolbar-mobile-language" onClick={() => changeLanguage()}>
                    <FaGlobe size="1.2em" title="globe icon - change language" /> <span>{language.name}</span>
                </button>
                <button id="toolbar-mobile-sandwhich" onClick={() => setIsToolbarOpen(true)}>
                    <RiMenuLine size="1.5em" title="menu icon - open menu" />
                </button>
                {/* <div className={`toolbar-group ${isToolbarOpen ? "toolbar-open" : "toolbar-close"}`}>
                    {data.map((d) => {
                        return (
                            <div
                                className="toolbar-item"
                                id={d.routeName.toLowerCase()}
                                onClick={() => {
                                    setPage(d.routeName);
                                    setIsToolbarOpen(false);
                                }}
                                key={d.routeName}
                            >
                                {d.name.toUpperCase()}
                            </div>
                        );
                    })}
                </div> */}
            </div>
        );
    };

    return (
        <div>
            {isMobileMode ? <div id="empty"></div> : undefined}
            {isMobileMode ? mobileOnlyToolbar() : undefined}
            {toolbar()}
        </div>
    );
};

export default Toolbar;
