import React, { useState } from "react";
import ChevronDown from "../elements/chevrondown";
import Search from "../elements/search";
import { SearchBarWrapper, InputWrapper } from "../styles/searchbar.styled";

export default function SearchBar() {
  const [region, setRegion] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  const [selected, setCurrentSelected] = useState(null);
  const [toggleOptions, setToggleOptions] = useState(false);

  const selectItem = (val) => {
    setCurrentSelected(val);
    toggleOptions(false);
  };

  return (
    <SearchBarWrapper>
      <div className="country-input-box">
        <InputWrapper
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
        <div>
          <ChevronDown></ChevronDown>
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
