import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('/hello')
			.then((response) => response.text())
			.then((message) => {
				setMessage(message);
			});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{message}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
