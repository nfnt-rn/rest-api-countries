import styled from "styled-components";

export const NavbarContainer = styled.div`
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 1px 1px 4px hsl(0, 0%, 88%);
  height: 80px;
  @media (min-width: 1100px) {
    padding: 40px;
  }
`;
