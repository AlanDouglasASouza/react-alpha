import React, { MouseEventHandler, ReactNode } from "react";

export default interface IProps {
  click?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
