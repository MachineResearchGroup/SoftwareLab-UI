import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as PenIcon } from "../../media/icons/pen.svg";
import { ReactComponent as PhoneIcon } from "../../media/icons/phone.svg";
import { ReactComponent as UserIcon } from "../../media/icons/user.svg";
import { ReactComponent as AtIcon } from "../../media/icons/at_sign.svg";
import { ReactComponent as KeyIcon } from "../../media/icons/key_thin.svg";

const SignUp: React.FC = () => {
    return (
        <form id="form_sign_up" method="POST">
            <p className="__form_title">Registre-se</p>
            <div className="form_input_parent">
                <PenIcon />
                <input
                    type="text"
                    name="full_name"
                    id="inFullName"
                    className="__form_input"
                    placeholder="Nome completo"
                />
            </div>
            <div className="form_input_parent">
                <UserIcon />
                <input
                    type="text"
                    name="nickname"
                    id="inUserName"
                    className="__form_input"
                    placeholder="Nome de usuário"
                />
            </div>
            <div className="form_input_parent">
                <PhoneIcon />
                <input type="text" name="phone" id="inPhone" className="__form_input" placeholder="Fone" />
            </div>
            <div className="form_input_parent">
                <AtIcon />
                <input type="text" name="email" id="inEmail" className="__form_input" placeholder="Email" />
            </div>
            <div className="form_input_parent">
                <KeyIcon />
                <input type="text" name="password" id="inPassword" className="__form_input" placeholder="Senha" />
            </div>
            <div className="form_input_parent">
                <KeyIcon />
                <input
                    type="text"
                    name="repeated_password"
                    id="inRepeatedPassword"
                    className="__form_input"
                    placeholder="Confirmar senha"
                />
            </div>
            <button className="__btn_submit" type="submit">
                REGISTRAR
            </button>
            <span className="__alternate_auth_method">
                Já tem uma conta? <Link to="/sign_in">Faça login</Link>
            </span>
        </form>
    );
};

export default SignUp;
