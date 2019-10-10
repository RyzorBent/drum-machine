import React, { createContext, useState } from 'react';

export const DrumPadContext = createContext();
const drumPatch = [
	{
		key: 'q',
		info: 'Closed Hat',
		class: 'pad',
		clip:
			'https://res.cloudinary.com/dxj51gxjo/video/upload/v1570619801/drum-samples/Closed_Hat_041.wav'
	},
	{
		key: 'w',
		info: 'Snare',
		class: 'pad',
		clip:
			'https://res.cloudinary.com/dxj51gxjo/video/upload/v1570619752/drum-samples/XBase09_Snare18.wav'
	},
	{
		key: 'e',
		info: 'Analog Snare',
		class: 'pad',
		clip:
			'https://res.cloudinary.com/dxj51gxjo/video/upload/v1570619669/drum-samples/Snare_Analogue14.wav'
	},
	{
		key: 'a',
		info: 'Misc Perc',
		class: 'pad',
		clip:
			'https://res.cloudinary.com/dxj51gxjo/video/upload/v1570619570/drum-samples/Misc_Analague_perc_04.wav'
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
