import stylish from '@dmamills/stylish';

const iterateColors = (fn) => ([
  "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"
].map(c => fn(c)));


const loopNum = (n, fn) => {
  return [...Array(n).keys()].map(fn);
};

const flatten = (arr) => arr.reduce((acc, a) => acc.concat(a), []);

/**
* Takes an array of style objects and generates their classnames in bulk
* returning the name of the generated classes
*/
const applyToStylesheet = (styles) => {
  const classes = stylish(...styles.map(c => c.css));
  return styles.map(({ name }, idx) => ({
    css: classes[idx],
    name: name
  }));
};

/**
* Generates the background example styles
* note that this invokes stylish within the map, causing many DOM updates
* this is a bad way to use the framework
*/
export const backgroundGenerate = () => flatten(iterateColors(backgroundColor => loopNum(10, o => ({
  name: backgroundColor,
  css: stylish({ backgroundColor, opacity: `${o/10}` })
}))));

export const backgroundGenerateFast = () => applyToStylesheet(flatten(iterateColors(backgroundColor => loopNum(10, o => ({
    name: backgroundColor,
    css: { backgroundColor, opacity: `${o/10}` }
  })))));

export const textGenerate = () => applyToStylesheet(flatten(iterateColors(color => loopNum(10, o => ({
  name: color,
  css: { color, opacity: `${o/10}` }
})))));

