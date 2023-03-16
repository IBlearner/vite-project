import "./Toolbar.scss";
import { views } from "src/common/constants";
import { useEffect, useState } from "react";

const Toolbar = ({ setPage }: { setPage: Function }) => {
    const viewsData = [views.home, views.about, views.contact, views.reviews];
    const [isMobileMode, setIsMobileMode] = useState(false);
    // Mobile only - to toggle the toolbar to be opened or closed
    const [isToolbarOpen, setIsToolbarOpen] = useState(false);

    useEffect(() => {
        setIsMobileMode(!!isMobile.any());
    });

    // Determine if the user is on a mobile device
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function () {
            return (
                isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
            );
        }
    };

    const computerToolbar = () => {
        return (
            <div className="toolbar" id="toolbar-computer">
                <div id="logo">Duc Tinh</div>
                {viewsData.map((view) => {
                    return (
                        <div
                            className="toolbar-item"
                            id={view.routeName.toLowerCase()}
                            onClick={() => setPage(view.routeName)}
                            key={view.routeName}
                        >
                            {view.name.toUpperCase()}
                        </div>
                    );
                })}
            </div>
        );
    };

    const mobileToolbar = () => {
        return (
            <div className="toolbar" id="toolbar-mobile">
                <div id="logo"></div>
                <button id="toolbar-sandwhich" onClick={() => setIsToolbarOpen(true)}>
                    z
                </button>
                <div className={`toolbar-group ${isToolbarOpen ? "toolbar-open" : "toolbar-close"}`}>
                    {viewsData.map((view) => {
                        return (
                            <div
                                className="toolbar-item"
                                id={view.routeName.toLowerCase()}
                                onClick={() => {
                                    setPage(view.routeName);
                                    setIsToolbarOpen(false);
                                }}
                                key={view.routeName}
                            >
                                {view.name.toUpperCase()}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return <div>{isMobileMode ? mobileToolbar() : computerToolbar()}</div>;
};

export default Toolbar;
