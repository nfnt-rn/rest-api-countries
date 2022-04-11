import { NavbarContainer } from "./navbar.styled";
import Moon from "../elements/moon";
import { FlexRow } from "../styles/globals.styled";
import { useState } from "react";

export default function NavBar({ title }) {
  const [dark, setDark] = useState(false);
  return (
    <div className="navbar-full">
      <NavbarContainer dark={dark}>
        <header>{title}</header>
        <FlexRow
          onClick={(e) => {
            if (!dark) {
              setDark(true);
              document.body.classList.add("dark");
            } else {
              setDark(false);
              document.body.classList.remove("dark");
            }
          }}
        >
          <Moon></Moon>
          Dark Mode
        </FlexRow>
      </NavbarContainer>
    </div>
  );
}
