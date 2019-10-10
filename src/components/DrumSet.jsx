import React, { useContext, useState } from 'react';
import { DrumPadContext } from '../context/DrumPadContext';
import DrumPad from './DrumPad';

const DrumSet = () => {
	const { activePad, padInfo, setMasterVolume } = useContext(DrumPadContext);
	const [sliderValue, setSliderValue] = useState(1);

	const handleInput = e => {
		setSliderValue(e.target.value);
		setMasterVolume(e.target.value / 10);
	};
	return (
		<>
			<div className='drum-set'>
				{activePad.map((pad, i) => (
					<DrumPad key={i} id={pad.key} classN={pad.class} clipSrc={pad.clip} />
				))}
				<div className='pad-info'>{padInfo}</div>
			</div>
			<div class='slidecontainer'>
				<input
					type='range'
					min='0'
					max='10'
					step='0.1'
					value={sliderValue}
					class='slider'
					id='myRange'
					onInput={handleInput}
				/>
			</div>
		</>
	);
};

export default DrumSet;
