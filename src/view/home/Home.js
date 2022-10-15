import React, { Component } from "react";
import StackedAreaChart from "./../../component/stackedArea/StackedAreaChart";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch("https://disease.sh/v2/historical/france")
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            frenchHistoricalData: data,
          });
        });
      })
      .catch((error) => {
        // If there is any error you will catch them here
        console.log("error", error);
      });

    fetch("https://disease.sh/v2/historical/spain")
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            spainHistoricalData: data,
          });
        });
      })
      .catch((error) => {
        // If there is any error you will catch them here
        console.log("error", error);
      });

    fetch("https://disease.sh/v2/historical/italy")
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            italyHistoricalData: data,
          });
        });
      })
      .catch((error) => {
        // If there is any error you will catch them here
        console.log("error", error);
      });
    fetch("https://disease.sh/v2/historical/china")
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            chinaHistoricalData: data,
          });
        });
      })
      .catch((error) => {
        // If there is any error you will catch them here
        console.log("error", error);
      });
      fetch("https://disease.sh/v2/historical/usa")
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            usaHistoricalData: data,
          });
        });
      })
      .catch((error) => {
        // If there is any error you will catch them here
        console.log("error", error);
      });
  }
  
  render() {
    if (this.state) {
      return (
        <div>
          <div>
            <StackedAreaChart
              title="إجمالي تطور الحالات عبر العالم"
              theme="light1"
              data={this.getTopCountryCases()}
            ></StackedAreaChart>
          </div>
          <div>
          <StackedAreaChart
              title="إجمالي تطور الوفيات عبر العالم"
              theme="dark1"
              data={this.getTopCountryDeaths()}
            ></StackedAreaChart>
          </div>
        </div>
      );
    }else{
        return "";
    }

  }
  getTopCountryDeaths = () => {
    if (!this.state) {
        return null;
      }
      return [
        {
            type: "line",
            name: "USA",
            showInLegend: true,
            xValueFormatString: "YYYY",
            dataPoints: this.getDeathsPointByCountryName(
              this.state.usaHistoricalData
            ),
          }
          ,
      {
        type: "line",
        name: "France",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getDeathsPointByCountryName(
          this.state.frenchHistoricalData
        ),
      },{
        type: "line",
        name: "Italy",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getDeathsPointByCountryName(
          this.state.italyHistoricalData
        ),
      },{
        type: "line",
        name: "china",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getDeathsPointByCountryName(
          this.state.chinaHistoricalData
        ),
      },{
        type: "line",
        name: "spain",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getDeathsPointByCountryName(
          this.state.spainHistoricalData
        ),
      },
    ];
  }

  getTopCountryCases = () => {
    if (!this.state) {
      return null;
    }
    return [
        {
            type: "line",
            name: "USA",
            showInLegend: true,
            xValueFormatString: "YYYY",
            dataPoints: this.getCasePointByCountryName(
              this.state.usaHistoricalData
            ),
          }
          ,
      {
        type: "line",
        name: "France",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(
          this.state.frenchHistoricalData
        ),
      },{
        type: "line",
        name: "Italy",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(
          this.state.italyHistoricalData
        ),
      },{
        type: "line",
        name: "china",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(
          this.state.chinaHistoricalData
        ),
      },{
        type: "line",
        name: "spain",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: this.getCasePointByCountryName(
          this.state.spainHistoricalData
        ),
      },
    ];
  };


  getCasePointByCountryName = (data, countryName) => {
      if(!data){
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
      console.log("countryData", countryData);
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

  getDeathsPointByCountryName = (data, countryName) => {
    if(!data){
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
  var deaths = countryData.timeline.deaths;
  var keys = Object.keys(deaths);
  var values = Object.values(deaths);

  values.forEach((d, i) => {
    returnedData.push({
      y: d,
      label: keys[i],
    });
  });
  return returnedData;
};

  getFrenchCasePoint = (frenchData) => {
    var returnedData = [];

    var cases = frenchData.timeline.cases;
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
}

export default Home;
