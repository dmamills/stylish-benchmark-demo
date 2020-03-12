import stylish from '@dmamills/stylish';

stylish.raw(`
body { color: rgb(77, 78, 83); }
`);

export const base = stylish({
  fontFamily: 'Arial',
  margin: '1rem',
});

export const colorsContainer = stylish({
  margin: '1rem',
  padding: '1rem',
  display: 'flex',
  flexWrap: 'wrap'
});

export const textBox = stylish({
  border: '1px solid black',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
});

export const box = stylish({
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

