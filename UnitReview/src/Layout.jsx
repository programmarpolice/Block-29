import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/form"> Form </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
