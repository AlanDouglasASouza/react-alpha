import React, { useState } from "react";
import Validator from "../../models/Validator";
import Button from "../Button/Button";
import Form from "../Form/Forms";
import Modal from "../Modal/Modal";
import "./Login.css";

export default function Login() {
  const [getModal, setCloseModal] = useState(false);
  const [valueEmail, setEmail] = useState("");
  const [valueName, setName] = useState("");
  const [valuePassword, setPassword] = useState("");
  const [response, setResponse] = useState("");

  if (getModal) return <Modal click={closeModal} />;

  async function openModal(e: any) {
    e.preventDefault();
    const validate = new Validator();

    try {
      if (
        !validate.email(valueEmail) ||
        !validate.name(valueName) ||
        !validate.password(valuePassword)
      ) {
        return alert("Preencha corretamente todos os campos");
      }

      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) return console.error("Error na requisição");
      const data = await res.json();

      setResponse(data);
      setCloseModal(true);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  function closeModal() {
    setCloseModal(false);
  }

  return (
    <div className="container-login">
      <h1 className="title-login">LOGIN</h1>
      <Form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={valueEmail}
          className="ipt"
          type="email"
          placeholder="Email"
        />
        <input
          className="ipt"
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={valueName}
        />
        <input
          className="ipt"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={valuePassword}
          placeholder="Senha"
        />

        <Button click={openModal}>Cadastrar</Button>
      </Form>
    </div>
  );
}
