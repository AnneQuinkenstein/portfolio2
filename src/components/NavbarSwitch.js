import React from "react";
import { useMediaPredicate } from "react-media-hook";
import Navbar from "./Navbar";
import RespNavbar from "./RespNavbar";

const NavbarSwitch = () => {
  const phone = useMediaPredicate("(max-width: 1000px)");
  return (
    <>
      {phone && <RespNavbar />}
      {!phone && <Navbar />}
    </>
  );
};

export default NavbarSwitch;
