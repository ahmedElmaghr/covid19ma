import React, { Component } from "react";
import CountUp from "react-countup";
import "./GlobalInfo.css";
class GlobalInfo extends Component {
  render() {
      const {
        totalCases,
        totalconfirmed,
        totalrecovered,
        totaldeaths,
        todaycases,
        todaydeaths
      }=this.props;
    return (
      <div className="infotitle">
        <h2 className="title">العدد الإجمالي للمصابين</h2>
        <div className="confirmed">{totalCases}</div>
        <div class="bar">
        <div
            class="slice"
            style={{background: 'rgb(118, 118, 118)', width: 8+'px'}}
          ></div>
          <div
            class="slice"
            style={{background: 'rgb(96, 187, 105)', width: 70.6039+'px', marginRight: 4+'px'}}
          ></div>
           <div
            class="slice"
            style={{background: 'rgb(244, 195, 99)', width: 157.396+'px', marginRight: 4+'px'}}
          ></div>
        </div>
        <div className="infoTileData">
            <h2 className="legend">
                <div class="total">
                    {totalconfirmed}
                    <span class="badge badge-secondary" style={{ marginLeft: 1 + "rem" }}                    >
                        <CountUp end={todaycases}/>+
                    </span>
                </div>
                <div class="description">عدد المرضى</div>
                <div class="color" style={{background:'rgb(244, 195, 99)'}}></div>
            </h2>
            <h2 className="legend">
                <div class="total">
                    {totalrecovered}
                </div>
                <div class="description">حالات الشفاء</div>
                <div class="color" style={{background:'rgb(96, 187, 105)'}}></div>
            </h2>
            <h2 className="legend">
                <div class="total">
                    {totaldeaths}
                    <span class="badge badge-secondary" style={{ marginLeft: 1 + "rem" }}                    >
                        <CountUp end={todaydeaths}/>+
                    </span>    
                </div>
                <div class="description">الوفيات</div>
                <div class="color" style={{background:'rgb(118, 118, 118)'}}></div>
            </h2>
        </div>
      </div>
    );
  }
}

export default GlobalInfo;
