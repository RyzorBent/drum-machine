import React, { useEffect, useContext } from 'react';
import { DrumPadContext } from './../context/DrumPadContext';

const DrumPad = ({ id, classN, clipSrc }) => {
	const { triggerPad, masterVolume, setPadInfo } = useContext(DrumPadContext);

	useEffect(() => {
		//this useState runs all the time
		const handlePress = ({ key }) => {
			const loweredKey = key.toLowerCase();

			const playPadSound = document.getElementById(`audio-${loweredKey}`);
			if (playPadSound) {
				playPadSound.volume = masterVolume;
				playPadSound.play();
			}
			triggerPad(loweredKey); //update global state
		};
		const handleUp = e => {
			triggerPad(''); //remove pad color
			setPadInfo('');
		};
		window.addEventListener('keydown', handlePress);
		window.addEventListener('keyup', handleUp);
		return () => {
			window.removeEventListener('keydown', handlePress);
			window.removeEventListener('keyup', handleUp);
		};
	});
	return (
		<div className={classN} id={id}>
			{id.toUpperCase()}
			<audio id={`audio-${id}`}>
				<source src={clipSrc} />
			</audio>
		</div>
	);
};

export default DrumPad;
