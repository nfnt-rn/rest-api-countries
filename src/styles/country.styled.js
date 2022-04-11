import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 30px;
  @media (min-width: 1100px) {
    padding: 70px 40px;
  }
`;

export const Button = styled.button`
  box-shadow: 2px 2px 4px hsl(0, 0%, 88%), -3px -3px 4px hsl(0, 0%, 88%);
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
`;

export const DesktopFlex = styled.div`
  margin: 60px 0 40px;
  @media (min-width: 1100px) {
    display: flex;
    align-items: flex-start;
    gap: 80px;
  }
`;

// country card

export const CountryCardWrapper = styled.div`
  box-shadow: 2px 2px 4px hsl(0, 0%, 88%), -3px -3px 4px hsl(0, 0%, 88%);
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  @media (min-width: 1100px) {
    margin-bottom: 10px;
  }
`;

export const CountriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;
  }
`;

export const CountriesOuterWrapper = styled.div`
  max-width: 1536px;
  margin: 0 auto;
`;
