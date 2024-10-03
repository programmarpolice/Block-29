import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <p> Landing Page </p>
        <p> Form </p>
      </nav>
      <Outlet />
    </div>
  );
}
