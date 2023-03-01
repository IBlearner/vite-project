import "./Toolbar.scss";
import { views } from "../../constants";

const Toolbar = ({ setPage }: { setPage: Function }) => {
    const viewsData = [views.home, views.about, views.contact, views.reviews];

    return (
        <div id="toolbar">
            {
                viewsData.map((view) => {
                    return <div className="toolbar-item" id={view.routeName.toLowerCase()} onClick={() => setPage(view.routeName)} key={view.routeName}>{view.name}</div>
                })
            }
        </div>
    )
}

export default Toolbar;