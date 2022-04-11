import { NavbarContainer } from "./navbar.styled";
import Moon from "../elements/moon";
import { FlexRow } from "../styles/globals.styled";

export default function NavBar({ title }) {
  return (
    <NavbarContainer>
      <header>{title}</header>
      <FlexRow>
        <Moon></Moon>
        Dark Mode
      </FlexRow>
    </NavbarContainer>
  );
}
