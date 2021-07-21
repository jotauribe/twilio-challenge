import React from 'react';


// :v Why not?
export default function useBooleanRef() {
  const ref = React.useRef(false);
  const setRef = (value) => {
    ref.current = value;
  };

  return [ref, setRef];
}
