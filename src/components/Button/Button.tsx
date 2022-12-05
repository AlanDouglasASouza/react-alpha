import React from "react";
import IProps from "../../interface/IProps";
import "./Button.css";

export default function Button(props: IProps | any): JSX.Element {
    return (
        <button className="create" type={props.type} onClick={props.click}>
            {props.children}
        </button>
    );
}
