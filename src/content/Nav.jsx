import { Button, Popconfirm } from "antd";
import { NavLink } from "react-router-dom";

function Nav() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to={"/home"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Popconfirm
        title="logout"
        description="Are you sure to logout?"
        onConfirm={logout}
        okText="Yes"
        cancelText="No"
      >
        <Button>Logout</Button>
      </Popconfirm>
    </div>
  );
}

export default Nav;
