import React, { useState } from "react";
import ChevronDown from "../elements/chevrondown";
import Close from "../elements/close";
import Search from "../elements/search";
import { SearchBarWrapper, InputWrapper } from "../styles/searchbar.styled";

export default function SearchBar({ setCountries, fullCountries, countries }) {
  const [region, setRegion] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  const [selected, setCurrentSelected] = useState(null);
  const [toggleOptions, setToggleOptions] = useState(false);

  const searchCountries = (value) => {
    setCountries(
      countries?.map((a) => {
        console.log(a);
        if (a.name.common.toLowerCase().includes(value.toLowerCase())) {
          return {
            ...a,
            show: true,
          };
        } else {
          return {
            ...a,
            show: false,
          };
        }
      })
    );
  };

  const selectItem = async (val) => {
    setCurrentSelected(val);
    setToggleOptions(false);
    let res = await fetch(
      `https://restcountries.com/v3.1/region/${val.toLowerCase()}`
    );
    res = await res.json();
    setCountries(
      res.map((a) => {
        return {
          ...a,
          show: true,
        };
      })
    );
  };

  return (
    <SearchBarWrapper>
      <div className="country-input-box">
        <InputWrapper
          onChange={(e) => searchCountries(e.target.value)}
          type="search"
          name="search"
          placeholder="Search for a country..."
          id="search"
        ></InputWrapper>
        <div className="country-input-search-icon">
          <Search></Search>
        </div>
      </div>

      <div
        className="country-input-filter"
        onClick={(e) => {
          setToggleOptions(!toggleOptions);
        }}
      >
        <div className=""> {!selected ? "Filter by Region" : selected}</div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setCurrentSelected(null);
            setCountries(fullCountries);
          }}
        >
          {!selected ? <ChevronDown></ChevronDown> : <Close></Close>}
        </div>
        {toggleOptions && (
          <div
            className="country-regions-filter-list"
            onMouseLeave={(e) => setToggleOptions(false)}
          >
            {region.map((r) => (
              <div
                onClick={(e) => selectItem(r)}
                className="country-regions-filter-list-item"
                key={Math.random().toString()}
              >
                {r}
              </div>
            ))}
          </div>
        )}
      </div>
    </SearchBarWrapper>
  );
}
