import React, { useState } from "react";
import Form from "../Form/Forms";
import Modal from "../Modal/Modal";
import Button from "@mui/material/Button";
import { Home, Inputs, Title } from "./style";

export default function Login(): JSX.Element {
  const [getModal, setCloseModal] = useState(false);

  function closeModal(): boolean {
    setCloseModal(false);
    return true;
  }

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputs = e.target as HTMLFormElement;
    const formData = new FormData(inputs);
    const reqBody = Object.fromEntries(formData.entries());

    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      };

      const res = await fetch("http://localhost:8000/accounts", options);

      if (!res.ok) return console.error("Erro na requisição", await res.json());

      const data = await res.json();
      console.log(data);

      setCloseModal(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Modal click={closeModal} opened={getModal} />
      <Home>
        <Title>CADASTRO</Title>
        <Form submit={(e: React.FormEvent<HTMLFormElement>) => submitForm(e)}>
          <Inputs type="email" name="email" placeholder="Email" required />
          <Inputs
            type="text"
            name="name"
            placeholder="Nome completo"
            pattern="^[A-Z][a-z]{1,}( [A-Z][a-z]{1,}){0,}$"
            required
          />
          <Inputs
            type="password"
            name="password"
            placeholder="Senha"
            required
          />
          {!getModal ? (
            <Button type="submit" variant="contained" size="large">
              Cadastrar
            </Button>
          ) : (
            <></>
          )}
        </Form>
      </Home>
    </>
  );
}
