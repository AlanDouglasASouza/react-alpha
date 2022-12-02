import React from "react";
import IProps from "../../interface/IProps";
import "./Button.css";

export default function Button(props: IProps) {
    return (
        <button className="create" onClick={props.click}>
            {props.children}
        </button>
    );
}
