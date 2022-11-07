import { FormEvent } from "react";
import { DataApp, DataCard, DataMaterials } from "./Response";

export interface StateHome {
  dataApp: DataApp[],
  dataCard: DataCard[],
  dataMaterials: DataMaterials[],
  loading: boolean
  videoWidth: string
}

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

export interface ListMaterialsProps {
  title: string;
  data: ListMaterialsItem[];
}

export interface ListMaterialsItem {
  title: string;
  image: string;
  href: string;
}

export interface DropZoneProps {
  file: File | undefined
  setFile: (file: File | undefined) => void
}

export interface ImportanComponentProps {
  data: DataCard[]
}

export interface ListImagesProps {
  data: DataCard[]
}