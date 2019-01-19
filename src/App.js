import React, { Component } from 'react';
import stylish from '@dmamills/stylish';

const base = stylish({
  fontFamily: 'Arial',
});

const colorsContainer = stylish({
  border: '1px solid black',
  display: 'flex',
  flexWrap: 'wrap'
});


const box = stylish({
  margin: '1rem',
  borderRadius: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  height: '200px',
  textAlign: 'center'
});


const generateStyles = () => {
  return [
  "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"
  ].map(backgroundColor => {
    return [1,2,3,4,5,6,7,8,9,10].map(o => {
      return {
        name: backgroundColor,
        css: stylish({ backgroundColor, opacity: `${o/10}` })
      };
    });
  }).reduce((acc, c) => {
    return acc.concat(c);
  },[]);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  generate = () => {

    const n1 = performance.now();
    const colors = generateStyles();
    const n2 = performance.now();
    const timeTaken = (n2 - n1);

    this.setState({
      timeTaken,
      colors
    });
  }

  render() {
    const { colors, timeTaken } = this.state;

    return (
      <div className={base}>
        <div>
          <h1>Stylish Example</h1>
          <button onClick={this.generate}>Generate styles</button>
          <strong>Generated: {colors ? colors.length : 0} css rules in {timeTaken ? timeTaken : ''} milliseconds</strong>
        </div>

        <div className={colorsContainer}>
          {colors && colors.map((c,idx) => {
            return (
              <div key={`${c.name}${idx}`} className={`${box} ${c.css}`}>
                <strong>{c.name}</strong>
                <strong>{c.css}</strong>
              </div>)
          })}
        </div>
      </div>
    );
  }
}

export default App;
