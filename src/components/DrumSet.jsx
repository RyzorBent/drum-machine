import React, { useContext, useState } from 'react';
import DrumPadContext from '../context/DrumPadContext'
import DrumPad from './DrumPad';

const DrumSet = () => {
    const { patchSet, activeDrum, triggerDrum } = useContext(DrumPadContext);

    return ( 
        <div className="drum-set">
        test
        {patchSet.map(pad=><DrumPad pad={pad}/>)}
        </div>
     );
}
 
export default DrumSet;