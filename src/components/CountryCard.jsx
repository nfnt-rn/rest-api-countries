import React from "react";
import { useNavigate } from "react-router-dom";
import { CountryCardWrapper } from "../styles/country.styled";

export default function CountryCard({
  code,
  region,
  name,
  population,
  capital,
  image,
}) {
  let navigate = useNavigate();

  return (
    <CountryCardWrapper
      className="country-card-wrapper"
      onClick={(e) => {
        navigate(`/${code.toLowerCase()}`);
      }}
    >
      <img src={image} alt="flag" className="country-card-img" />
      <div className="country-card-details">
        <h3 className="country-card-title">{name}</h3>
        <div className="country-content country-card-content">
          <p className="country-content-key">
            Population:{" "}
            <span className="country-content-value">{population}</span>
          </p>
          <p className="country-content-key">
            Region: <span className="country-content-value">{region}</span>
          </p>
          <p className="country-content-key">
            Capital: <span className="country-content-value">{capital}</span>
          </p>
        </div>
      </div>
    </CountryCardWrapper>
  );
}
