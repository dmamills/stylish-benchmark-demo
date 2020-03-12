import React from 'react';
import { colorsContainer } from './styles';

const GeneratedCollection = ({ collection, className }) => {
  if(!collection || collection.length === 0) return false;

  return (
      <div className={colorsContainer}>
      {collection.map((c, idx) => {
        return (
            <div key={`${c.name}${idx}`} className={className}>
            <strong className={c.css}>{c.name}</strong>
            <strong className={c.css}>{c.css}</strong>
            </div>
        );
      })}
    </div>
  )
}

export default GeneratedCollection;
