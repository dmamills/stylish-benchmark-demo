import React, { Component } from 'react';
import stylish from '@dmamills/stylish';

import { textGenerate, backgroundGenerate } from './util';

const base = stylish({
  fontFamily: 'Arial',
});

const colorsContainer = stylish({
  border: '1px solid black',
  display: 'flex',
  flexWrap: 'wrap'
});

const textBox = stylish({
  border: '1px solid black',
  margin: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#111111',
  padding: '0.5rem',
  width: '100px',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
});

const box = stylish({
  border: '1px solid black',
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


const instant1 = performance.now();
const pregen = textGenerate();
const instant2 = performance.now();
const instantTimeTaken = (instant2 - instant1);
console.log(instantTimeTaken);

class App extends Component {
  state = {};
  generate = () => {
    const n1 = performance.now();
    const colors = backgroundGenerate();
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
          <p>This page uses stylish two ways, the first it already has, it generated <strong>1480 css rules</strong>, that you can see presented here already. It took <strong>{instantTimeTaken} milliseconds</strong> to generate them. It did this in a single call to stylish. The most optimal way to use stylish is to arrange your objects first, and them pass them to stylish. This present unnecessary updates to the stylesheet node.</p>

<h2>Optimal Example</h2>
<pre>{`
   const fontSizes = [0.5,1,1.2,1.5,1.6,2].map(size => ({ fontSize: size + 'rem' }));
   const [small, base, med, large, xlarge, xxlarge ] = stylish(fontSizes);

`}</pre>
<h2>Bad Example</h2>
        <p>When you press the button, it will generate the styles individually, a few dozen calls to stylish to build up your rules is fine, but as you'll see it's much faster to group your calls where possible. You can notice that while the first load will take a long time, subsuquent calls to stylish will recognize cached rules and be much quicker.</p>
<pre>{`
    const [small, base, med, large, xlarge, xxlarge ] = [0.5,1,1.2,1.5,1.6,2].map(size => stylish({ fontSize: size + 'rem' }));
`}</pre>

        <p>For more information about stylish please see the <a href="https://dmamills.github.io/stylish">documentation</a></p>
          <button onClick={this.generate}>Generate styles</button>
          <p>Generated: <strong>{colors ? colors.length : 0} css rules</strong> in <strong>{timeTaken ? timeTaken : ''} milliseconds</strong></p>
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
        <div className={colorsContainer}>
        {pregen && pregen.map((c,idx) => {
            return (
                <div key={`${c.name}${idx}`} className={textBox}>
                    <strong className={c.css}>{c.name}</strong>
                    <strong className={c.css}>{c.css}</strong>
                </div>)
        })}
        </div>
      </div>
    );
  }
}

export default App;
