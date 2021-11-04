import React from "react";

const HomeHeader = () => {
    return (
        <header>
            <div>
                <div className="__logo"></div>
                <div className="__content">
                    <a href="/sign_in" id="btn_sign_in">Entrar</a>
                    <a href="/sign_up" id="btn_sign_up">Registrar-se</a>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;
