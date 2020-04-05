import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Covid19Container.css";
import GlobalInfo from "../component/globalinfo/GlobalInfo";
import LineChart from "../component/linechart/Line Chart";
import DoughnutChart from "../component/piechart/DoughnutChart";
import CoronaMaContainer from "../coronamaroc/main/container/CoronaMaContainer";
import morrocancities from "../morrocan-data.json";
import StackedAreaChart from "./../component/stackedArea/StackedAreaChart";
import Home from "./../view/home/Home";
import CanvasJSReact from '../canvas-reactjs/canvasjs.react';
import uiHelper from './../coronamaroc/Utils/UIHelper'
import Infos from "../view/info/Infos";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Covid19Container extends Component {
  iconFontSize = 100 + "%";
  constructor(props) {
    super(props);
    this.state = {
      mapVisible: false,
    };
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/historical")
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            historicalData: data,
          });
        });
      })
      .catch((error) => {
        // If there is any error you will catch them here
      });

    fetch("https://corona.lmao.ninja/countries/morocco")
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            moroccanData: data,
          });
        });
      })
      .catch((error) => {
        // If there is any error you will catch them here
      });
  }

  

  render() {
    const { context } = this.props;
    var screenHeight = window.screen.height;
    return (
      <div className="row">
        <div className="leftside">
          <div className="group-btn">
            <div style={{ fontSize: this.iconFontSize, margin: 0 }}>
              <Link className="btn" to={process.env.PUBLIC_URL + "/home"}>
                <i className="fa fa-home" aria-hidden="true"></i>
              </Link>
            </div>
            <div style={{ fontSize: this.iconFontSize, margin: 0 }}>
              <Link className="btn" to={process.env.PUBLIC_URL + "/page3"}>
                <i className="fa fa-line-chart" aria-hidden="true"></i>
              </Link>
            </div>
            <div style={{ fontSize: this.iconFontSize }}>
              <Link className="btn" to={process.env.PUBLIC_URL + "/page2"}>
                <i
                  class="fa fa-globe"
                  aria-hidden="true"
                  style={{ fontSize: this.iconFontSize }}
                ></i>
              </Link>
            </div>
            <div style={{ fontSize: this.iconFontSize }}>
              <Link className="btn" to={process.env.PUBLIC_URL + "/page4"}>
                <i
                  class="fa fa-info"
                  aria-hidden="true"
                  style={{ fontSize: this.iconFontSize }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
        <div id="dashbordContainer" class="dash-container">
          <div
            id="dashboard"
            className="rightside"
            style={{ height: screenHeight + "px" }}
          >
            {this.buildPageByContext(context)}
          </div>
        </div>
      </div>
    );
  }
  /**Use the strategy pattern */
  buildPageByContext = (context) => {
    switch (context) {
      case "page1":
        return this.buildPage1();
      case "page2":
        return this.buildPage2();
      case "page3":
        return this.buildPage3();
      case "page4":
        return this.buildPage4();
    }
  };

  isPage1 = (context) => {
    if (context == "page1") {
      return true;
    }
    return false;
  };

  isPage2 = (context) => {
    if (context == "page2") {
      return true;
    }
    return false;
  };

  isPage3 = (context) => {
    if (context == "page3") {
      return true;
    }
    return false;
  };

  buildPage1 = () => {
    if (!this.state.moroccanData) {
      return <div />;
    }
    const {
      active,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      cases,
    } = this.state.moroccanData;
    return (
      <div className="container-fluid" style={{ marginTop: 2 + "vh" }}>
        <div id="stat-ma-counter">
          <h3>فيروس كورونا عبر جهات المملكة</h3>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col">
              <div id="mapMorocco">
                <CoronaMaContainer
                  visible={true}
                  data={morrocancities}
                ></CoronaMaContainer>
              </div>
              {this.state.historicalData && 
              <CanvasJSChart options={uiHelper.buildMoroccoLineChartData(this.state.historicalData)} />
            }
            </div>
            <div className="col-2">
              <GlobalInfo
                totalCases={cases}
                totalconfirmed={active}
                totalrecovered={recovered}
                totaldeaths={deaths}
                todaycases={todayCases}
                todaydeaths={todayDeaths}
              ></GlobalInfo>
            </div>
          </div>
        </div>
      </div>
    );
  };
  buildPage2 = () => {
    return <Home historicalData={this.state.historicalData}></Home>;
  };
  buildPage3 = () => {
    return (
      <div className="container" style={{ marginTop: 2 + "vh" }}>
        <h1>الإحصائيات</h1>
        <div className="row" style={{ marginTop: 2 + "vh" }}>
          <div className="col">
            <DoughnutChart data={this.state.moroccanData}></DoughnutChart>
          </div>
          <div className="col">
            <LineChart data={this.state.historicalData}></LineChart>
          </div>
        </div>
        <div className="row" style={{ marginTop: 2 + "vh" }}>
          <div className="col">
            <StackedAreaChart
              data={this.getNorthAfricaData(this.state.historicalData)}
              theme="light2"
            ></StackedAreaChart>
          </div>
        </div>
      </div>
    );
  };

  getNorthAfricaData = (data) => {
    if (!data) {
      return null;
    }

    return [
      {
        type: "stackedArea",
        name: "Mauritania",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(data, "Mauritania"),
      },
      {
        type: "stackedArea",
        name: "Lybia",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(
          data,
          "Libyan Arab Jamahiriya"
        ),
      },
      {
        type: "stackedArea",
        name: "Tunisia",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(data, "Tunisia"),
      },
      {
        type: "stackedArea",
        name: "Maroc",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(data, "Morocco"),
      },
      {
        type: "stackedArea",
        name: "Egypt",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(data, "Egypt"),
      },
      {
        type: "stackedArea",
        name: "Algérie",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(data, "Algeria"),
      },
    ];
  };

  getCasePointByCountryName = (data, countryName) => {
    if (!data) {
      return "";
    }
    var returnedData = [];
    var countryData;
    if (countryName) {
      countryData = data.filter((d) => {
        return d.country == countryName;
      })[0];
    } else {
      countryData = data;
    }
    var cases = countryData.timeline.cases;
    var keys = Object.keys(cases);
    var values = Object.values(cases);

    values.forEach((d, i) => {
      returnedData.push({
        y: d,
        label: keys[i],
      });
    });
    return returnedData;
  };

  buildPage4 = () => {
    return (
      <div className="container" style={{ marginTop: 2 + "vh" }}>
        <Infos></Infos>
      </div>
    );
  };
}

export default Covid19Container;
