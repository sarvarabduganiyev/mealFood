import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Dropdawn from "./DropDown";

export default function Navbar() {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>left</Button>
      <SwipeableDrawer
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        Sarvar a sdasdasdasdasd
      </SwipeableDrawer>
      <Dropdawn />
    </div>
  );
}
