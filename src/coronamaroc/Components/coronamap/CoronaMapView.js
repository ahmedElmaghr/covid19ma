import * as d3 from "d3";
import React, { Component } from "react";
import { merge } from "topojson-client";
import "./CoronaMapViewCss.css";
import mapHelper from "./MapHelper"
export default class CoronaMapView extends Component {
  //Constantes

  width = window.screen.width;
  height = window.screen.height;
  viewBox = `50 0 800 400`;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { morrocancities, jsonData } = this.props;
    let markers = d3.selectAll("#markersCases");
    if (jsonData.length != 0 && markers.empty()) {
      //Draw svg Wrapper
      var svg = d3.selectAll("#content");
      var gGlobal = svg.append("g").attr("id", "gWrapper");
      //Merge moroccan sahara and draw morroca
      this.drawMorocco(gGlobal);
      //draw zone desease
      this.drawZone(morrocancities);
      //add zoom
      var wrapper = d3.select("#content");
      this.addZoom(wrapper);
    }
  }

  render() {
    var leftside = d3.selectAll(".leftside");
    var dashbordContainer = d3.selectAll("#dashbordContainer");
    var statMaCounter =d3.selectAll("#stat-ma-counter");
    let leftsideBBox = leftside.node().getBoundingClientRect()
    let dashbordContainerBBox = dashbordContainer.node().getBoundingClientRect()
    let statMaCounterBBox = statMaCounter.node().getBoundingClientRect()

    // let right = dashbordContainerBBox.width/2 + leftsideBBox.width + 'px'
    let left = leftsideBBox.width 
    let top = dashbordContainerBBox.height*.4 
    return (
      <svg id="content" className="svg" viewBox={this.viewBox} 
      // style={{top:0 ,left:left,marginTop:marginTop}}
      >
      </svg>
    );
  }

  drawMorocco = g => {
    //merge Morocco
    var jsonData = this.props.jsonData;
    //Moroccan Sahara id = 732
    //Morocco id = 504
    var morocco = jsonData.objects.countries.geometries.filter(
      d => d.id == 504
    );
    var morrocanSahara = jsonData.objects.countries.geometries.filter(
      d => d.id == 732
    );
    var toBeMerged = [morocco[0], morrocanSahara[0]];
    //
    g.append("path")
      .datum(merge(jsonData, toBeMerged))
      .attr("class", "morocco")
      .attr("d", d => this.calculatePath(d))
      .on("click", d => {
        this.props.clickOnCountry();
      });
  };

  drawZone = morrocancities => {
    var root = d3.select("#gWrapper");
    var markers = root.append("g").attr("id", "markers");
    markers
      .selectAll("circle")
      .data(morrocancities)
      .enter()
      .append("circle")
      .on("click", (d, i) => {})
      .attr("id", "markersCases")
      .attr("key", d => `marker-${d.citie.name}`)
      .attr("class", "marker-red")
      .attr("cx", d => {
        return this.getCx(d);
      })
      .attr("cy", d => {
        return this.getCy(d);
      })
      .attr("r", d => {
        return mapHelper.calculateRadius(d);
      })
      .append("title")
      .text(d => {
        return `${d.citie.name} : ${d.cases} حالة`;
      });
  };


  getCx = d => {
    if (d) {
      var lat = d.citie.coordinate.lat;
      var long = d.citie.coordinate.long;

      var coordinate = [long, lat];
      return this.projection()(coordinate)[0];
    }
  };

  getCy = d => {
    if (d) {
      var lat = d.citie.coordinate.lat;
      var long = d.citie.coordinate.long;
      var coordinate = [long, lat];
      return this.projection()(coordinate)[1];
    }
  };

  //Add zoom
  addZoom = svg => {
    var width = 1000;
    var height = 550;
    svg.call(
      d3.zoom()
      .scaleExtent([1, 40])
      .translateExtent([[0,0], [width, height]])
      .extent([[0, 0], [width, height]])
      .on("zoom", () => {
        this.zoomed(svg);
      })
    );
  };

  zoomed = svg => {
    var transform = d3.event.transform;
    svg.selectAll("path,circle").attr("transform", transform);
  };

  //Projection and path calculator
  projection = () => {
    var geoMercator = d3
      .geoMercator()
      .center([-15, 26])
      .scale(1200)
      .translate([800 / 2, 550 / 2]);

    return geoMercator;
  };

  calculatePath = d => {
    return d3.geoPath().projection(this.projection())(d);
  };
}
