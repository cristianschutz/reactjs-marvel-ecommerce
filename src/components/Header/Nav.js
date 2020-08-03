import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  // console.log(useLocation());

  return (
    <ul>
      <li>
        <Link to="/">Todos</Link>
      </li>
      <li className={pathname === "/avengers" ? "active" : ""}>
        <Link to="/avengers">Avengers</Link>
      </li>
      <li className={pathname === "/thor" ? "active" : ""}>
        <Link to="/thor">Thor</Link>
      </li>
      <li className={pathname === "/iron man" ? "active" : ""}>
        <Link to="/iron man">Iron Man</Link>
      </li>
      <li className={pathname === "/captain america" ? "active" : ""}>
        <Link to="/captain america">Captain America</Link>
      </li>
    </ul>
  );
}
