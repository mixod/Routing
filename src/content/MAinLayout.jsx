import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function MAinLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default MAinLayout;
