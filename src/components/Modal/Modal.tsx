import React from "react";
import IProps from "../../interface/IProps";
import "./Modal.css";

export default function Modal(props: IProps): JSX.Element {
    return (
        <div className="modal">
            <p className="close" onClick={props.click}>
                X
            </p>
        </div>
    );
}
