import React from "react";
import { CountriesWrapper } from "../styles/country.styled";
import CountryCard from "./CountryCard";

export default function CountryCardList({ countries }) {
  return (
    <CountriesWrapper>
      {countries &&
        countries.map((co) => (
          <CountryCard
            code={co.cca2}
            name={co.name.common}
            key={Math.random().toString()}
            region={co.region}
            population={co.population}
            capital={co.capital}
            image={co.flags.png}
          />
        ))}
    </CountriesWrapper>
  );
}
