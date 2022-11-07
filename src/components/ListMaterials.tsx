import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { ListMaterialsProps } from "../interfaces/Components";

const ListMaterials = ({ data, title }: ListMaterialsProps) => {
  const Fade = require("react-reveal/Fade")
  const [show, setShow] = useState(false)
  const classProps = show ? "block" : "hidden"
  const handleOpen = () => setShow(!show)
  return ( 
    <div className="pl-5">
      <div>
        <button onClick={handleOpen} >
          <div className="h-16 w-44 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-48 sm:w-80 sm:mb-5">
            <div className="mr-2">{title}</div>
            {show ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </div>
        </button>
        <Fade>
          <div id="dropdown" className={`${classProps} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 md:mt-5 sm:mt-2 sm:w-80 mb-2 md:w-40`}>
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              {data.map((item, i) => {
                return (
                  <li key={i.toString()} >
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ListMaterials;
