import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../component/CardComponent";
import LineChart from "../component/linechart/Line Chart";
import DoughnutChart from "../component/piechart/DoughnutChart";
import CoronaMaContainer from "../coronamaroc/main/container/CoronaMaContainer";
import morrocancities from '../morrocan-data.json';
import "./Covid19Container.css";

// import PieChart from '../component/piechart/PieChart';
class Covid19Container extends Component {
  iconFontSize = 100 + "%";
  constructor(props) {
    super(props);
    this.state = {
      mapVisible: false
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://corona.lmao.ninja/v2/historical")
      .then(response => {
        response.json().then(data => {
          console.log("data", data);
          this.setState({
            historicalData: data
          });
        });
      })
      .catch(error => {
        // If there is any error you will catch them here
        console.log("error", error);
      });

    fetch("https://corona.lmao.ninja/countries/morocco")
      .then(response => {
        response.json().then(data => {
          console.log("data", data);
          this.setState({
            moroccanData: data
          });
        });
      })
      .catch(error => {
        // If there is any error you will catch them here
        console.log("error", error);
      });
  }

  render() {
    const { context } = this.props;
    return (
      <div className="row">
        <div className="leftside">
          <div className="group-btn">
            <div style={{ fontSize: this.iconFontSize, margin: 0 }}>
              <Link className="btn" to="/page1">
                <i className="fa fa-home" aria-hidden="true"></i>
              </Link>
            </div>
            <div style={{ fontSize: this.iconFontSize }}>
              <Link className="btn" to="/page2">
                <i
                  class="fa fa-line-chart"
                  aria-hidden="true"
                  style={{ fontSize: this.iconFontSize }}
                ></i>
              </Link>
            </div>
            <div style={{ fontSize: this.iconFontSize }}>
              <Link className="btn" to="/page3">
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
          <div id="dashboard" className="rightside">
            {this.buildPageByContext(context)}
          </div>
        </div>
      </div>
    );
  }
  /**Use the strategy pattern */
  buildPageByContext = context => {
    switch (context) {
      case "page1":
        return this.buildPage1();
      case "page2":
        return this.buildPage2();
      case "page3":
        return this.buildPage3();
    }
  };

  isPage1 = context => {
    if (context == "page1") {
      return true;
    }
    return false;
  };

  isPage2 = context => {
    if (context == "page2") {
      return true;
    }
    return false;
  };

  isPage3 = context => {
    if (context == "page3") {
      return true;
    }
    return false;
  };

  buildPage1 = () => {
      if(!this.state.moroccanData){
          return <div/>
      }
    const { active, deaths, recovered } = this.state.moroccanData;
    return (
      <div className="container" style={{ marginTop: 2 + "vh" }}>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col">
            <CardComponent
              level="danger"
              title="عدد الوفيات"
              value={deaths}
            ></CardComponent>
          </div>
          <div className="col">
            <CardComponent
              level="info"
              title="حالات الشفاء"
              value={recovered}
            ></CardComponent>
          </div>
          <div className="col">
            <CardComponent
              level="warning"
              title="عدد الإصابات"
              value={active}
            ></CardComponent>
          </div>
        </div>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col">
            <div id="mapMorocco">
              <CoronaMaContainer visible={true} data={morrocancities}></CoronaMaContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };
 

  buildPage2 = () => {
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
            <LineChart data={this.state.historicalData}></LineChart>
          </div>
        </div>
      </div>
    );
  };

  buildPage3 = () => {
    return (
      <div className="container" style={{ marginTop: 2 + "vh" }}>
        <h1>الإرشادات</h1>
        {/* <SimpleMap></SimpleMap> */}
      </div>
    );
  };
}

export default Covid19Container;
