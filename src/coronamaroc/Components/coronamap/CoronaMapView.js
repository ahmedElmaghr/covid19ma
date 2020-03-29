import * as d3 from "d3";
import { Component } from "react";
import { merge } from "topojson-client";
import "./CoronaMapViewCss.css";

export default class CoronaMapView extends Component {
  //Constantes

  width = window.screen.width;
  height = window.screen.height;
  viewBox = `50 0 800 400`;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log("componentWillMount");
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
    console.log("toBeMerged", toBeMerged);
    //
    g.append("path")
      .datum(merge(jsonData, toBeMerged))
      .attr("class", "morocco")
      .attr("d", d => this.calculatePath(d))
      .on("click", d => {
        this.props.clickOnCountry();
      });
  };

  render() {
    const { morrocancities } = this.props;
    let markers = d3.selectAll("#markersCases");
    if (markers.empty()) {
      this.drawZone(morrocancities);
    }
    return "";
  }

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
        return this.getRadius(d);
      })
      .append("title")
      .text(d => {
        return `${d.citie.name} : ${d.cases} حالة`;
      });
  };

  getRadius = d => {
    let rayon = d.cases / 5;
    console.log(rayon);
    return 0 < rayon && rayon < 1 ? 1 : rayon;
  };
  getCx = d => {
    console.log("d", d);
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

  //Draw svg wrapper for map
  drawSvgWrapper() {
    //Construct Body
    var body = d3.select("#mapMorocco");

    //Construct SVG
    var svg = body
      .append("svg")
      .attr("class", "svg")
      .attr("id", "content")
      .attr("viewBox", this.viewBox);
    return svg;
  }

  //Add zoom
  addZoom = svg => {
    svg.call(
      d3.zoom().on("zoom", () => {
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
  };

  calculatePath = d => {
    return d3.geoPath().projection(this.projection())(d);
  };
}
