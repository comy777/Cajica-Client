import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { SalProps } from "../interfaces/Components";

export const showAlert = ({ title, text, icon }: SalProps) => {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: <p>{title}</p>,
    text,
    showConfirmButton: true,
    icon,
  });
};
