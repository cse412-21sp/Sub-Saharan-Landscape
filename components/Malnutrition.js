const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api')
// how can I clean the SEDAC data using code (and not by deleting rows in excel)?
// how specify data source?
class Malnutrition extends IdyllVegaLite {
  render() {
    this.props = {
      spec: vl.markBar().encode(
        vl.x().fieldN("Country_Name").sort("none").axis({labelAngle: 0, ticks: false}),
        // how turn the current country codes into country names?
        vl.y().fieldQ("Percent_Malnutrition"), // need to change names of columns to this
        vl.tooltip().fieldQ("Percent_Malnutrition")
      ).toSpec(),
      ...this.props
    };
    // how to drop down menu: descending, ascending, alphabetical?
    // how to color by continent?
    return super.render();
  }
}

module.exports = Malnutrition;
// once this visualization works, apply to Underweight and Stunting
