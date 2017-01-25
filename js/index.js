import * as d3 from "d3";
import * as geo from "d3-geo";

const width = 960;
const height = 500;

let projection = geo.geoAlbers()
  .translate([width/2, height/2])
  .scale([1000]);

let path = geo.geoPath(projection);

let svg = d3.select("body")
  .append("svg")
  .attr("witdth", width)
  .attr("height", height);

d3.json("./stateOutlines.json", function(json) {
  svg.selectAll("path")
     .data(json.features)
     .enter()
     .append("path")
     .attr("d", path)
     .style("stroke", "#fff")
     .style("stroke-width", "1")
});


