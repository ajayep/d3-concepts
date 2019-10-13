import "./styles.css";
import * as d3 from "d3";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var td = d3.selectAll("tr").selectAll("td");
d3.selectAll("td").append("p");
d3.select("body").datum(42);
d3.select("body")
  .datum(42)
  .append("h1");
console.log(d3.selectAll("h1")[0][0].__data__);
