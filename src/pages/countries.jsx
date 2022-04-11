import React from "react";
import CountryCardList from "../components/CountryCardList";
import SearchBar from "../components/SearchBar";
import { CountriesOuterWrapper } from "../styles/country.styled";

export default function Countries() {
  return (
    <CountriesOuterWrapper>
      <SearchBar />
      <CountryCardList></CountryCardList>
    </CountriesOuterWrapper>
  );
}
