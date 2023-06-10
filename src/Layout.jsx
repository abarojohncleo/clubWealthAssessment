import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">StarWars</Link>
          </li>
          <li>
            <Link to="/cats">Cats</Link>
          </li>
          <li>
            <Link to="/covids">Covid</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;