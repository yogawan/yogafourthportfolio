import { Link } from "react-router-dom";

const CardGalleryLayouts = () => {
    return (
        <div className="products">
            <h2 className="h2"><em><u>Gallery</u></em></h2>
            <li><Link to={""}>VERDEX</Link></li>
            <div className="image-container">
                <img src="./vrx/01.png" alt="Image"/>
                <img src="./vrx/16.png" alt="Image"/>
                <img src="./vrx/19.png" alt="Image"/>
            </div>
            <li><Link to={""}>UTY Software House</Link></li>
            <div className="image-container">
                <img src="./ush/05.png" alt="Image"/>
                <img src="./ush/01.png" alt="Image"/>
                <img src="./ush/02.png" alt="Image"/>
            </div>
        </div>
    )
}

export default CardGalleryLayouts;