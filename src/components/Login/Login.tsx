import React, { useState } from "react";
import Form from "../Form/Forms";
import Modal from "../Modal/Modal";
import Button from "@mui/material/Button";
import { Home, Inputs, Title } from "./style";
import ResponsiveAppBar from "../ShowBar/AppBar";

export default function Login(): JSX.Element {
  const [getModal, setModal] = useState(false);
  const [msgModal, setMsgModal] = useState({ email: "", id: "", token: "" });

  const Context = React.createContext({
    email: "",
    id: "",
    token: "",
  });

  function closeModal(): boolean {
    setModal(false);
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

      const res = await fetch("http://localhost:8000/accounts/login", options);

      if (!res.ok) return console.error("Erro na requisição", await res.json());

      const data = await res.json();

      setMsgModal({
        email: reqBody.email as string,
        id: data.id,
        token: data.id,
      });

      setModal(true);
    } catch (err) {
      setModal(true);
      console.error(err);
    }
  }

  return (
    <Context.Provider value={msgModal}>
      <Context.Consumer>
        {({ token }) => (
          <>
            <ResponsiveAppBar />
            {getModal ? (
              <Modal
                click={closeModal}
                opened={getModal}
                message={`O seu Token é: ${token}`}
              />
            ) : (
              <Home>
                <Title>LOGIN</Title>
                <Form
                  submit={(e: React.FormEvent<HTMLFormElement>) =>
                    submitForm(e)
                  }
                >
                  <Inputs
                    type="email"
                    name="email"
                    placeholder="Email"
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
                      Entrar
                    </Button>
                  ) : (
                    <></>
                  )}
                </Form>
              </Home>
            )}
          </>
        )}
      </Context.Consumer>
    </Context.Provider>
  );
}
