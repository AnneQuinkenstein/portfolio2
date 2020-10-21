import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Navbar from "./Navbar";
import RespNavbar from "./RespNavbar";

const NavbarSwitch = () => {
  const phone = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      {!phone && <Navbar />}
      {phone && <RespNavbar />}
    </>
  );
};

export default NavbarSwitch;
