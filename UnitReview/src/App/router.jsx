import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import PartyForm from "../features/PartyForm";
import PartyList from "../features/PartyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PartyList />,
      },
      {
        path: "/parties",
        element: <PartyList />,
      },
      {
        path: "/form",
        element: <PartyForm />,
      },
      {
        path: "parties/:id",
        element: <PartyDetails />,
      },
    ],
  },
]);

export default router;
