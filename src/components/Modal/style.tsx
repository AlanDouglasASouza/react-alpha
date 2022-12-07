import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
`;

export const ModalOp = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
    height: 60vh;
    border-radius: 10px;
    background-color: white;
    color: black;
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
