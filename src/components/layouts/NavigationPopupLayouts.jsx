import { Link } from "react-router-dom"

const NavigationPopupLayouts = () => {
    return (
        <div className="nav">
            <div className="ul">
                <div className="li"><img src="./icon/profile.svg" alt="" /><a href="https://github.com/yogawan">Connect to Developer</a></div>
                <div className="li"><img src="./home.svg" alt="" /><Link to={'/'}>Back</Link></div>
                {/* <li><img src="./home.svg" alt="" /><Link to={'/'}>Home</Link></li> */}
                {/* <li><img src="./profile.svg" alt="" /><a href="#">Yogawan</a></li> */}
            </div>
        </div>
    )
}

export default NavigationPopupLayouts;