import React, { useEffect, useState } from "react";
import { CountriesWrapper } from "../styles/country.styled";
import CountryCard from "./CountryCard";

export default function CountryCardList() {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    async function fetchCountries() {
      let res = await fetch("https://restcountries.com/v3.1/all");
      res = await res.json();
      setCountries(res);
      console.log(countries);
    }
    fetchCountries();
  }, []);
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
            image={co.flags.svg}
          />
        ))}
    </CountriesWrapper>
  );
}
