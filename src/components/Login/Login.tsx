import React, { useState } from "react";
import Validator from "../../models/Validator";
import Button from "../Button/Button";
import Form from "../Form/Forms";
import Modal from "../Modal/Modal";
import "./Login.css";

export default function Login(): JSX.Element {
    const [getModal, setCloseModal] = useState(false);

    if (getModal) return <Modal click={closeModal} />;

    async function openModal(e: any) {}

    function closeModal() {
        setCloseModal(false);
    }

    async function submitForm(e: any) {
        e.preventDefault();
        const inputs = e.target;
        const validate = new Validator();

        try {
            if (
                !validate.email(inputs.email.value) ||
                !validate.name(inputs.name.value) ||
                !validate.password(inputs.password.value)
            ) {
                return alert("Preencha corretamente todos os campos");
            }

            const options = {
                method: "POST",
                body: "{'email': 'alan@gmail.com', 'password' : '123'}",
            };

            const res = await fetch("http://localhost:8000/login", options);
            if (!res.ok) return console.error("Error na requisição");
            const data = await res.json();
            console.log(data);

            setCloseModal(true);
        } catch (err) {
            console.error(err);
        }
        //const formData = new FormData(e);
    }

    return (
        <div className="container-login">
            <h1 className="title-login">LOGIN</h1>
            <Form submit={(e: any) => submitForm(e)}>
                <input
                    className="ipt"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    className="ipt"
                    type="text"
                    placeholder="Nome"
                    name="name"
                />
                <input
                    className="ipt"
                    type="password"
                    name="password"
                    placeholder="Senha"
                />
                <Button click={openModal} type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}
