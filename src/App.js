import React, { useState } from 'react';

import GeneratedCollection from './GeneratedCollection';
import { textGenerate, backgroundGenerate, backgroundGenerateFast } from './util';
import { base, textBox, box } from './styles';

const runGenerate = (fn) => {
  const t1 = performance.now();
  const result = fn();
  const t2 = performance.now();
  const time = (t2 - t1);
  return { result, time };
}


const instant = runGenerate(textGenerate);
const pregen = instant.result;
const instantTimeTaken = instant.time;

const App = () => {
  const [timeTaken, setTimeTaken] = useState(null);
  const [colors, setColors] = useState(null);

  const generate = () => {
    const result = runGenerate(backgroundGenerate);
    setTimeTaken(result.time)
    setColors(result.result);
  }

  const generateFast = () => {
    const result = runGenerate(backgroundGenerateFast);
    setTimeTaken(result.time)
    setColors(result.result);

    /* const n1 = performance.now();
     * const updatedColors= backgroundGenerateFast();
     * const n2 = performance.now();
     * const time = (n2 - n1);
     * setTimeTaken(time)
     * setColors(updatedColors); */
  }

  return (
      <div className={base}>
        <div>
          <h1>Stylish Example</h1>
          <h2>Optimal Example</h2>
          <p>This page uses stylish two ways, the first it already has, it generated <strong>1480 css rules</strong>, that you can see presented here already. It took <strong>{instantTimeTaken} milliseconds</strong> to generate them. It did this in a single call to stylish. The most optimal way to use stylish is to arrange your objects first, and them pass them to stylish. This present unnecessary updates to the stylesheet node.</p>

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
        <div>
          <button onClick={generate}>Generate styles (suboptimal)</button>
          <button onClick={generateFast}>Generate styles (optimal)</button>
        </div>
          <p>Generated: <strong>{colors ? colors.length : 0} css rules</strong> in <strong>{timeTaken ? timeTaken : ''} milliseconds</strong></p>
        </div>

          <GeneratedCollection collection={colors} className={box} />
          <GeneratedCollection collection={pregen} className={textBox} />
      </div>

  );
}

export default App;
