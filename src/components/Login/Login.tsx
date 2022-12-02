import React, { useState } from "react";
import ReactDOM from "react-dom";
import Validator from "../../models/Validator";
import Button from "../Button/Button";
import Form from "../Form/Forms";
import Modal from "../Modal/Modal";
import "./Login.css";

export default function Login() {
    const root = document.getElementById("root");
    let [getModal, setCloseModal] = useState(false);

    function openModal() {
        const validator = new Validator();
        setCloseModal((getModal = true));
        ReactDOM.render(<Modal click={closeModal} />, root);
        closeAll();
    }

    function closeModal() {
        ReactDOM.render(<Login />, root);
        setCloseModal((getModal = false));
    }

    function closeAll() {
        root?.addEventListener("click", () => {
            if (getModal) closeModal();
        });
    }

    return (
        <div className="container-login">
            <h1 className="title-login">LOGIN</h1>
            <Form>
                <input
                    className="ipt"
                    type="email"
                    id="email"
                    placeholder="Email"
                />
                <input
                    className="ipt"
                    type="text"
                    id="name"
                    placeholder="Nome"
                />
                <input
                    className="ipt"
                    type="password"
                    id="password"
                    placeholder="Senha"
                />
            </Form>
            <Button click={openModal}>Cadastrar</Button>
        </div>
    );
}
