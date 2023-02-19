import "./Toolbar.scss";

const Toolbar = ({ setPage }: { setPage: Function }) => {
    const toolbarData = [
        {
            name: "Home",
            routeName: "Home"
        },
        {
            name: "Contact me",
            routeName: "Contact"
        },
        {
            name: "About me",
            routeName: "About"
        },
        {
            name: "Something great",
            routeName: "Something"
        },
        {
            name: "Reviews",
            routeName: "Reviews"
        }
    ];

    return (
        <div id="toolbar">
            {
                toolbarData.map((e) => {
                    return <div className="toolbar-item" id={e.routeName.toLowerCase()} onClick={() => setPage(e.routeName)}>{e.name}</div>
                })
            }
        </div>
    )
}

export default Toolbar;