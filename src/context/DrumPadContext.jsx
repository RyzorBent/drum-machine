import React, { createContext, useState } from 'react';

export const DrumPadContext = createContext();
const drumPatch = [
	{
		key: 'q',
		info: 'Heater 1',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
	},
	{
		key: 'w',
		info: 'Heater 2',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
	},
	{
		key: 'e',
		info: 'Heater 3',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
	},
	{
		key: 'a',
		info: 'Heater 4',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
	},
	{
		key: 's',
		info: 'Heater 6',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
	},
	{
		key: 'd',
		info: 'Sharp Hat',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
	},
	{
		key: 'z',
		info: 'Kick & Hat',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
	},
	{
		key: 'x',
		info: 'Kick',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
	},
	{
		key: 'c',
		info: 'High Hat 2',
		class: 'pad',
		clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
	}
];

const DrumPadContextProvider = props => {
	const [activePad, setActivePad] = useState(drumPatch);
	const [padInfo, setPadInfo] = useState('');
	const [masterVolume, setMasterVolume] = useState(0.1);

	const triggerPad = key => {
		const newPatch = drumPatch.map(pad => {
			if (pad.key === key) {
				setPadInfo(pad.info);
				return { ...pad, class: 'pad active-pad' };
			} else {
				return pad;
			}
		});
		setActivePad(newPatch);
	};

	return (
		<DrumPadContext.Provider
			value={{
				activePad,
				drumPatch,
				triggerPad,
				padInfo,
				setMasterVolume,
				masterVolume,
				setPadInfo
			}}
		>
			{props.children}
		</DrumPadContext.Provider>
	);
};

export default DrumPadContextProvider;
