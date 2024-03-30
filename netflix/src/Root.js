import { Outlet } from "react-router-dom";
import HomeScreen from "./HomeScreen";

function Root() {
  return (
    <>
      <HomeScreen />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;