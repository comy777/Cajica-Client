import { FormEvent } from "react";

export interface DetailsProps {
  id: string;
  title: string;
  image: string;
  path: string;
  body: string;
  imgDetails: string;
}

export interface FormUser {
  first_name: string;
  last_name: string;
  email: string;
  msg: string;
}

export interface SubmitForm {
  e: FormEvent<HTMLFormElement>;
  form: FormUser;
}

export interface SalProps {
  title: string;
  text: string;
  icon: "warning" | "error" | "success" | "info" | "question";
}
