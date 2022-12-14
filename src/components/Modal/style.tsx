import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const ModalOp = styled.div`
  position: absolute;
  width: 60vw;
  height: 60vh;
  border-radius: 10px;
  background-color: white;
  color: black;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const ButtonClose = styled.button`
  position: absolute;
  cursor: pointer;
  font-weight: bold;
  font-size: 15pt;
  padding: 15px 25px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  right: 0;
`;

export const Message = styled.h3`
  margin-top: 27vh;
  text-align: center;
`;
