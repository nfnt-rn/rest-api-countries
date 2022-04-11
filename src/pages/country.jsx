import React, { useEffect, useState } from "react";
import { Button, DesktopFlex } from "../styles/country.styled";
import ArrowLeft from "../elements/arrowleft";
import Flag from "../assets/images/mx.svg";
import { useNavigate, useParams } from "react-router-dom";
import BorderCountries from "../components/BorderCountries";

export default function Country() {
  let params = useParams();
  let navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      let res = await fetch(
        `https://restcountries.com/v2/alpha/${params.country}`
      );
      res = await res.json();
      setCountry(res);
    }
    fetchCountry();
    console.log(country);
  }, []);

  return (
    <div className="country-page">
      <Button onClick={(e) => navigate("/")}>
        <ArrowLeft></ArrowLeft>
        Back
      </Button>

      <DesktopFlex>
        {/* flag */}
        {country !== null ? (
          <img src={country?.flag} alt="flag" className="flag" />
        ) : (
          <div className="flag"></div>
        )}
        {/* title */}
        {country !== null && (
          <div className="country-info">
            <h2>{country.name}</h2>
            {/* upto capital */}

            <div className="country-content-wrapper">
              <div className="country-content">
                <p className="country-content-key">
                  Native Name:{" "}
                  <span className="country-content-value">
                    {country.nativeName}
                  </span>
                </p>
                <p className="country-content-key">
                  Population:{" "}
                  <span className="country-content-value">
                    {country.population}
                  </span>
                </p>
                <p className="country-content-key">
                  Region:{" "}
                  <span className="country-content-value">
                    {country.region}
                  </span>
                </p>
                <p className="country-content-key">
                  Sub Region:{" "}
                  <span className="country-content-value">
                    {country.subregion}
                  </span>
                </p>
                <p className="country-content-key">
                  Capital:{" "}
                  <span className="country-content-value">
                    {country.capital}
                  </span>
                </p>
              </div>

              {/* lang, cur, top level dom */}

              <div className="country-content">
                <p className="country-content-key">
                  Top Level Domain:{" "}
                  <span className="country-content-value">
                    {country.topLevelDomain}
                  </span>
                </p>
                <p className="country-content-key">
                  Currencies:{" "}
                  <span className="country-content-value">
                    {country.currencies.map((a) => a.code).join(", ")}
                  </span>
                </p>
                <p className="country-content-key">
                  Languages:{" "}
                  <span className="country-content-value">
                    {country.languages.map((l) => l.name).join(", ")}
                  </span>
                </p>
              </div>
            </div>
            {/* border countries */}
            <BorderCountries borders={country.borders}></BorderCountries>
          </div>
        )}
      </DesktopFlex>
    </div>
  );
}
