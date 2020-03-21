import * as d3 from "d3";
import React, { Component } from "react";
import { feature } from "topojson-client";
import CoronaMapView from "../../Components/coronamap/CoronaMapView";
import DataHelper from "../../Utils/DataHelper.js";
import countries110 from "./../../../../src/countries-110m.json";
import countries from "./../data/countries.tsv";
import covid19 from "./../data/covid19.json";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldData: [],
      jsonData: [],
      countries: [],
      covid19: covid19,
      pieOpacity: 0,
      panelOpacity: 0,

    };
  }


  componentDidMount() {
    let worldData = countries110;

    this.setState({
      worldData: feature(worldData, worldData.objects.countries).features,
      jsonData: worldData
    });

  }

  render() {
    if (this.props && !this.props.visible) {
      return "";
    }
    console.log("call Container render")
    const { jsonData, countries, panelOpacity } = this.state;
    if (jsonData.length != 0) {
      return (
          <CoronaMapView
            jsonData={jsonData}
            clickOnCountry={(d) => { this.clickOnCountry(d) }}
          />
      );
    } else {
      return "";
    }
  }

  clickOnCountry = d => {
    console.log("d", d);
  }

}

export default Container;
