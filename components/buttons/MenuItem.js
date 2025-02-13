import React, { useContext } from "react";

import { ACTIONS } from "../../pages/_app";
import { StateContext } from "../../pages/_app";

const MenuItem = ({ text, section, setSidebarOpen, icon }) => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <li
      className="group"
      onClick={() => {
        dispatch({
          type: ACTIONS.SHOW_SECTION,
          payload: section,
        });
        setSidebarOpen(false);
      }}
    >
      <span
        className={`flex items-center w-full ${
          state.section === section
            ? "border-white text-white bg-dark-900/20 opacity-100"
            : "border-brand text-white opacity-75 group-hover:border-dark-900/20 group-hover:text-white group-hover:opacity-100"
        }`}
      >
        {icon}
        {text}
      </span>
    </li>
  );
};

export default MenuItem;
