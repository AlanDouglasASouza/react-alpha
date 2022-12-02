import React from "react";
import "./Forms.css";

export default function Form(props: any) {
    return <form className="form-user">{props.children}</form>;
}
