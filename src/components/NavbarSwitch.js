import React from "react";
import { useMediaPredicate } from "react-media-hook";
import Navbar from "./Navbar";
import RespNavbar from "./RespNavbar";

const NavbarSwitch = () => {
  const phone = useMediaPredicate("(max-width: 1000px)");
  return (
    <>
    <div> {phone && <RespNavbar />}</div>
     <div>  {!phone && <Navbar />}</div>
    </>
  );
};

export default NavbarSwitch;
