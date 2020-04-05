import React, { Component } from "react";
import { feature } from "topojson-client";
import CoronaMapView from "../../Components/coronamap/CoronaMapView";
import countries110 from "./../../../../src/countries-110m.json";
import CountUp from "react-countup";
import './CoronaMaContainer.css'
class CoronaMaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldData: [],
      jsonData: [],
    };
    const mappleConfig = {
      mappleType: 'contra',
      shadow: true,
      borderRadius: 6,
      tipPosition: 14}
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
    const { jsonData} = this.state;
    const { data} = this.props;
    if (jsonData.length != 0) {
      return (
        <div>
          <div id="panelRegion" className="panel-region">
            <ul class="list-group">
              {data.map((value, index) => {
              return (
                <li class="list-group-item d-flex justify-content-between align-items-center" style={{height:1+'rem'}} >
                  {value.citie.name}
                  <span class="badge badge-primary badge-pill"><CountUp end={value.cases} /></span>
                </li>
              );
              })}
            </ul>
          </div>
          <CoronaMapView
            jsonData={jsonData}
            morrocancities={data}
            clickOnCountry={d => {
              this.clickOnCountry(d);
            }}
          />
        </div>
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
