import React, { useState, useEffect } from "react";
import CountryCardList from "../components/CountryCardList";
import SearchBar from "../components/SearchBar";
import { CountriesOuterWrapper } from "../styles/country.styled";

export default function Countries() {
  const [countries, setCountries] = useState(null);
  const [fullCountries, setFullCountries] = useState(null);
  useEffect(() => {
    async function fetchCountries() {
      let res = await fetch("https://restcountries.com/v3.1/all");
      res = await res.json();
      setCountries(res);
      setFullCountries(res);
      console.log(countries);
    }
    fetchCountries();
  }, []);
  return (
    <CountriesOuterWrapper>
      <SearchBar setCountries={setCountries} fullCountries={fullCountries} />
      <CountryCardList countries={countries}></CountryCardList>
    </CountriesOuterWrapper>
  );
}
