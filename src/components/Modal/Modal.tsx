import { ButtonClose, Container, Message, ModalOp } from "./style";

export default function Modal(props: any): JSX.Element {
    return props.opened ? (
        <>
            <Container onClick={props.click}></Container>
            <ModalOp>
                <ButtonClose onClick={props.click}>X</ButtonClose>
                <Message>{props.message}</Message>
            </ModalOp>
        </>
    ) : (
        <></>
    );
}
