import React, { useEffect, useState } from "react";

export default function BorderCountries({ borders }) {
  const [bnames, setBnames] = useState(null);
  useEffect(() => {
    async function fetchBorders() {
      let rs = [];
      borders.forEach(async (a) => {
        let res = await fetch(
          `https://restcountries.com/v2/alpha/${a.toLowerCase()}?fields=name`
        );
        res = await res.json();
        rs.push(res.name);
        setBnames([...rs]);
      });
    }
    fetchBorders();
  }, []);

  return (
    <div className="countries-border">
      <p className="country-borders-title">Border Countries :</p>
      <div className="country-borders">
        {bnames &&
          bnames.map((border) => (
            <p key={Math.random().toString()} className="country-border">
              {border}
            </p>
          ))}
      </div>
    </div>
  );
}
