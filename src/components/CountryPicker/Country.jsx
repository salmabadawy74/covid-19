import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Country.module.css";
import { fetchcountries } from "../api/index.js";

export default function Country({ hundleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchcountries());
    };
    fetchApi();
  }, [setFetchedCountries]);
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect onChange={(e) => hundleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
