import React from "react";

import { ReactComponent as MainIllustration } from "../../media/illustrations/woman_innovation_robot.svg";

const Home = () => {
    return (
        <>
            <main id="main_home_page">
                <div id="__content">
                    <p className="__main_text">Desenvolvimento ágil</p>
                    <p className="__main_text">inteligente</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita assumenda eum,
                        maiores perspiciatis eos accusantium ex voluptatem molestias cum ad sapiente nobis accusamus
                        rerum aliquid commodi nisi hic architecto.
                    </p>
                    <a href="/sign_in" id="btn_sign_in">
                        Comece agora!
                    </a>
                </div>
                <div id="__illustration">
                    <MainIllustration />
                </div>
            </main>
        </>
    );
};

export default Home;
