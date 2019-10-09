import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import DrumPadContextProvider from './context/DrumPadContext';
import DrumSet from './components/DrumSet';

function App() {
	return (
		<div className='App'>
			<p className='heading'>DRUM SET</p>
			<div id='drum-machine'>
        <DrumPadContextProvider>
					<DrumSet />
				</DrumPadContextProvider>
			</div>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
