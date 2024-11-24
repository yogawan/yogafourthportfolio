const HomePages = () => {
    return (
        <div className="hero">
            <div className="list">
                <div className="tag">
                    <p><s>Let's start tomorrow</s> Just do it!</p>
                </div>
            </div>
            <h1>Hi, i'm Yogawan.<br />a <em><u>Fullstack</u></em> and <em><u>UI Designer</u></em></h1>
            <p>~ Convert Design into Code with <em><u>Pixel Perfect</u></em></p>
            <div className="list">
                <div className="content">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="img" />
                    <img src="./techstack/m.png" alt="img" />
                    <img src="./techstack/e.png" alt="img" />
                </div>
                <div className="content next">
                    <img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" alt="img" />
                </div>
                <div className="content">
                    <img src="./techstack/r.png" alt="img" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="img" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="imgs" />
                </div>
                {/* <hr />
                <div className="content">
                    <img src="./f.svg" alt="imgs" />
                </div> */}
            </div>
        </div>
    );
};

export default HomePages;