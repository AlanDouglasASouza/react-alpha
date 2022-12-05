import React from "react";
import IProps from "../../interface/IProps";
import "./Forms.css";

export default function Form(props: IProps | any): JSX.Element {
    return (
        <form className="form-user" onSubmit={props.submit}>
            {props.children}
        </form>
    );
}
