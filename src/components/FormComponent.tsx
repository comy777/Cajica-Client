import useForm from "../hooks/useForm";
const FormComponent = () => {
  const {
    first_name,
    last_name,
    email,
    msg,
    handleChange,
    reset,
    loading,
    handleSubmit,
  } = useForm({ first_name: "", last_name: "", email: "", msg: "" });
  const form = { first_name, last_name, email, msg };

  return (
    <div className="py-7 formContainer mb-10">
      <h2 className="text-center text-2xl font-bold text-white ">
        Contactenos
      </h2>
      <div className="flex justify-center">
        <form autoComplete="false" onSubmit={(e) => handleSubmit({ e, form })}>
          <div>
            <label className="block text-sm font-medium text-white">
              Nombres
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                name="first_name"
                value={first_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Apellidos
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                name="last_name"
                value={last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Correo electronico
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Mensaje
            </label>
            <div className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
              <textarea
                rows={5}
                className="w-72 px-1"
                name="msg"
                value={msg}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn float-right">
            {loading ? "Enviando" : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
