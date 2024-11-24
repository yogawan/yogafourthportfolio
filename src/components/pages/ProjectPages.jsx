import CardProjectLayouts from "../layouts/CardProjectLayouts";
import NavigationPopupLayouts from "../layouts/NavigationPopupLayouts";
import NavigationLayouts from "../layouts/NavigationLayouts";

const ProjectPages = () => {
    return (
        <div>
            <NavigationLayouts></NavigationLayouts>
            <CardProjectLayouts></CardProjectLayouts>
            <NavigationPopupLayouts></NavigationPopupLayouts>
        </div>
    )
}

export default ProjectPages;