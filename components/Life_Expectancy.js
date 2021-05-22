// Not finished
// Joia Zhang
// Life expectancy over time with interactive radio buttons and slider for GDP
const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api')
const selection = vl.selectPoint('Cars')
    .fields('Origin')         
    .init(origin[0])
    .bind(vl.radio(origin)) // do I need a semicolon here?

class Life_Expectancy extends IdyllVegaLite { // where do I specify data source?
  render() {
    this.props = {
      spec: vl.markLine().encode(
        vl.x().fieldN("Year").sort("none").axis({labelAngle: 0, ticks: false}),
        vl.y().fieldQ("Life expectancy at birth, male (years)"),
        vl.tooltip().fieldQ("Life expectancy at birth, male (years)") // how to also plot female life expectancy?
      ).toSpec(),
      ...this.props
    };

    return super.render();
  }
}
// how do I include a slider with GDP, since GDP is not in gender.csv?
module.exports = Life_Expectancy;

// after this visualization works, repeat for mortality rate.
