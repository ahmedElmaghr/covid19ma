import React, { Component } from "react";
import CardComponent from "./../CardComponent";
import CountUp from "react-countup";

class Cards extends Component {
  render() {
    let { deaths, recovered, active } = this.props;
    return (
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col">
          <CardComponent
            level="danger"
            title="عدد الوفيات"
            value={<CountUp end={deaths} />}
          ></CardComponent>
        </div>
        <div className="col">
          <CardComponent
            level="good"
            title="حالات الشفاء"
            value={<CountUp end={recovered} />}
          ></CardComponent>
        </div>
        <div className="col">
          <CardComponent
            level="warning"
            title="عدد الإصابات"
            value={<CountUp end={active} />}
          ></CardComponent>
        </div>
      </div>
    );
  }
}

export default Cards;
