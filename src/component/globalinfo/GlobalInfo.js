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
        todaysRecovered,
        todaydeaths
      }=this.props;
    return (
      <div className="infotitle">
        <h2 className="title">العدد الإجمالي للمصابين</h2>
        <div className="confirmed">{totalCases}</div>
        <div className="infoTileData">
            <h2 className="legend">
                <div class="total">
                    {totalconfirmed}
                    <span>(+{todaycases})</span>
                </div>
                <div class="description">عدد المرضى</div>
                <div class="color" style={{background:'rgb(244, 195, 99)'}}></div>
            </h2>
            <h2 className="legend">
                <div class="total">
                    {totalrecovered}
                    <span>(+{todaysRecovered})</span>
                </div>
                <div class="description">حالات الشفاء</div>
                <div class="color" style={{background:'rgb(96, 187, 105)'}}></div>
            </h2>
            <h2 className="legend">
                <div class="total">
                    {totaldeaths}
                    <span>(+{todaydeaths})</span>
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
