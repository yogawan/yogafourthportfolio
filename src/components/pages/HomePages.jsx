import NavigationPopupHomeLayouts from "../layouts/NavigationPopupHomeLayouts";
import NavigationLayouts from "../layouts/NavigationLayouts";
import ExperienceLayouts from "../layouts/ExperienceLayouts";
import AboutMeLayouts from "../layouts/AboutMeLayouts";
import HeroLayouts from "../layouts/HeroLayouts";

const HomePages = () => {
    return (
        <div>
            <NavigationLayouts></NavigationLayouts>
            <HeroLayouts></HeroLayouts>
            <AboutMeLayouts></AboutMeLayouts>
            <ExperienceLayouts></ExperienceLayouts>
            <NavigationPopupHomeLayouts></NavigationPopupHomeLayouts>
            <div className="bottom"></div>
        </div>
    )
}

export default HomePages;