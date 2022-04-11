import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  margin-bottom: 60px;
  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const InputWrapper = styled.input`
  box-shadow: 2px 2px 4px hsl(0, 0%, 88%), -3px -3px 4px hsl(0, 0%, 88%);
  padding: 16px 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  border-radius: 7px;
`;
