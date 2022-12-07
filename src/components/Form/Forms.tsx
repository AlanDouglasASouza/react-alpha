import IProps from "../../interface/IProps";
import { Forms } from "./style";

export default function Form(props: IProps | any): JSX.Element {
  return <Forms onSubmit={props.submit}>{props.children}</Forms>;
}
