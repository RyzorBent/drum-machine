import React, {createContext, useState} from 'react';

export const DrumPadContext = createContext();

const DrumPadContextProvider = props => {
  const [activeDrum, setActiveDrum] = useState({});
  const patchSet = [
      {q: 'qaa'},
      {w: 'wuu'},
      {e: 'eii'},
      {a: 'aio'},
      {s: 'sha'},
      {d: 'dum'},
      {z: 'zap'},
      {x: 'xrr'},
      {c: 'cish'},
  ]
  const triggerDrum = key => setActiveDrum({key: key.letter})

  return (
    <DrumPadContext.Provider value={{patchSet, activeDrum, triggerDrum}}>
      {props.children}
    </DrumPadContext.Provider>
  )
}

export default DrumPadContextProvider;