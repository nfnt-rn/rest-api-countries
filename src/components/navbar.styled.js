import styled from "styled-components";

export const NavbarContainer = styled.div`
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ dark }) => (dark ? "hsl(209, 23%, 22%)" : "white")};
  height: 80px;
  @media (min-width: 1100px) {
    padding: 40px 0;
    max-width: 1536px;
    margin: 0 auto;
  }
`;
