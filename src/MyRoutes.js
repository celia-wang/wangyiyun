import List from "./List/List";
import App from "./views/app";
import { Navigate } from "react-router"
export default [
  {
    path: "/App",
    element: <App />,
    children:[{}]
  },
  {
    path: "/List",
    element: <List />,
  },
  {
    path: "*",
    element: <Navigate to="/App" />
  }
]


