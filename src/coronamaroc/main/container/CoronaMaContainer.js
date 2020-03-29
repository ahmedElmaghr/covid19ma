import React, { Component } from "react";
import { feature } from "topojson-client";
import CoronaMapView from "../../Components/coronamap/CoronaMapView";
import countries110 from "./../../../../src/countries-110m.json";

class CoronaMaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldData: [],
      jsonData: [],

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
    if (!this.props.visible) {
      return <div/>;
    }
    console.log("call Container render")
    const { jsonData} = this.state;
    if (jsonData.length != 0) {
      return (
          <CoronaMapView
            jsonData={jsonData}
            morrocancities = {this.props.data}
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

export default CoronaMaContainer;
