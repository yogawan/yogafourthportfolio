import { Link } from "react-router-dom";

const NavigationLayouts = () => {
    return (
        <nav>
            <ul>
                <li><img src="./icon/home.svg" alt="" /><Link to={'/'}>Home</Link></li>
                <li><img src="./icon/work.svg" alt="" /><Link to={'/project'}>Project</Link></li>
                <li><img src="./icon/certi.svg" alt="" /><Link to={'/certificate'}>Certificate</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationLayouts;