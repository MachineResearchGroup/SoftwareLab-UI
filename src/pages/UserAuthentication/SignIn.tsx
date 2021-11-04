import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as AtIcon } from "../../media/icons/at_sign.svg";
import { ReactComponent as KeyIcon } from "../../media/icons/key_thin.svg";

const SignIn: React.FC = () => {
    return (
        <form id="form_sign_in" method="POST">
            <p className="__form_title">Faça seu login</p>
            <div className="form_input_parent">
                <AtIcon />
                <input type="text" name="email" id="inEmail" className="__form_input" placeholder="Email" />
            </div>
            <div className="form_input_parent">
                <KeyIcon />
                <input type="text" name="password" id="inPassword" className="__form_input" placeholder="Senha" />
            </div>
            <a id="__recover_password" href="/recover_password">
                Esqueceu a senha?
            </a>
            <button className="__btn_submit" type="submit">
                ENTRAR
            </button>
            <span className="__alternate_auth_method">
                Não tem uma conta? <Link to="/sign_up">Registre-se</Link>
            </span>
        </form>
    );
};

export default SignIn;
