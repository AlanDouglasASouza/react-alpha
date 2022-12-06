import React, { useState } from "react";
import Validator from "../../models/Validator";
import Button from "../Button/Button";
import Form from "../Form/Forms";
import Modal from "../Modal/Modal";
import "./Login.css";

export default function Login(): JSX.Element {
    const [getModal, setCloseModal] = useState(false);

    if (getModal) return <Modal click={closeModal} />;

    function closeModal(): boolean {
        setCloseModal(false);
        return true;
    }

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const inputs = e.target as HTMLFormElement;
        const validate = new Validator();
        const formData = new FormData(inputs);
        const reqBody = Object.fromEntries(formData.entries());

        try {
            if (!validate.email(reqBody.email as string)) {
                return alert(
                    "Preencha o campo E-mail válido! Exemplo: 'meu.nome@email.com'"
                );
            }

            if (!validate.name(reqBody.name as string)) {
                return alert(
                    "Preencha o campo Nome com seu nome completo, exemplo: 'José Augusto'"
                );
            }

            if (!validate.password(reqBody.password as string)) {
                return alert("A sua senha não pode conter aspas");
            }

            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reqBody),
            };

            const res = await fetch("http://localhost:8000/accounts", options);

            if (!res.ok)
                return console.error("Error na requisição", await res.json());

            const data = await res.json();
            console.log(data);

            setCloseModal(true);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="container-login">
            <h1 className="title-login">CADASTRO</h1>
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
                    name="name"
                    placeholder="Nome completo"
                />
                <input
                    className="ipt"
                    type="password"
                    name="password"
                    placeholder="Senha"
                />
                <Button type="submit">Cadastrar</Button>
            </Form>
        </div>
    );
}
