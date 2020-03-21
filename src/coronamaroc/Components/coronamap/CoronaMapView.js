import * as d3 from "d3";
import { Component } from "react";
import { merge } from "topojson-client";
import "./CoronaMapViewCss.css";

export default class CoronaMapView extends Component {
  //Constantes

  width = "100%";
  height = "100%";
  viewBox = `0 0 800 400`;
  borderColor = "blue";
  constructor(props) {
    super(props);
    this.state = {
      medias_francais: [],
    };
  }

  

  componentWillMount() {
    console.log("componentWillMount")
    if (this.props.jsonData.length != 0) {
      //Draw svg Wrapper
      var svg = this.drawSvgWrapper();
      var gGlobal = svg.append("g").attr("id", "gWrapper");
      //Merge moroccan sahara and draw morroca
      this.drawMorocco(gGlobal);
      //
      //add zoom
      var wrapper = d3.select("#content");
      this.addZoom(wrapper);
    }
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
    console.log("toBeMerged", toBeMerged)
    //
    g.append("path")
      .datum(merge(jsonData, toBeMerged))
      .attr("class", "morocco")
      .attr("d", d => this.calculatePath(d))
      .on("click", (d) => {
        console.log("Welcome to morocco <3", d)
        this.props.clickOnCountry()
      })
  };

  render() {
    return (
      ""
    );
  }

  //Draw svg wrapper for map
  drawSvgWrapper() {
    //Construct Body
    var body = d3.select("#mapMorocco")

    //Construct SVG
    var svg = body
      .append("svg")
      .attr("class", "svg")
      .attr("id", "content")
      // .attr("width", this.width)
      // .attr("height", this.height)
      .attr("viewBox", this.viewBox)
      ;
    return svg;
  }

 

  //Add zoom
  addZoom = svg => {
    svg.call(d3.zoom().on("zoom", () => {
      this.zoomed(svg)
    }));
  };

  zoomed = svg => {
    var transform = d3.event.transform;

    svg.selectAll("path").attr("transform", transform);

  };


  //Projection and path calculator
  projection = () =>{
    var geoMercator = d3.geoMercator()
      .center([-15,26])
      .scale(1200)
      .translate([800 / 2, 550 / 2]);

    var projection2 = d3
      .geoOrthographic()
      .scale(300)
      .precision(0.1);
    var projection3 = d3
      .geoConicEqualArea()
      .scale(150)
      .center([0, 33])
      //.translate([width / 2, height / 2])
      .precision(0.3);
    return geoMercator;
  }

  calculatePath = d => {
    return d3.geoPath().projection(this.projection())(d);
  };
}
