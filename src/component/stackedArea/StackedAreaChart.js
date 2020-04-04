import React, { Component } from "react";
import "./StackedAreaChart.css";
import CanvasJSReact from "../../canvas-reactjs/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StackedAreaChart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const { data } = this.props;
    if (!data) {
      return <div />;
    }
    const options = {
      theme: this.props.theme,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ""
      },
      axisY: {
        title: "عدد الحالات"
      },
      toolTip: {
        shared: true
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries
      },
      data: this.props.data
    };
    return (
      <div>
        <h1 style={{padding:'2rem'}}>{this.props.title}</h1>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }

  
}

export default StackedAreaChart;
