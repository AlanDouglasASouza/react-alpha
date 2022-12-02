import React from "react";
import IProps from "../../interface/IProps";
import "./Forms.css";

export default function Form(props: IProps) {
  return <form className="form-user">{props.children}</form>;
}
