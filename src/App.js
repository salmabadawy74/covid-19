import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Country from "./components/CountryPicker/Country";
import styles from "./App.module.css";
import { fetchData } from "./components/api/index";

export default class componentName extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({ data });
  }
  hundleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });

    console.log(data);
  };
  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <Country hundleCountryChange={this.hundleCountryChange} />

        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}
